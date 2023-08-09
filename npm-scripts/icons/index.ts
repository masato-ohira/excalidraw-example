import fs from 'fs-extra'
import { endsWith, filter } from 'lodash-es'
import { svgToJson, SvgType } from './svgToJson'

const srcDir = `src/components/icons/svg`
const distDir = `src/components/icons`

const svgList = () => {
  const dirInfo = fs.readdirSync(srcDir)
  const svgList = filter(dirInfo, (i: string) => endsWith(i, '.svg'))
  return svgList
}

const main = async () => {
  const allSvg: Record<string, SvgType> = {}
  for (let svgName of svgList()) {
    const svgTag = fs.readFileSync(`${srcDir}/${svgName}`, 'utf-8')
    const json = svgToJson(svgTag)
    const svgId = svgName.split('.svg')[0]
    allSvg[svgId] = json
  }

  fs.writeJSONSync(`${distDir}/svg-list.json`, allSvg)
  console.log({ save: 'svg-list.json' })
}

main()
