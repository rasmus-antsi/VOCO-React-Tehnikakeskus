import { useContext } from 'react';
import { FavoritesContext } from '../../../context/FavoritesContext.js';
import './CourseCard.css';

function CourseCard({ id, title, description, duration, price, category, instructor, popular }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.includes(id);
  const favoriteLabel = isFavorite ? 'Eemalda lemmikutest' : 'Lisa lemmikuks';

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
      <div className="course-card__footer">
        <p className="course-card__price">{price} €</p>
        <button
          className={`course-card__favorite${isFavorite ? ' course-card__favorite--active' : ''}`}
          type="button"
          aria-label={`${favoriteLabel}: ${title}`}
          onClick={() => toggleFavorite(id)}
        >
          <span aria-hidden="true">{isFavorite ? '★' : '☆'}</span> {favoriteLabel}
        </button>
      </div>
    </article>
  );
}

export default CourseCard;
