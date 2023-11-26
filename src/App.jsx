import Header from "./components/Header";
import InfoClinica from "./components/InfoClinica";
import Bienvenida from "./components/Bienvenida";
import About from "./components/About";

import FaqsYMapa from "./components/FaqsYMapa";
import Footer from "./components/Footer";
import BtnVolver from "./components/BtnVolver";

function App() {
  return (
    <>
      <Header />
      <Bienvenida />
      <InfoClinica />
      <About />
      <FaqsYMapa />
      <Footer />
      <BtnVolver />
    </>
  );
}

export default App;
