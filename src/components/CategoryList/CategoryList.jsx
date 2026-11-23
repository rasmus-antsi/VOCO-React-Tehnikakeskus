import './CategoryList.css';

function CategoryList({ categories, courses }) {
  return (
    <section className="category-list" id="kategooriad" aria-labelledby="kategooriad-pealkiri">
      <h2 className="category-list__title" id="kategooriad-pealkiri">
        Kategooriad
      </h2>
      <ul className="category-list__items">
        {categories.map((category) => (
          <li className="category-list__pill" key={category}>
            {category}
            <span className="category-list__count">
              {courses.filter((course) => course.category === category).length}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CategoryList;
