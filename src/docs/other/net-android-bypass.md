# 手机变身旁路由：解锁网络新玩法

你是否曾想过，闲置的旧手机还能派上大用场？今天，我们就来探讨如何将一台红米K20Pro改造成旁路由，为你的家庭网络增添一抹独特的色彩。这个小技巧不仅能让你的网络体验更上一层楼，还能让那台吃灰的手机重获新生。让我们一起开启这段有趣的网络冒险吧！

## 准备工作

在开始我们的改造之旅前，请确保你已经准备好以下装备：

- 一台红米K20Pro（当然，其他可以root的安卓手机也行）
  - 安装MT管理器
  - 准备好你喜欢的VPN应用
- 一台运行Windows的电脑
  - 下载Mindows工具箱

## 改造步骤

### 1. 解锁手机的潜力

首先，我们需要让手机对我们敞开心扉：

1. 用USB线将手机连接到电脑。
2. 在手机上打开开发者模式（通常在"设置"中，连续点击"关于手机"中的"版本号"即可开启）。
3. 开启USB调试，让手机和电脑能够亲密交流。

### 2. root，让手机更听话

接下来，我们要让手机彻底听我们的：

1. 在电脑上下载并安装[Mindows工具箱](https://mindows.cn/)。
2. 打开Mindows，按照提示给手机刷入面具（Magisk）获取ROOT权限。
3. 完成后重启手机，确保一切正常。

### 3. 脚本魔法，让手机化身路由

现在到了真正有趣的部分：

1. 打开MT管理器，进入其终端界面。
2. 切换到ROOT模式，让我们获得最高权限。
3. 创建一个新文件：`data/local/proxy/proxy.sh`，并将以下内容复制进去：

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

4. 给脚本赋予执行权限：

```
chmod +x proxy.sh
```

5. 让脚本在后台默默工作：

```
nohup ./proxy.sh &
```

### 4. 网关设置，连接一切

最后一步，我们需要告诉其他设备，这台手机就是它们的新导航员：

- 如果你想让所有设备都通过这个新的旁路由，可以修改主路由的DHCP设置。
- 如果只想让特定设备使用，直接修改那台设备的网关设置即可。

### 5. DNS优化，让网络飞起来

在中国大陆，选择一个好的DNS可以让你的网络体验更上一层楼。以下是一些推荐的DNS服务器：

- 阿里DNS: 223.5.5.5 和 223.6.6.6
- 腾讯DNSPod: 119.29.29.29（个人最爱）
- 百度DNS: 180.76.76.76
- 114 DNS: 114.114.114.114

如果你不介意可能的延迟，也可以尝试这些国际DNS：

- Google DNS: 8.8.8.8 和 8.8.4.4
- Cloudflare DNS: 1.1.1.1 和 1.0.0.1

## 结语

就这样，你的旧手机摇身一变，成为了家庭网络中的一员猛将！它不仅找到了新的人生目标，还能为你的网络体验带来意想不到的提升。记得在使用过程中遵守相关法律法规，安全且理智地享受这个自制的旁路由带来的便利吧！