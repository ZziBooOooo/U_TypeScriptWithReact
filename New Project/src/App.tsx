import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text"></Input>
      <Input id="age" label="Your age" type="number"></Input>
    </main>
  );
}

export default App;
