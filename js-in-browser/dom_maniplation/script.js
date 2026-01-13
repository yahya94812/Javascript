// 1. Element Creation and Insertion
function createNewElement() {
  const newElement = document.createElement("p");
  newElement.textContent = "I am a new element!";
  newElement.className = "success";
  document.getElementById("creation-demo").appendChild(newElement);
}

function insertElement() {
  const referenceElement = document.querySelector("#creation-demo p");
  if (referenceElement) {
    const insertedElement = document.createElement("p");
    insertedElement.textContent = "I was inserted before!";
    insertedElement.className = "highlight";
    referenceElement.parentNode.insertBefore(
      insertedElement,
      referenceElement
    );
  }
}

// 2. Element Selection
function demonstrateSelection() {
  const resultDiv = document.getElementById("selection-result");
  resultDiv.innerHTML = "";

  // By ID
  const byId = document.getElementById("select-by-id");

  // By Class
  const byClass = document.getElementsByClassName("select-by-class");

  // By Query Selector
  const byQuery = document.querySelector('[data-test="custom"]');

  // Display results
  const results = document.createElement("div");
  results.innerHTML = `
          <p>Selected by ID: "${byId.textContent}"</p>
          <p>Selected by Class: "${byClass[0].textContent}"</p>
          <p>Selected by Query: "${byQuery.textContent}"</p>
      `;
  resultDiv.appendChild(results);
}

// 3. Modifying Elements
function modifyContent() {
  const element = document.getElementById("modify-demo");
  // Modifying text content
  element.textContent = "Modified text content!";

  // Modifying innerHTML
  setTimeout(() => {
    element.innerHTML = "Modified with <strong>HTML</strong>!";
  }, 1000);
}

function modifyAttributes() {
  const element = document.getElementById("modify-demo");
  // Adding attributes
  element.setAttribute("data-modified", "true");
  element.setAttribute("title", "This element was modified");

  // Toggle class
  element.classList.toggle("highlight");
}

function modifyStyles() {
  const element = document.getElementById("modify-demo");
  // Direct style modification
  element.style.padding = "10px";
  element.style.border = "2px dashed blue";
  element.style.borderRadius = "5px";
}

// 4. Event Handling
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("event-input");
  const button = document.getElementById("event-button");
  const result = document.getElementById("event-result");

  // Input event
  input.addEventListener("input", (e) => {
    result.textContent = `You typed: ${e.target.value}`;
  });

  // Click event
  button.addEventListener("click", () => {
    result.innerHTML += "<p>Button clicked!</p>";
  });

  // Add event delegation
  document.getElementById("event-demo").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.style.backgroundColor = "#ddd";
    }
  });
});

// 5. DOM Traversal
function traverseDOM() {
  const parent = document.querySelector(".parent");
  const result = document.getElementById("traversal-result");
  result.innerHTML = "";

  // Children
  const children = parent.children;
  const childrenText = Array.from(children)
    .map((child) => child.textContent)
    .join(", ");

  // Siblings
  const secondChild = parent.children[1];
  const nextSibling = secondChild.nextElementSibling;
  const prevSibling = secondChild.previousElementSibling;

  // Parent
  const parentNode = secondChild.parentNode;

  result.innerHTML = `
          <p>Children: ${childrenText}</p>
          <p>Next sibling of Child 2: ${nextSibling.textContent}</p>
          <p>Previous sibling of Child 2: ${prevSibling.textContent}</p>
          <p>Parent node: ${parentNode.className}</p>
      `;
}
