import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Josephlog",
  tagline: "개발관련 기록들을 남기는 공간입니다.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://josephlog.info",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "Josephlog", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  trailingSlash: false, // 사이트 url 뒤에 / 추가하지 않도록 함.

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          showLastUpdateTime: true, // 날짜 표시

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "blog",
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: "keywords", content: "blog, dev, josephlog, react" }, // 검색 키워드
      { name: "description", content: "개발 관련 기록을 남기는 공간입니다." }, // 사이트 설명
      { property: "og:title", content: "Josephlog" }, // SNS 공유 시 제목
      {
        property: "og:image",
        content: "https://josephlog.info/img/og-image.jpg",
      }, // SNS 공유 시 이미지
      { name: "twitter:card", content: "summary_large_image" }, // 트위터 카드 타입
      { property: "og:type", content: "article" }, // 웹 사이트 타입
      { property: "og:logo", content: `https://josephlog.info/img/logo.png` }, // 웹 사이트 로고

      /* Google Search Console */
      {
        name: "google-site-verification",
        content: "kbg0ThXK3u-xfE1QDlviHCSJhw1VOKEn-qHLPU9ukuA",
      },
    ],

    headTags: [
      {
        tagName: "link",
        attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" },
      },
    ],
    image: "https://josephlog.info/img/og-image.jpg", // 대표 이미지

    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Josephlog",
      logo: {
        alt: "Josephlog Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/joseph-wee/docusaurus",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository link",
        },
      ],
    },
    // 나중에 푸터 만들고 홈페이지 꾸밀꺼면 사용하기
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "Docs",
    //       items: [
    //         {
    //           label: "Tutorial",
    //           to: "/docs/intro",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Community",
    //       items: [
    //         {
    //           label: "Stack Overflow",
    //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
    //         },
    //         {
    //           label: "Discord",
    //           href: "https://discordapp.com/invite/docusaurus",
    //         },
    //         {
    //           label: "X",
    //           href: "https://x.com/docusaurus",
    //         },
    //       ],
    //     },
    //     {
    //       title: "More",
    //       items: [
    //         {
    //           label: "Blog",
    //           to: "/blog",
    //         },
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/facebook/docusaurus",
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
