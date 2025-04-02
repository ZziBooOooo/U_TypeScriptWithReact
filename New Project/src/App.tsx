import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  return (
    <main>
      {/* <Input id="name" label="Your name" type="text"></Input>
      <Input id="age" label="Your age" type="number"></Input> */}
      {/*       <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://www.google.co.kr/?hl=ko">A Link</Button>
      </p> */}
      <Container as={Button}>Click me</Container>
    </main>
  );
}

export default App;
