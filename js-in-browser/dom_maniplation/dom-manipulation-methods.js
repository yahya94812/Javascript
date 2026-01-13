// Basic DOM Manipulation Examples

// 1. Selecting elements
// There are multiple ways to select elements from the DOM

// Select by ID (returns a single element)
const header = document.getElementById('header');

// Select by class name (returns a collection)
const paragraphs = document.getElementsByClassName('paragraph');

// Select by tag name (returns a collection)
const divs = document.getElementsByTagName('div');

// Using query selectors (modern approach)
document.querySelector('#myButton'); // Selects the element with id="myButton"
document.querySelector('.primary'); // Selects the first element with class "primary"
document.querySelector('button'); // Selects the first <button> element
document.querySelector('input[type="text"]'); // Selects the first <input> with type="text"
document.querySelector('div .primary'); // Selects the first element with class "primary" inside a <div>
document.querySelector('button, a'); // Selects the first <button> or <a> element

// Select first matching element
const firstButton = document.querySelector('button');
// Select all matching elements
const allButtons = document.querySelectorAll('button.primary');

// 2. Changing element content
// Set text content
header.textContent = 'Updated Header Text';

// Set HTML content (be careful with this for security reasons)
const contentDiv = document.getElementById('content');
contentDiv.innerHTML = '<p>This is <strong>new</strong> content!</p>';

// 3. Changing attributes
const link = document.getElementById('main-link');
// Get attribute
const currentHref = link.getAttribute('href');
console.log('Current href:', currentHref);

// Set attribute
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');

// Direct property access for common attributes
link.href = 'https://example.org';
link.title = 'Visit our website';

// 4. Changing styles
const highlight = document.getElementById('highlight');
// Using style property directly
highlight.style.color = 'red';
highlight.style.backgroundColor = 'yellow';
highlight.style.padding = '10px';

// Better approach for multiple styles
Object.assign(highlight.style, {
  border: '1px solid black',
  fontWeight: 'bold',
  borderRadius: '5px'
});

// 5. Adding and removing classes
const card = document.getElementById('card');
// Add class
card.classList.add('active');
// Remove class
card.classList.remove('hidden');
// Toggle class (add if absent, remove if present)
card.classList.toggle('expanded');
// Check if element has a class
if (card.classList.contains('draggable')) {
  console.log('Card is draggable');
}

// 6. Creating new elements
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This paragraph was created dynamically';
newParagraph.classList.add('dynamic-content');

// 7. Adding elements to the DOM
const container = document.getElementById('container');
// Append at the end
container.appendChild(newParagraph);

// Insert before a specific element
const referenceElement = document.getElementById('reference');
container.insertBefore(newParagraph, referenceElement);

// Modern insertion methods
container.append(newParagraph); // at the end
container.prepend(newParagraph); // at the beginning
referenceElement.before(newParagraph); // before reference
referenceElement.after(newParagraph); // after reference

// 8. Removing elements
const elementToRemove = document.getElementById('old-content');
// Remove directly
elementToRemove.remove();
// Or remove via parent
const parent = elementToRemove.parentNode;
parent.removeChild(elementToRemove);

// 9. Cloning elements
const template = document.getElementById('template');
const clone = template.cloneNode(true); // true to clone children too
clone.id = 'clone-1'; // update ID to avoid duplicates
container.appendChild(clone);

// 10. Working with event listeners
const button = document.getElementById('action-button');

// Add click event listener
button.addEventListener('click', function(event) {
  console.log('Button clicked!', event);
  alert('Button was clicked');
});

// Add event listener with arrow function
button.addEventListener('mouseover', (event) => {
  button.classList.add('hover');
});

button.addEventListener('mouseout', (event) => {
  button.classList.remove('hover');
});

// 11. Event delegation (handling events for multiple elements)
document.getElementById('todo-list').addEventListener('click', (event) => {
  // Check if the clicked element is a list item
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});

// 12. Traversing the DOM
const listItem = document.querySelector('li.current');
// Navigate up
const parentUl = listItem.parentElement;
// Navigate down
const children = listItem.children;
// Navigate siblings
const nextItem = listItem.nextElementSibling;
const prevItem = listItem.previousElementSibling;

// 13. Data attributes
const product = document.getElementById('product-123');
// Get data attribute
const productId = product.dataset.productId;
const productPrice = product.dataset.price;
// Set data attribute
product.dataset.inStock = 'true';
