export function getChilds(data = [], level, result = []) {
  for (let i = 1; i <= data.length; i++) {
    const titleNum = Number(data[i]?.tagName?.replace(/^h/, ''));
    if (titleNum && titleNum === level) break;
    result.push(data[i]);
  }
  return result;
}

/** 获取 Heading 到下一个 Heading 之间的内容*/
export function getHeader(data = [], level, result = []) {
  for (let i = 1; i <= data.length; i++) {
    if (/^h\d$/.test(data[i]?.tagName) || data[i]?.number !== level) break;
    result.push(data[i]);
  }
  return result;
}
