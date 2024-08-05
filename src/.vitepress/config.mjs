import { defineConfig } from "vitepress";

import { nav } from "./constans/modules/nav.mjs";
import { sidebar } from "./constans/modules/sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Leyen Awesome",
  description: "Share some of the sites, communities, ecosystems, and perspectives that you follow",
  head: [
    [
      "link",
      {
        href: "/css/font.css",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "/css/common.css",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "/images/logo-with-shadow.png",
        type: "image/png",
        rel: "icon",
      },
    ],
  ],
  outDir: "../dist",
  appearance: "dark",
  sitemap: {
    // hostname: "http://xxx.com",
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    prev: "false",
    next: "false",
    logo: "/images/vitepress-logo-mini.png",
    editLink: {
      pattern: "https://github.com/leyen-me/awesome/edit/master/docs/:path",
    },
    lastUpdated: true,
    search: {
      provider: "local",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    outlineTitle: "本篇",
    lastUpdatedText: "最后更新",
    nav,
    sidebar,
    footer: {
      message: 'Released under the <a href="">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="http://leyen.me" target="_blank">Leyen</a>'
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/leyen-me/awesome" },
    ],
  },
});
