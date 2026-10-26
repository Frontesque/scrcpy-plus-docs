import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'SCRCPY+ Docs',
  description: 'Help for connecting Android devices and launching scrcpy with SCRCPY+.',

  theme: defaultTheme({
    logo: 'https://raw.githubusercontent.com/Frontesque/scrcpy-plus/refs/heads/main/application/src-tauri/icons/Square150x150Logo.png',

    navbar: ['/', '/get-started', '/downloads'],
    sidebar: [
      {
        text: 'Using SCRCPY+',
        children: [
          '/get-started',
          '/devices-and-connections',
          '/launch-options',
          '/wireless-setup',
          '/settings-and-versions',
          '/troubleshooting',
        ],
      },
    ],
  }),

  bundler: viteBundler(),
})
