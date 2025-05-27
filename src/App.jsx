import { Routes, Route } from "react-router-dom";
import NodeDetail from "./pages/NodeDetails";
import LandingPage from "./pages/LandingPage";
import FlowPage from "./pages/FlowPage";
import Flow from "./pages/Flow"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/nodes/:id" element={<NodeDetail />} />
      <Route path="/" element={<FlowPage />} />
      <Route path="/flow" element={<Flow />} />
    </Routes>
  );
}

export default App;
