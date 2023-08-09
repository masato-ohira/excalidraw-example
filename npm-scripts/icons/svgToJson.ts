import { load as cheerioLoad } from 'cheerio'

export type SvgType = {
  tag: string
  attr: Record<string, any>
  child: any[]
}

// SVGをJSONに変換する関数
export const svgToJson = (svg: string) => {
  const $ = cheerioLoad(svg, { xmlMode: true })

  const convertElementToJson = function (element: any) {
    const obj: SvgType = {
      tag: element.name,
      attr: {},
      child: [],
    }

    // 属性を取得
    for (const [name, value] of Object.entries(element.attribs)) {
      obj.attr[name] = value
    }

    // 子要素を処理
    element.children.forEach((childNode: any) => {
      if (childNode.type === 'tag') {
        const childElement = childNode
        const childJson = convertElementToJson(childElement)
        obj.child.push(childJson)
      }
    })

    return obj
  }

  return convertElementToJson($('svg')[0])
}
