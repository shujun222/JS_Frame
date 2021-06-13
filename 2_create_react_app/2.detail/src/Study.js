
export default function Study() {
  return (
    <div>
      <h1>好好学习，天天向上</h1>
      牛年大吉 ~
    </div>
  );
}

export function add(x, y) {
  return x + y;
}

console.log("REACT_APP_SECRET_CODE ", process.env.REACT_APP_SECRET_CODE);
console.log("process.env.NODE_ENV ", process.env.NODE_ENV);
