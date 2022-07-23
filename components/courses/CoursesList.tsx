import React from 'react';
import Course from './Course';
import { ICourse } from '../../data/data';

interface ICoursesList {
  coursesData: ICourse[];
}

const CoursesList: React.FC<ICoursesList> = ({ coursesData }) => {
  return (
    <ul className="grid grid-cols-responsive gap-4 gap-y-16">
      <li>
        <div className="relative rounded-lg p-8 shadow-lg min-h-[16rem] h-full bg-gradient-to-b bg-gradient-orange-pink text-white">
          <h2 className="text-3xl font-bold mt-6">
            Check out our most popular courses!
          </h2>
        </div>
      </li>

      {coursesData.map((course, index) => (
        <li key={index}>
          <Course course={course} />
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;
