import "./App.css";
import CharacterList from "./pages/CharacterList";
import { Routes, Route } from "react-router-dom";
import CharacterId from "./pages/CharacterId";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<CharacterId />} />
      </Routes>
    </div>
  );
}

export default App;
