import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";

function App() {
  return (
    <BrowserRouter basename="/root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;