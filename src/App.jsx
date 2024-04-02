import "./App.css";
import { Header } from "./components/Header";

function App() {

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <h1>Hello world</h1>
          <p>this is a intro to react</p>
          <p>started with typing: npm create vite@latest ./</p>
      <p>this causes an error (but not anymore)</p>
        </section>
        <section className="intro">
          <h2></h2>
          <div>
            <p>intro text</p>
            <img src="" alt="" />
          </div>
        </section>
      </main>
      <footer>
        <ul>
          <li>phone: whatever</li>
          <li>location: hell</li>
          <li>planet: earth</li>
        </ul>
        <p>this is the footer</p>
      </footer>
    </>
  );
}


export default App;
