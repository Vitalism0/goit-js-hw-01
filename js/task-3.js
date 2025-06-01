function getElementWidth(content, padding, border) {
  const con = parseFloat(content);
  const pad = parseFloat(padding);
  const bor = parseFloat(border);
  return con + pad * 2 + bor * 2;
}
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
