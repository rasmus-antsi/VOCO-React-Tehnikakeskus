import './CourseCard.css';

function CourseCard({ course }) {
  const { title, description, duration, price, category, instructor, popular } = course;

  return (
    <article className="course-card">
      <div className="course-card__top">
        <span className="course-card__category">{category}</span>
        {popular && <span className="course-card__badge">Populaarne</span>}
      </div>
      <h3 className="course-card__title">{title}</h3>
      <p className="course-card__description">{description}</p>
      <dl className="course-card__details">
        <div>
          <dt>Kestus</dt>
          <dd>{duration}</dd>
        </div>
        <div>
          <dt>Koolitaja</dt>
          <dd>{instructor}</dd>
        </div>
      </dl>
      <p className="course-card__price">{price} €</p>
    </article>
  );
}

export default CourseCard;
