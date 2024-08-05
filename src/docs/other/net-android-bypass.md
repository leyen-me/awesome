### 准备

- 红米K20Pro
  - MT管理器
  - Vpn 
- Windows
  - Mindows工具箱

### 步骤

1. Usb连接手机
2. 打开开发者模式
3. 开启USB调试
4. 下载[Mindwos](https://mindows.cn/)
5. 打开Mindows，刷入面具ROOT
6. 重启手机，打开MT管理器，打开终端
7. 切换为ROOT模式
8. 新建文件`data/local/proxy/proxy.sh`

```sh
#!/system/bin/sh

tun='tun0' #虚拟接口名称
dev='wlan0' #物理接口名称，eth0、wlan0
interval=3 #检测网络状态间隔(秒)
pref=18000 #路由策略优先级

# 开启IP转发功能
sysctl -w net.ipv4.ip_forward=1

# 清除filter表转发链规则
iptables -F FORWARD

# 添加NAT转换，部分第三方VPN需要此设置否则无法上网，若要关闭请注释掉
iptables -t nat -A POSTROUTING -o $tun -j MASQUERADE

# 添加路由策略
ip rule add from all table main pref $pref
ip rule add from all iif $dev table $tun pref $(expr $pref - 1)

contain="from all iif $dev lookup $tun"

while true ;do
    if [[ $(ip rule) != *$contain* ]]; then
            if [[ $(ip ad|grep 'state UP') != *$dev* ]]; then
                echo -e "[$(date "+%H:%M:%S")]dev has been lost."
            else
                ip rule add from all iif $dev table $tun pref $(expr $pref - 1)
                echo -e "[$(date "+%H:%M:%S")]network changed, reset the routing policy."
            fi
    fi
    sleep $interval
done
```

9. 赋予权限

```
chmod +x proxy.sh
```
10. 后台启动

```
nohup ./proxy.sh &
```

11. 更改网关

- 全局设备更改：修改主路由的DHCP设置
- 单一设备更改：更改设备的网关

12. DNS修改

在中国大陆，DNS 设置确实可能对网络访问速度产生显著影响。以下是一些建议：

1. 公共 DNS 服务器：
   - 阿里 DNS: 223.5.5.5 和 223.6.6.6
   - 腾讯 DNSPod: 119.29.29.29
   - 百度 DNS: 180.76.76.76
   - 114 DNS: 114.114.114.114

2. 国际 DNS 服务器（可能会有延迟）：
   - Google DNS: 8.8.8.8 和 8.8.4.4
   - Cloudflare DNS: 1.1.1.1 和 1.0.0.1

3. 本地 ISP 的 DNS：有时使用运营商提供的 DNS 可能会更快。

本人使用的是腾讯 DNSPod: 119.29.29.29