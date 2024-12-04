// explain the difference between getBy, findBy, queryBy:
//  * getBy
// Purpose: Used to get an element that is expected to be in the DOM.
// Behavior:
// If the element exists, it returns the element immediately.
// If the element does not exist, it throws an error.
// Use Case: Use when you are certain the element should exist and want the test to fail if it doesn’t.
//   * findBy
// Purpose: Used to get an element asynchronously, waiting for it to appear in the DOM.
// Behavior:
// It returns a promise that resolves when the element is found.
// If the element does not appear within the default timeout (or specified timeout), it rejects the promise with an error.
// Use Case: Use for elements that appear after some asynchronous operation (e.g., an API call or a delayed render).
// * queryBy
// Purpose: Used to query for an element without throwing an error if it doesn’t exist.
// Behavior:
// If the element exists, it returns the element.
// If the element does not exist, it returns null.
// Use Case: Use when it’s okay for the element to not exist (e.g., checking if an element has been removed).
