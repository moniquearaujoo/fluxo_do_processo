import { Routes, Route } from "react-router-dom";
import NodeDetail from "./pages/NodeDetails";
import LandingPage from "./pages/LandingPage";
import FlowPage from "./pages/FlowPage";
import Flow from "./pages/Flow";
import Navbar from "./components/Navbar";
import QuemSomos from "./pages/QuemSomos";
import Flow3 from "./pages/Flow3"
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* Página inicial */}
      <Route path="/nodes/:id" element={<NodeDetail />} />{" "}
      {/* Detalhes de um node */}
      <Route path="/flowpage" element={<FlowPage />} /> {/* Página FlowPage */}
      <Route path="/flow" element={<Flow />} /> {/* Outra página Flow */}
      
      
      <Route path="/flow3" element={<Flow3 />} />

      <Route path="/QuemSomos" element={<QuemSomos />} />

    </Routes>
    </>
  );
}

export default App;