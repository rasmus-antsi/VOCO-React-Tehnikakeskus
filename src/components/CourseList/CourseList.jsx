import CourseCard from './CourseCard/CourseCard.jsx';
import './CourseList.css';

function CourseList({ courses }) {
  return (
    <section className="course-list" id="koolitused" aria-labelledby="koolitused-pealkiri">
      <h2 className="course-list__title" id="koolitused-pealkiri">
        Koolitused
      </h2>
      {courses.length === 0 ? (
        <p className="course-list__empty">Sobivaid koolitusi ei leitud.</p>
      ) : (
        <ul className="course-list__grid">
          {courses.map((course) => (
            <li key={course.id}>
              <CourseCard
                title={course.title}
                description={course.description}
                duration={course.duration}
                price={course.price}
                category={course.category}
                instructor={course.instructor}
                popular={course.popular}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CourseList;
