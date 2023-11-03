import { forwardRef, useRef } from "react";
import { ItemLeftPanel, ItemLeftPanelProps } from "./item-left-panel.tsx";
import { Product } from "./product.tsx";
import { motion } from "framer-motion";
import { FaBeer } from "react-icons/fa";
// import BeerIcon from "./icon-component.tsx";

export const PanelProducts = forwardRef<HTMLDivElement>(function (props, ref) {
  const onMouseOver = (e: any) => {
    console.log("PanelProducts");
    console.log(e.target);
  };

  const mainPanelRefs = useRef<Array<HTMLDivElement | null>>([]);

  const itemsLeft: ItemLeftPanelProps[] = [
    {
      title: "Grand Format",
      onMouseOver,
      // content: <BeerIcon />,
    },
    {
      title: "Petit Format",
      onMouseOver,
      // content: <BeerIcon />,
    },
    {
      title: "Emballages",
      onMouseOver,
      // content: <BeerIcon />,
    },
    // {
    //   title: "Goodies",
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
        <div className="panel__columns">
          <div className="panel__center">
            {/* <p>Solutions Grand Format</p> */}

            <div className="panel__products">
              <div>
                <p className="subtitle">Supports Souples</p>
                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Baches"
                    className="menuAnim customButton bg-image-bache"
                    description="Grande sélection de matériaux pour vos communications extérieures."
                    productLink="/votre-lien-produit"
                  />{" "}
                </motion.div>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Kakemonos"
                    className="menuAnim customButton bg-image"
                    description="Pour vos communications intérieurs avec ou sans support (Roll-up, Parapluie...)"
                  />
                </motion.div>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Papier"
                    className="menuAnim customButton bg-image-papier"
                    description="Vous souhaitez communiquer en grand et sur papier, c'est ici"
                  />
                </motion.div>
              </div>
              <div>
                <p className="subtitle">Supports Rigides</p>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Panneaux / Enseignes"
                    className="customButton bg-image-enseigne"
                    description="Votre entreprise veut se faire remarquer. Cliquez ici pour découvrir mes solutions"
                  />
                </motion.div>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="PLV / Salon"
                    className="customButton"
                    description="Communiquer sur vos salons et événements. Transportable et personnalisable"
                  />
                </motion.div>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Signalétique"
                    className="customButton"
                    description="Ensemble de produits personnalisables pour signaler, orienter, guider, informer"
                  />
                </motion.div>
              </div>
              <div>
                <p className="subtitle">Adhesifs</p>
                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Vitrines"
                    className="customButton"
                    description="Stocker, collaborer et partager vos fichiers"
                  />
                </motion.div>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Covering Véhicules"
                    className="customButton"
                    description="Stocker, collaborer et partager vos fichiers"
                  />
                </motion.div>
                {/* <Product
                  title="Décoration"
                  description="Stocker, collaborer et partager vos fichiers"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={(el) => (mainPanelRefs.current[1] = el)}
        className="panel__main"
      >
        <div className="panel__columns">
          <div className="panel__center">
            {/* <p>Nos produits de saison</p> */}

            <div className="panel__products">
              <div>
                <p className="subtitle">Recto et Recto/Verso</p>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Carte de visite"
                    className="customButton"
                    description="Pour chaque activité, il y a une carte de visite... Je mets à votre disposition une sélection de 10 modèles de cartes de visite."
                  />
                </motion.div>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Flyers et tracts"
                    className="customButton"
                    description="Standards ou personnalisés, les flyers et tracts sont parfaits tant pour la promotion d'événements que de produits."
                  />
                </motion.div>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Dépliants"
                    className="customButton"
                    description="Créez un produit sur mesure en sélectionnant le nombre de faces, le style de pliage, et le format, en partant de l'option la plus basique jusqu'à la plus élaborée."
                  />
                </motion.div>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Affiches"
                    className="customButton"
                    description="Les affiches de petite taille sont idéales pour promouvoir vos événements et produits de manière extensive, offrant une visibilité exceptionnelle."
                  />
                </motion.div>
              </div>
              <div>
                <p className="subtitle">Spirale, Carré Collé, Dos Cousu, ...</p>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Revues, livres, catalogues"
                    className="customButton"
                    description="Évoquez votre marque, racontez votre histoire, ou mettez en valeur tous vos produits de la manière qui vous convient le mieux. Optez pour le format, le matériau et la reliure sur mesure pour personnaliser vos revues, livres et catalogues selon vos préférences, en toute simplicité et rapidité."
                  />
                </motion.div>
                {/* <Product
                  title="Hébergement Web"
                  description="Stocker, collaborer et partager vos fichiers"
                />
                <Product
                  title="Hébergement Wordpress"
                  description="Stocker, collaborer et partager vos fichiers"
                /> */}
              </div>
              {/* <div>
                <p className="subtitle">Cloud Computing</p>
                <Product
                  title="VPS Cloud"
                  description="Stocker, collaborer et partager vos fichiers"
                />
                <Product
                  title="Public Cloud"
                  description="Stocker, collaborer et partager vos fichiers"
                />
                <Product
                  title="Jelastic Cloud"
                  description="Stocker, collaborer et partager vos fichiers"
                />
              </div> */}
            </div>
          </div>
          {/* <div className="panel__right">
            <p className="subtitle">Action Rapides</p>

            <ul>
              <li>Transférer un domaine ⟼</li>
              <li>Comparer nos solutions cloud et hébergement ⟼</li>
              <li>Migrer des clases mails ⟼</li>
              <li>Renalway Warranty ⟼</li>
              <li>Payer une facture ⟼</li>
              <li>Guide des questions fréquentes ⟼</li>
            </ul>

            <div>
              <p className="subtitle">Etude de cas</p>
            </div>
          </div> */}
        </div>
      </div>
      <div
        ref={(el) => (mainPanelRefs.current[2] = el)}
        className="panel__main"
      >
        {/* <div className="panel__search">
          <input type="text" placeholder="Rechercher un produit" />
        </div> */}
        <div className="panel__columns">
          <div className="panel__center">
            {/* <p>Nos produits de saison</p> */}

            <div className="panel__products">
              <div>
                <p className="subtitle">Carton Ondulé</p>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Caisse de Regroupement"
                    className="customButton"
                    description="L’emballage tertiaire permet le regroupement de produits en emballages primaires et secondaires."
                  />
                </motion.div>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Emballage produit"
                    className="customButton"
                    description="L’emballage secondaire se charge de regrouper plusieurs emballages primaires, afin qu'ils soient plus facilement stockable, transportable et manipulable."
                  />
                </motion.div>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Calages et protection"
                    className="customButton"
                    description="Calages personnalisés et solutions standardisées pour sécurisés vos produits durant leur transport et/ou stockage. "
                  />
                </motion.div>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="PLV Grand format Mobilier"
                    className="customButton"
                    description="Communiquez sur le lieu de vente et démarquez vous. Sans oublier les solutions de mobilier (chaises, tables, bureau...)"
                  />
                </motion.div>
              </div>
              <div>
                <p className="subtitle">Carton Compact</p>
                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Product
                    title="Emballage produits"
                    className="customButton"
                    description="Personalisez vos emballages produits"
                  />
                </motion.div>

                <motion.div
                  className="menuAnim"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                <Product
                  title="PLV petits formats"
                  className="customButton"
                  description="PLV carton petits formats"
                />
                 </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
