import CourseCard from './CourseCard.jsx';
import './CourseList.css';

function CourseList({ courses }) {
  return (
    <section className="course-list" id="koolitused" aria-labelledby="koolitused-pealkiri">
      <h2 className="course-list__title" id="koolitused-pealkiri">
        Kõik koolitused
      </h2>
      <ul className="course-list__grid">
        {courses.map((course) => (
          <li key={course.id}>
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CourseList;
