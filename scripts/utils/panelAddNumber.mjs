/** 标记 Number */
export function panelAddNumber(arr = [], result = []) {
  let n = 0;
  let level = -1;
  while (n < arr.length) {
    const toc = arr[n];
    const titleNum = Number(toc?.tagName?.replace(/^h/, ''));
    if (titleNum && titleNum > -1) {
      level = titleNum;
    }
    if (toc) {
      result.push({ ...toc, number: level });
    }
    n++;
  }
  return result;
}
