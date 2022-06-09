// use cases of the function .

function useMuliplier() {
  return null;
}

function MyComponent() {
  const multyplier5 = useMuliplier(5);
  const multyplier4 = useMuliplier(4);
  const multyplier2 = useMuliplier(2);

  return (
    <div>
      <h1>{multyplier5(2)}</h1>
      <h1>{multyplier4(5)}</h1>
      <h1>{multyplier2(6)}</h1>
    </div>
  );
}
