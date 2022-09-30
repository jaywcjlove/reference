import fs from 'fs-extra';
import rehypeParse from 'rehype-parse';
import {unified} from 'unified';
import { VFile } from 'vfile';

export function getSVGNode(iconPath) {
  const svgStr = fs.readFileSync(iconPath);
  const processor = unified().use(rehypeParse,{ fragment: true, space: "svg" })
  const file = new VFile();
  file.value = svgStr.toString();
  const hastNode = processor.runSync(processor.parse(file), file);
  return hastNode.children || []
}