// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";

import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: {
        en: "ECNY - You need to Know",
        "zh-CN": "数字人民币必读必知",
      },
      favicon: "/favicon.svg",

      // i18n
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        cn: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },

      // 侧边栏
      sidebar: [
        {
          label: "Getting Started",
          translations: {
            "zh-CN": "从这里开始",
          },
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "What is e-CNY?",
              slug: "guides/whatisecny",
              translations: {
                "zh-CN": "什么是数字人民币？",
              },
            },
            {
              label: "Register e-CNY",
              slug: "guides/registerecny",
              translations: {
                "zh-CN": "注册",
              },
            },
            {
              label: "topup",
              slug: "guides/topup",
              translations: {
                "zh-CN": "充值",
              },
            },
            {
              label: "Payments",
              translations: {
                "zh-CN": "支付",
              },
              autogenerate: { directory: "guides/payments" },
            },
            {
              label: "Transactions",
              translations: {
                "zh-CN": "转账",
              },
              slug: "guides/transactions",
            },
            {
              label: "Withdrawals",
              translations: {
                "zh-CN": "提现",
              },
              slug: "guides/withdrawals",
            }
          ],
        },
        {
          label: "Introduction",
          translations: {
            "zh-CN": "基础介绍",
          },
          autogenerate: { directory: "intro" },
        },
        {
          label: "Application Scenarios",
          translations: {
            "zh-CN": "应用场景",
          },
          autogenerate: { directory: "appscn" },
        },
        {
          label: "FAQ",
          translations: {
            "zh-CN": "常见问题",
          },
          autogenerate: { directory: "faq" },
        },
        {
          label: "Supporter",
          translations: {
            "zh-CN": "贡献及赞助",
          },
          slug: "supporter",
        }
      ],
      // 自定义样式
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/anson2dev/ecnyuk",
        },
        { icon: "discord", label: "Discord", href: "https://diccord.com/" },
        { icon: "x.com", label: "X.com", href: "https://x.com/" },
        { icon: "youtube", label: "YouTube", href: "https://youtube.com/" },
        { icon: "tiktok", label: "TikTok", href: "https://tiktok.com/" },
      ],
    }),
    webmanifest({
      name: "ECNY.uk",
      icon: "/favicon.svg",
    }),
  ],
  output: "server",
  adapter: cloudflare({ imageService: "compile" }),
  site: "https://ecny.uk",
});
