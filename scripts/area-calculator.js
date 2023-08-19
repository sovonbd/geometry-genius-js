// triangle
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

// rectangle
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

  addToCalculationEntry("Rectangle", area);
}

// parallelogram
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");

  const area = base * height;
  setElementInnerText("parallelogram-area", area);

  addToCalculationEntry("Parallelogram", area);
}

// ellipse
function calculateEllipseArea() {
  const majorRadius = getInputValue("major-radius");
  const minorRadius = getInputValue("minor-radius");

  const area = (Math.PI * majorRadius * minorRadius).toFixed(2);
  setElementInnerText("ellipse-area", area);

  addToCalculationEntry("Ellipse", area);
}

// rhombus
function calculateRhombusArea() {
  const base = getInputValue("rhombus-base");
  const height = getInputValue("rhombus-height");

  //   // validate
  // if (isNaN(base) || isNaN(height)) {
  //   alert("Please insert a number");
  //   return;
  // }
  validateInput("rhombus-base");
  validateInput("rhombus-height");

  const area = 0.5 * base * height;
  if (!isNaN(area)) {
    setElementInnerText("rhombus-area", area);
    addToCalculationEntry("Rhombus", area);
  }
}

// pentagon
function calculatePentagonArea(event) {
  const base = parseFloat(event.parentNode.parentNode.childNodes[5].childNodes[1].value);
  const height = parseFloat(event.parentNode.parentNode.childNodes[5].childNodes[5].value);

  //   // validate
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a number");
    return;
  }

  const area = 0.5 * base * height;
  const areaSpan = event.parentNode.parentNode.childNodes[7].childNodes[1];
  areaSpan.innerText = area;

  addToCalculationEntry("Pentagon", area);
}

// convert

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

// reusable validate
function validateInput(fieldId1) {
  const inputField1 = document.getElementById(fieldId1);
  const inputText1 = inputField1.value;
  const input1 = parseFloat(inputText1);

  // validate
  if (isNaN(input1)) {
    alert(`Please insert a number for ${fieldId1}`);
    return;
  }
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
  p.classList.add("my-4", "text-left");
  p.innerHTML = `
  ${count + 1}. 
  <span class="px-6 text-center">${areaType}</span> 
  <span class="text-left">${area} cm<sup>2</sup></span> 
  <button class="btn btn-sm btn-success ml-6 normal-case text-right">Convert to m<sup>2</sup></button>
  `;
  calculationEntry.appendChild(p);

  document.getElementById("calculation-entry").addEventListener("click", function (event) {
    const convertToMeter = event.target;
    convertToMeter.style.backgroundColor = "transparent";
    convertToMeter.style.border = "none";

    const convert = area * 0.0001;
    convertToMeter.innerHTML = `${convert} m<sup>2</sup>`;
    console.log(convertToMeter);
  });
  // const tr = document.createElement("tr");
  // tr.classList.add("pt-10");
  // tr.innerHTML = `<td>${count + 1}.</td> <td class="px-6">${areaType}</td> <td>${area}</td> <button class="btn btn-sm btn-success ml-6">Convert</button>`;
  // calculationEntry.appendChild(tr);
}

// data validation
/**
 * 1. set proper type of the input field (number, data, email)
 * 2. check type using typeof
 * 3. isNan(), which will check if it is not a number
 */
