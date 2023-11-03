export interface ProductProps {
  title: string;
  description: string;
  image?: string;
  productLink?: string;
  className?: string; // Ajoutez la prop className pour spécifier des classes CSS supplémentaires
}

export const Product = (props: ProductProps) => {
  return (
    <div className={`product ${props.className}`}>
      <a href={props.productLink}>
        <strong>{props.title}</strong>
        <p>{props.description}</p>
      </a>
    </div>
  );
};
