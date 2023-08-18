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

  addToCalculationEntry("Triangle", area);
}

function calculateRectangleArea() {
  const widthField = document.getElementById("rectangle-width");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);

  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);

  // validate input
  if (isNaN(width) || isNaN(length)) {
    alert("Please insert a number");
    return;
  }

  const area = width * length;
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;

  addToCalculationEntry("Rectangle", area);
}

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");

  // validate
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a number");
    return;
  }
  const area = base * height;
  setElementInnerText("parallelogram-area", area);

  addToCalculationEntry("Parallelogram", area);
}

function calculateEllipseArea() {
  const majorRadius = getInputValue("major-radius");
  const minorRadius = getInputValue("minor-radius");

  const area = (Math.PI * majorRadius * minorRadius).toFixed(2);
  setElementInnerText("ellipse-area", area);

  addToCalculationEntry("Ellipse", area);
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

// add to calculation entry
/**
 * get the element where you want to add the dynamic HTML
 * create an element you want to add
 * if needed, add some class
 * set inner HTML. it could be dynamic template string
 * append the created element
 */
function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-4");
  p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success ml-4">Convert</button>`;
  calculationEntry.appendChild(p);
}

// data validation
/**
 * 1. set proper type of the input field (number, data, email)
 * 2. check type using typeof
 * 3. isNan(), which will check if it is not a number
 */
