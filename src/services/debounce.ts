export default function debounce(f: Function, ms: number) {
  let timeout: NodeJS.Timeout;
  return function (...arg: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      f.apply(this, arg);
    }, ms);
  };
}
