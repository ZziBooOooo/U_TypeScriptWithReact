import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <main>
      {/* <Input id="name" label="Your name" type="text"></Input>
      <Input id="age" label="Your age" type="number"></Input> */}
      <p>
        <Button el="button">A Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://www.google.co.kr/?hl=ko">
          A Link
        </Button>
      </p>
    </main>
  );
}

export default App;
