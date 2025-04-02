import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Form, { type FormHandle } from "./components/Form";
import { useRef, useEffect } from "react";

function App() {
  // const inputRef = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
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
