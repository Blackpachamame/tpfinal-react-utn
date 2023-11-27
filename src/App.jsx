import Header from "./components/Header";
import InfoClinica from "./components/InfoClinica";
import Bienvenida from "./components/Bienvenida";
import About from "./components/About";
import Turnos from "./components/Turnos";
import Informate from "./components/Informate";
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
      <Turnos />
      <Informate />
      <FaqsYMapa />
      <Footer />
      <BtnVolver />
    </>
  );
}

export default App;
