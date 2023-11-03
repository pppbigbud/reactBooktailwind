import { forwardRef, useRef } from "react";
import { ItemLeftPanel, ItemLeftPanelProps } from "./item-left-panel.tsx";
import { Product } from "./product.tsx";
import { motion } from "framer-motion";
import { FaBeer } from 'react-icons/fa';
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
                    description="Vous souhaitez communiquer en grand mais sur papier, c'est ici"
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
                    className="customButton"
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
              <p className="subtitle">Demande d'étude</p>
            </div>
          </div> */}
        </div>
      </div>

      <div
        ref={(el) => (mainPanelRefs.current[1] = el)}
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
                <p className="subtitle">kSuite</p>
                <Product
                  title="kDrive"
                  description="Stocker, collaborer et partager vos fichiers"
                />
                <Product
                  title="kMail"
                  description="Stocker, collaborer et partager vos fichiers"
                />
                <Product
                  title="kChat"
                  description="Stocker, collaborer et partager vos fichiers"
                />
                <Product
                  title="kChat"
                  description="Stocker, collaborer et partager vos fichiers"
                />
              </div>
              <div>
                <p className="subtitle">Grand Public</p>
                <Product
                  title="Nom de domaine"
                  description="Stocker, collaborer et partager vos fichiers"
                />
                <Product
                  title="Hébergement Web"
                  description="Stocker, collaborer et partager vos fichiers"
                />
                <Product
                  title="Hébergement Wordpress"
                  description="Stocker, collaborer et partager vos fichiers"
                />
              </div>
              <div>
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
              </div>
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
                <Product
                  title="Caisse de Regroupement"
                  description="Regroupez, stockez, protégez, expédiez..."
                />
                <Product
                  title="Emballage produit"
                  description="Emballez vos produits et personnalisez vos emballages."
                />
                <Product
                  title="Produits de calage"
                  description="Calages personnalisés et solutions standardisées. "
                />
                <Product
                  title="PLV Grand format Mobilier"
                  description="Stocker, collaborer et partager vos fichiers"
                />
              </div>
              <div>
                <p className="subtitle">Carton Compact</p>
                <Product
                  title="Emballage produits"
                  description="Personalisez vos emballages produits"
                />
                <Product
                  title="PLV petits formats"
                  description="PLV carton petits formats"
                />
                {/* <Product
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
    </div>
  );
});
