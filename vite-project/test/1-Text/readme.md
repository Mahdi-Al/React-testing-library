Given the following React component:

```js
export default function Text({ headingText }) {
  return (
    <div>
      <h2>{headingText}</h2>
      <p>Welcome To APS</p>
    </div>
  );
}
```

Write a test using `@testing-library/react` to verify that the component renders `"Welcome To APS"`. Additionally, write a test to verify that the component accepts the `headingText` prop and renders the heading with the provided text.
