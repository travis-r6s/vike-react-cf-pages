import type { Config } from 'vike/types'
import vikeReact from 'vike-react'
import { PageShell } from '#/layouts/PageShell'

export default {
  extends: vikeReact,
  Layout: PageShell,
} satisfies Config
