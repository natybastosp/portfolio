import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adicione as outras páginas aqui quando criá-las */}
        {/* <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
