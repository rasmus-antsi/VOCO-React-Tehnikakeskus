import { useState } from 'react';
import CategoryList from '../CategoryList/CategoryList.jsx';
import CourseList from '../CourseList/CourseList.jsx';
import CourseFilters from './CourseFilters/CourseFilters.jsx';
import { ALL_CATEGORIES } from '../../data/courses.js';

function Catalog({ categories, courses }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(courseId) {
    setFavorites((current) =>
      current.includes(courseId)
        ? current.filter((id) => id !== courseId)
        : [...current, courseId],
    );
  }

  const searchText = search.trim().toLocaleLowerCase('et');
  const visibleCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLocaleLowerCase('et').includes(searchText);
    const matchesCategory =
      selectedCategory === ALL_CATEGORIES || course.category === selectedCategory;
    const matchesFavorites = !showOnlyFavorites || favorites.includes(course.id);

    return matchesSearch && matchesCategory && matchesFavorites;
  });

  const emptyMessage =
    showOnlyFavorites && favorites.length === 0
      ? 'Sa pole veel ühtegi koolitust lemmikuks märkinud.'
      : 'Sobivaid koolitusi ei leitud.';

  return (
    <>
      <CourseFilters
        search={search}
        onSearchChange={setSearch}
        showOnlyFavorites={showOnlyFavorites}
        onShowOnlyFavoritesChange={setShowOnlyFavorites}
      />
      <CategoryList
        categories={categories}
        courses={courses}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <CourseList
        courses={visibleCourses}
        emptyMessage={emptyMessage}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
}

export default Catalog;
