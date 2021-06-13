import {Button} from 'reactstrap';

console.log("app is loading... ", window.env);

function App() {
  return (
    <div>
      <h1>编辑这里</h1>
      新年快乐 ~
      <button onClick={getEnv}>获取环境变量</button>
      <Button onClick={getEnv}>获取环境变量</Button>
    </div>
  );
}

function getEnv() {
  console.log("env ", window.env);
}

export default App;
