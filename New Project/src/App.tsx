import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // input 요소가 참조된 후 focus() 호출
    }
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정
  return (
    <main>
      <Input id="name" label="Your name" type="text" ref={inputRef}></Input>
      <Input id="age" label="Your age" type="number"></Input>
      {/*       <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://www.google.co.kr/?hl=ko">A Link</Button>
      </p> */}
      {/* <Container as={Button}>Click me</Container> */}
    </main>
  );
}

export default App;
