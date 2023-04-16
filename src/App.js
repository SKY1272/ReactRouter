// import "./App.css";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Edit } from "./components/Edit";
import { Delete } from "./components/Delete";
import { Create } from "./components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route />
          <Route path="/home" element={<Home />} />

          <Route path="/Edit" element={<Edit />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
