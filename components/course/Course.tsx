import React from "react";
import { ICourse } from "../../data/data";
import Button from "../Button";

interface ICourseProps {
  course: ICourse;
}

const Course: React.FC<ICourseProps> = ({ course }) => {
  const { icon, title, text, primaryActionText } = course;

  return (
    <div className="relative h-full min-h-[16rem] rounded-lg p-8 shadow-lg">
      <div className="absolute top-0 -translate-y-1/2">{icon}</div>
      <div className="grid h-full gap-2">
        <div>
          <h2 className="mt-6 mb-2 text-lg font-bold">{title}</h2>
          <p className="text-app-gray">{text}</p>
        </div>

        <Button variant="Link">{primaryActionText}</Button>
      </div>
    </div>
  );
};

export default Course;
