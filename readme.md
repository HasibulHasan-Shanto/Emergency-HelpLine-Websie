

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: 1. These are all DOM selection methods, but they differ in how they select elements and what they return. getElementById selects a single element using its unique id and returns only one element. getElementsByClassName returns a live HTMLCollection of all elements with a specified class name. querySelector uses any valid CSS selector and returns the first matching element, while querySelectorAll returns a static NodeList of all elements matching the CSS selector. While getElementById and getElementsByClassName are older and faster, querySelector and querySelectorAll offer more flexibility with complex selectors.

Answer: 2: To create and insert a new element into the DOM, you use document.createElement to create the element, then modify it (e.g., by setting its text, attributes, or classes), and finally insert it using methods like appendChild, or prepend. For example, to add a new div to the body, you can


      Example: const div = document.createElement('div');
div.textContent = "Hello World";
document.body.appendChild(div);


Answer: 3: Event bubbling is a phase in the JavaScript event propagation model where an event starts from the target element and bubbles up through its ancestors in the DOM tree. For example, if you click a button inside a div, the click event is first handled by the button (target), then bubbles up to the div, and continues up to the document root. This allows multiple elements in the hierarchy to react to the same event unless the bubbling is stopped using stopPropagation().


Answer: 4: Event delegation is a technique where you attach a single event listener to a parent element instead of attaching listeners to each individual child. Because of event bubbling, events on child elements will bubble up to the parent, where you can handle them by checking the event.target. This approach is useful for performance and maintainability, especially when dealing with many elements or dynamically added elements, as it reduces the number of event listeners in the DOM.


Answer: 4: The preventDefault() method stops the browser’s default behavior for a particular event, such as following a link or submitting a form. On the other hand, stopPropagation() prevents the event from bubbling up to ancestor elements, stopping it from triggering other event listeners higher up in the DOM tree. You often use preventDefault() to control browser behavior and stopPropagation() to control how events flow through the DOM.
