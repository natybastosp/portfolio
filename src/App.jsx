import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/About";
import Projetos from "./pages/Projects";
import Contato from "./pages/Contact";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/projects" element={<Projetos />} />
        <Route path="/contact" element={<Contato />} />
      </Routes>
    </Layout>
  );
}

export default App;
