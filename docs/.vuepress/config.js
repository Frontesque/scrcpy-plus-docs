import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'SCRCPY+ Docs',
  description: 'The easiest SCRCPY GUI',

  theme: defaultTheme({
    logo: 'https://raw.githubusercontent.com/Frontesque/scrcpy-plus/refs/heads/main/application/src-tauri/icons/Square150x150Logo.png',

    navbar: ['/', '/downloads', '/get-started'],
  }),

  bundler: viteBundler(),
})
