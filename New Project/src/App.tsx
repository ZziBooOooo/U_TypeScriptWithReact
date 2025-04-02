import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Form from "./components/Form";
import { useRef, useEffect } from "react";

function App() {
  // const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main>
      {/*       <Input id="name" label="Your name" type="text" ref={inputRef}></Input>
      <Input id="age" label="Your age" type="number"></Input> */}
      {/*       <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://www.google.co.kr/?hl=ko">A Link</Button>
      </p> */}
      {/* <Container as={Button}>Click me</Container> */}
      <Form>
        <Input type="text" label="Name" id="name"></Input>
        <Input type="number" label="Age" id="age"></Input>
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
