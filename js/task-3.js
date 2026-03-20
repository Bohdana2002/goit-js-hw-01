function getElementWidth(content, padding, border) {
  const contentElement = Number.parseFloat(content);
  const paddingElement = Number.parseFloat(padding);
  const borderElement = Number.parseFloat(border);
  return contentElement + paddingElement * 2 + borderElement * 2;
}
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
