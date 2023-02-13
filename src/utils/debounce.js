export function debounce(func, delay) {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    console.log("returning func");
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}
