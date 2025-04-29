import { Routes, Route } from "react-router-dom";
import NodeDetail from "./pages/NodeDetails";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/nodes/:id" element={<NodeDetail />} />
    </Routes>
  );
}

export default App;
