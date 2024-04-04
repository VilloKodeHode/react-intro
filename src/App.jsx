import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { IndexPage } from "./pages/IndexPage";

function App() {
  return (
    <>
      <Header />
      <IndexPage />
      <Footer />
    </>
  );
}

export default App;
