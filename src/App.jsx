import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import CreatePi from "./components/Pi/CreatePi";
import ShowPi from "./components/Pi/ShowPi";
import ShowPis from "./components/Pi/ShowPis"
import { Route, Routes } from "react-router-dom";
import EditPi from "./components/Pi/EditPi";
import Header from "./components/Common/Header";
function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="">
          <Header />
          <Routes>
            <Route path="/" element={<ShowPis />} />
            <Route path="/edit-pi/:id" element={<EditPi />} />
            <Route path="/show-pi/:id" element={<ShowPi />} />
            <Route path="/create-pi" element={<CreatePi />} />
          </Routes>
        </div>
      </header>
    </div>
  )
}

export default App;
