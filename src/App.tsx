import { Route, Routes } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import Main from "./pages/Main";
import Modals from "./components/Modals";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="first" element={<First />} />
        <Route path="second" element={<Second />} />
        <Route path="third" element={<Third />} />
        <Route path="fourth" element={<Fourth />} />
        <Route path="modaltest" element={<Modals/>}/>
      </Routes>
    </div>
  );
}

export default App;
