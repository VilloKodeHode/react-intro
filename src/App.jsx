import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { IndexPage } from "./pages/IndexPage";

function App() {

  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])

const url =  "https://pokeapi.co/api/v2/pokemon/?limit=1000"

  useEffect(() => {

   async function fetchData() {

    const response = await fetch(url)
    const data = await response.json()
    setPosts(data.results)
    console.log(data.results)
   }
fetchData()

    },[])

    useEffect(() => {

      console.log("posts:", posts)
    }, [posts])

  const increase = () => {
    setCount(count+1)
  }

  const decrease = () => {
    setCount(count-1)
  }
  return (
    <>
      <Header count={count} />

      <IndexPage posts={posts} count={count} increase={increase} decrease={decrease} />

      <Footer />
    </>
  );
}

export default App;
