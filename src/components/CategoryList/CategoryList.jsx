import { ALL_CATEGORIES } from '../../data/courses.js';
import './CategoryList.css';

function CategoryList({ categories, courses, selectedCategory, onSelectCategory }) {
  const options = [
    { name: ALL_CATEGORIES, count: courses.length },
    ...categories.map((category) => ({
      name: category,
      count: courses.filter((course) => course.category === category).length,
    })),
  ];

  return (
    <section className="category-list" id="kategooriad" aria-labelledby="kategooriad-pealkiri">
      <h2 className="category-list__title" id="kategooriad-pealkiri">
        Kategooriad
      </h2>
      <ul className="category-list__items">
        {options.map(({ name, count }) => (
          <li key={name}>
            <button
              className="category-list__pill"
              type="button"
              aria-pressed={name === selectedCategory}
              onClick={() => onSelectCategory(name)}
            >
              {name}
              <span className="category-list__count">{count}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CategoryList;
