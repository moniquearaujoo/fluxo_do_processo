import { Routes, Route } from "react-router-dom";
import NodeDetail from "./pages/NodeDetails";
import LandingPage from "./pages/LandingPage";
import FlowPage from "./pages/FlowPage";
import Flow from "./pages/Flow";
import Flow2  from "./pages/Flow2";
import NodeDetail2 from "./pages/NodeDetails2";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* Página inicial */}

      <Route path="/nodes/:id" element={<NodeDetail />} />{" "}
      {/* Detalhes de um node */}
       <Route path="/Nodes2/:id" element={<NodeDetail2 />} /> {" "}
      {/* Detalhes de um node */}
      <Route path="/flowpage" element={<FlowPage />} /> {/* Página FlowPage */}
      <Route path="/flow" element={<Flow />} /> {/* Outra página Flow */}
      <Route path="/flow2" element={<Flow2 />} /> {/* Outra página Flow */}
      <Route path="/NodeDetais2/:id" element={<NodeDetail2 />} /> {" "}
    </Routes>
    </>
  );
}

export default App;
