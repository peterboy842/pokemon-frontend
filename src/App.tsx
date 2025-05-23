import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Home } from "./pages/home/home";
import Pagina1 from "./pages/Kaio";
import Pagina2 from "./pages/Pedro";
import Pagina3 from "./pages/Hilton";
import Pagina4 from "./pages/Wesley";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/pagina2" element={<Pagina2 />} />
        <Route path="/pagina3" element={<Pagina3 />} />
        <Route path="/pagina4" element={<Pagina4 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
