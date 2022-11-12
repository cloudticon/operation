export const getFunction = (path: string) => {
  const [file, funcName] = path.split('.');
  return require(file)[funcName]
}