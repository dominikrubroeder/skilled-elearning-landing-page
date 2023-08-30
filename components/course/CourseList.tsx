import React from 'react';
import Course from './Course';
import {coursesData} from "../../data/data";

const CourseList: React.FC = () => {
  return (
    <ul className="grid gap-4 gap-y-16" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))' }}>
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

export default CourseList;
