import { useState } from 'react';
import CategoryList from '../CategoryList/CategoryList.jsx';
import CourseList from '../CourseList/CourseList.jsx';
import CourseFilters from './CourseFilters/CourseFilters.jsx';
import { ALL_CATEGORIES } from '../../data/courses.js';

function Catalog({ categories, courses }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);

  const searchText = search.trim().toLocaleLowerCase('et');
  const visibleCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLocaleLowerCase('et').includes(searchText);
    const matchesCategory =
      selectedCategory === ALL_CATEGORIES || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <CourseFilters search={search} onSearchChange={setSearch} />
      <CategoryList
        categories={categories}
        courses={courses}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <CourseList courses={visibleCourses} />
    </>
  );
}

export default Catalog;
