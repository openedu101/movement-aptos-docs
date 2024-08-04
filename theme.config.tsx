import React from 'react'
import {i18nConfig} from '@docs-config'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Movement with Aptos</span>,
  project: {
    link: 'https://github.com/openedu101/movement-aptos-docs',
  },
  chat: {
    link: 'https://discord.gg/RgGUcPdzbc',
  },
  docsRepositoryBase: 'https://github.com/openedu101/movement-aptos-docs/blob/main',
  footer: {
    text: 'Movement with Aptos Workshop',
  },
}

const i18nLocales = Object.entries(i18nConfig).map(
  ([locale, { direction, name }]) => {
    return {
      direction: (direction as "ltr" | "rtl" | undefined) || undefined,
      locale,
      name,
    };
  },
);

function isFullUrl(url: string): boolean {
  // This regex checks for strings that start with a scheme like http:// or https://
  const pattern = /^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//;
  return pattern.test(url);
}

export default config
