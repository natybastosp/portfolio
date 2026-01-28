import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Projetos" element={<Projetos />} />
        {/* Adicione as outras páginas aqui quando criá-las */}
        {/* <Route path="/sobre" element={<Sobre />} />
        
        <Route path="/contato" element={<Contato />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
