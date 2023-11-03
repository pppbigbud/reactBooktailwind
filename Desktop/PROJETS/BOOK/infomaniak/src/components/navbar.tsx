/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";

export interface NavbarProps {
  productRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
}

export const Navbar = (props: NavbarProps) => {
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const moveCursor = (e: any) => {
    console.log(e.target);
    // const cursor = cursorRef.current;
    const item = e.target;
    const rectangle = item.getBoundingClientRect();
    // get parent position
    const parentRectangle = item.parentElement.getBoundingClientRect();
    console.log(rectangle.left);

    if (cursorRef.current) {
      // cursor.style.width = `100%`;
      cursorRef.current.style.left = `${
        rectangle.left - parentRectangle.left + rectangle.width / 2 - 10
      }px`;
      cursorRef.current.style.display = "block"; // Affiche la span lors du survol
    }

    props.productRef.current?.classList.remove("panel--active");
    props.aboutRef.current?.classList.remove("panel--active");

    switch (item.innerHTML) {
      case "Print":
        props.productRef.current?.classList.add("panel--active");
        break;
      case "Web":
        props.aboutRef.current?.classList.add("panel--active");
        break;
      default:
        break;
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        {/* <img src="/logo-infomaniak.svg" alt="logo" className="navbar__logo" /> */}

        <div className="navbar__items-wrapper">
          <ul>
            <li className="menuAnim" onMouseOver={moveCursor}>
              Web
            </li>

            <li className="menuAnim" onMouseOver={moveCursor}>
              Print
            </li>

            <li className="menuAnim" onMouseOver={moveCursor}>
              Conseils et créations
            </li>
          </ul>

          <span ref={cursorRef}></span>
        </div>
      </nav>
    </div>
  );
};
