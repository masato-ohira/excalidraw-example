import { readFileSync } from 'fs'
import { test, expect } from '@playwright/test'
import { includes, split } from 'lodash-es'

test('gitignoreで最低限の除外はできている', async () => {
  let gitIgnore: string | string[] = readFileSync('.gitignore', 'utf8')
  gitIgnore = split(gitIgnore, '\n')

  await expect(includes(gitIgnore, '.htaccess')).toBe(true)
  await expect(includes(gitIgnore, 'node_modules/')).toBe(true)
  await expect(includes(gitIgnore, '.astro/')).toBe(true)
  await expect(includes(gitIgnore, '.env')).toBe(true)
})
