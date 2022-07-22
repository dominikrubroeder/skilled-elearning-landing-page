import React from 'react';
import Course from './Course';
import { ICourse } from '../../data/data';

interface ICoursesList {
  coursesData: ICourse[];
}

const CoursesList: React.FC<ICoursesList> = ({ coursesData }) => {
  return (
    <ul className="grid grid-cols-responsive gap-4">
      {coursesData.map((course, index) => (
        <li key={index}>
          <Course course={course} />
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;
