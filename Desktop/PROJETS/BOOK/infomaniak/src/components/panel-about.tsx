import { forwardRef, useRef } from "react";
import { ItemLeftPanel, ItemLeftPanelProps } from "./item-left-panel.tsx";
// import { Product } from "./product.tsx";
import { Testimonial } from "./testimonial.tsx";

export const PanelAbout = forwardRef<HTMLDivElement>(function (props, ref) {
  const onMouseOver = (e: any) => {
    console.log("PanelProducts");
    console.log(e.target);
  };

  const mainPanelRefs = useRef<Array<HTMLDivElement | null>>([]);

  const itemsLeft: ItemLeftPanelProps[] = [
    {
      title: "Site Vitrine",
      onMouseOver,
    },
    {
      title: "E-commerce",
      onMouseOver,
    },
    // {
    //   title: "Application Mobile",
    //   onMouseOver,
    // },
    {
      title: "Optimisation, Referencement",
      onMouseOver,
    },
    // {
    //   title: "Infomaniak is recruiting",
    //   onMouseOver,
    // },
    // {
    //   title: "Infomaniak is recruiting",
    //   onMouseOver,
    // },
    // {
    //   title: "Infomaniak is recruiting",
    //   onMouseOver,
    // },
    // {
    //   title: "Infomaniak is recruiting",
    //   onMouseOver,
    // },
  ];

  return (
    <div ref={ref} className="panel">
      <div className="panel__left">
        {itemsLeft.map((item, index) => (
          <ItemLeftPanel
            key={index}
            {...item}
            onMouseOver={() => {
              mainPanelRefs.current.forEach((el) =>
                el?.classList.remove("visible")
              );
              mainPanelRefs.current[index]?.classList.add("visible");
            }}
          />
        ))}
      </div>
      <div
        ref={(el) => (mainPanelRefs.current[0] = el)}
        className="panel__main visible"
      >
        <Testimonial
          quote="Vous souhaitez être visible sur le web"
          author="Venez découvrir mes offres tout compris"
          image="src/assets/img/mockup/siteVitrine.png"
        />
      </div>
      <div
        ref={(el) => (mainPanelRefs.current[1] = el)}
        className="panel__main"
      >
        <Testimonial
          quote="Vous souhaitez vendre sur internet"
          author="De multiples possibilités s'offrent à vous. Contactez moi on en discute :) !"
          image="src/assets/img/mockup/siteEcommerce.png"
        />
      </div>
    </div>
  );
});
