function calculateTriangleArea() {
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);

  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  const area = 0.5 * base * height;
  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;
}
function calculateRectangleArea() {
  const widthField = document.getElementById("rectangle-width");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);

  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);

  const area = width * length;
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");

  const area = base * height;
  setElementInnerText("parallelogram-area", area);
}

function calculateEllipseArea() {
  const majorRadius = getInputValue("major-radius");
  const minorRadius = getInputValue("minor-radius");

  const area = (Math.PI * majorRadius * minorRadius).toFixed(2);
  setElementInnerText("ellipse-area", area);
}

// reusable get input
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputText = inputField.value;
  const input = parseFloat(inputText);
  return input;
}

// reusable set
function setElementInnerText(elementID, area) {
  const element = document.getElementById(elementID);
  element.innerText = area;
}
