import { Routes, Route } from "react-router-dom";
import NodeDetail from "./pages/NodeDetails";
import LandingPage from "./pages/LandingPage";
import FlowPage from "./pages/FlowPage";
import Flow from "./pages/Flow";
import Navbar from "./components/Navbar";
import QuemSomos from "./pages/QuemSomos";
import Flow2 from "./pages/Flow2";
import Flow3 from "./pages/Flow3";
import Flow4 from "./pages/Flow4";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* Página inicial */}
      <Route path="/nodes/:id" element={<NodeDetail />} />{" "}{/* Detalhes de um node */}
      <Route path="/flowpage" element={<FlowPage />} /> {/* Página FlowPage */}
      <Route path="/flow" element={<Flow />} /> {/* Outra página Flow */}
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/flow2" element={<Flow2 />} /> {/* Outra página Flow */}
      <Route path="/flow3" element={<Flow3 />} /> {/* Outra página Flow */}
      <Route path="/flow4" element={<Flow4 />} /> {/* Outra página Flow */}
    </Routes>
    </>
  );
}

export default App;