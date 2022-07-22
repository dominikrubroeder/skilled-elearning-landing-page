import React from 'react';
import CoursesList from './CoursesList';
import { coursesData } from '../../data/data';

const Courses: React.FC = () => {
  return (
    <section>
      <div className="max-w-screen-xl">
        <CoursesList coursesData={coursesData} />
      </div>
    </section>
  );
};

export default Courses;
