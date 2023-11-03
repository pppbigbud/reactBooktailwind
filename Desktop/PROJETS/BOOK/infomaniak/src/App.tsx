import "./App.scss";
import { Navbar } from "./components/navbar.tsx";
import { PanelProducts } from "./components/panel-products.tsx";
import { PanelAbout } from "./components/panel-about.tsx";
import { useRef } from "react";

function App() {
  const panelProductRef = useRef<HTMLDivElement | null>(null);
  const panelAboutRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Navbar aboutRef={panelAboutRef} productRef={panelProductRef} />
      <PanelProducts ref={panelProductRef} />
      <PanelAbout ref={panelAboutRef} />
    </>
  );
}

export default App;
