import './CourseFilters.css';

function CourseFilters({ search, onSearchChange, showOnlyFavorites, onShowOnlyFavoritesChange }) {
  return (
    <div className="course-filters">
      <label className="course-filters__search">
        <span className="course-filters__label">Otsi koolitust</span>
        <input
          className="course-filters__input"
          type="search"
          placeholder="Sisesta koolituse nimi"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>
      <label className="course-filters__favorites">
        <input
          type="checkbox"
          checked={showOnlyFavorites}
          onChange={(event) => onShowOnlyFavoritesChange(event.target.checked)}
        />
        Ainult lemmikud
      </label>
    </div>
  );
}

export default CourseFilters;
