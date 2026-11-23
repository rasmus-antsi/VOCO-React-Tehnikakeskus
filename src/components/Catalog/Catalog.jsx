import { useState } from 'react';
import CategoryList from '../CategoryList/CategoryList.jsx';
import CourseList from '../CourseList/CourseList.jsx';
import CourseFilters from './CourseFilters/CourseFilters.jsx';

function Catalog({ categories, courses }) {
  const [search, setSearch] = useState('');

  const searchText = search.trim().toLocaleLowerCase('et');
  const visibleCourses = courses.filter((course) =>
    course.title.toLocaleLowerCase('et').includes(searchText),
  );

  return (
    <>
      <CourseFilters search={search} onSearchChange={setSearch} />
      <CategoryList categories={categories} courses={courses} />
      <CourseList courses={visibleCourses} />
    </>
  );
}

export default Catalog;
