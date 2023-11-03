export interface TestimonialProps {
  quote: string;
  author: string;
  image: string;
}

export const Testimonial = (props: TestimonialProps) => {
  return (
    <div
      className="testimonial"
      style={{ backgroundImage: `url(/${props.image})` }}
    >
      <div>
        <p>{props.quote}</p>
        <strong>{props.author}</strong>
      </div>
    </div>
  );
};
