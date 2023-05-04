import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';  
import Layout from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> }/> 
            <Route path="about" element={ <About /> }/>
            <Route path="contact" element={ <Contact /> }/>
            <Route path="store" element={ <OurStore /> }/>
            <Route path="blogs" element={ <Blogs /> }/>
            <Route path="compare-product" element={ <CompareProduct /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
