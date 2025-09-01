import { STYLES } from "../constants/GLOBAL_VARIABLES";

export function Testimonial({
  id,
  author,
  profile,
  description,
  rating,
  device,
}) {
  return (
    <div
      id={id}
      className="d-flex flex-column flex-sm-row mx-2"
      style={{
        ...STYLES.HTestimonialSec.testimonialList,
        minWidth: device ? "600px" : "300px",
      }}
    >
      <div style={STYLES.HTestimonialSec.testimonialList.card}></div>
      <div className="col text-start">
        <p>
          <span style={STYLES.HTestimonialSec.testimonialList.card.author}>
            {author}
          </span>
        </p>
        <p>stars</p>
        <p
          style={{
            ...STYLES.HTestimonialSec.testimonialList.card.description,
            width: device ? "100%" : "240px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
