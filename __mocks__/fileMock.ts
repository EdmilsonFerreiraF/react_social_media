import path from 'path'

export const process = (
  sourceText: string,
  sourcePath: string,
  options: any) => {

  return {
    code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
  }
}