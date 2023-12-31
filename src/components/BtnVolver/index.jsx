import { useState } from "react";
import { TiArrowUpThick } from "react-icons/ti";

export default function BtnVolver() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <button
        className="botonVolver"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <TiArrowUpThick style={{ fontSize: "20px" }} />
      </button>
    </div>
  );
}
