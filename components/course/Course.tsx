import Image from 'next/image';
import React from 'react';
import { ICourse } from '../../data/data';
import Button from '../Button';

interface ICourseProps {
  course: ICourse;
}

const Course: React.FC<ICourseProps> = ({ course }) => {
  const { icon, title, text, primaryActionText } = course;
  return (
    <div className="relative rounded-lg p-8 shadow-lg min-h-[16rem] h-full">
      <div className="absolute top-0 -translate-y-1/2">
        <Image src={icon} alt={`Icon ${title}`} width={56} height={56} />
      </div>
      <div className="grid gap-2 h-full">
        <div>
          <h2 className="font-bold text-lg mt-6 mb-2">{title}</h2>
          <p className="text-app-gray">{text}</p>
        </div>

        <Button variant="Link">{primaryActionText}</Button>
      </div>
    </div>
  );
};

export default Course;
