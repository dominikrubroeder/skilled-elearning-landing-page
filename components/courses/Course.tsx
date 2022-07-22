import Image from 'next/image';
import React from 'react';
import { ICourse } from '../../data/data';

interface ICourseProps {
  course: ICourse;
}

const Course: React.FC<ICourseProps> = ({ course }) => {
  const { icon, title, text, primaryActionText } = course;
  return (
    <div className="relative rounded-lg p-4 shadow-lg min-h-[12rem]">
      <div className="absolute top-0 -translate-y-1/2 z-10">
        <Image src={icon} alt={`Icon ${title}`} width={56} height={56} />
      </div>
      <div className="flex flex-col items-start jut">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <button>{primaryActionText}</button>
      </div>
    </div>
  );
};

export default Course;
