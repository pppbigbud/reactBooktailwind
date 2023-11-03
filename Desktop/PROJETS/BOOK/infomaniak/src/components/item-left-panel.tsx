import { motion } from "framer-motion";


export interface ItemLeftPanelProps {
  title: string;
  description?: string;
  image?: string;
  onMouseOver: (e: any) => void;
  content?: JSX.Element; 
}

export const ItemLeftPanel = (props: ItemLeftPanelProps) => {
  return (
    <motion.div
      className="menuAnim"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="menuAnim item-left-panel" onMouseOver={props.onMouseOver}>
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}
      </div>
    </motion.div>
  );
};
