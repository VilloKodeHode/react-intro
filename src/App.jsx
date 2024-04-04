import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { IndexPage } from "./pages/IndexPage";

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count+1)
  }

  const decrease = () => {
    setCount(count-1)
  }
  return (
    <>
      <Header count={count} />

      <IndexPage count={count} increase={increase} decrease={decrease} />

      <Footer />
    </>
  );
}

export default App;
