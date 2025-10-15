import React from "react";
import { StudentProgressBar } from "./StudentProgressBar";
import CurriculumSection from "./CurriculumSection";
import type { CurriculumSectionData } from "../types";

const curriculumData: CurriculumSectionData[] = [
  {
    id: "week1-4",
    title: "Week 1-4",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: [
      { id: 1, title: "Introduction", isLocked: true },
      { id: 2, title: "Course Overview", isLocked: true },
      {
        id: 3,
        title: "Course Overview",
        tags: [
          {
            text: "0 QUESTION",
            bgColor: "bg-teal-100",
            textColor: "text-teal-600",
          },
          {
            text: "10 MINUTES",
            bgColor: "bg-orange-100",
            textColor: "text-orange-600",
          },
        ],
        isLocked: true,
      },
      { id: 4, title: "Course Exercise / Reference Files", isLocked: true },
      {
        id: 5,
        title: "Code Editor Installation (Optional if you have one)",
        isLocked: true,
      },
      { id: 6, title: "Embedding PHP in HTML", isLocked: true },
    ],
  },
  {
    id: "week5-8-1",
    title: "Week 5-8",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: [
      { id: 7, title: "Defining Functions", isLocked: true },
      { id: 8, title: "Function Parameters", isLocked: true },
      {
        id: 9,
        title: "Return Values From Functions",
        tags: [
          {
            text: "2 QUESTION",
            bgColor: "bg-teal-100",
            textColor: "text-teal-600",
          },
          {
            text: "15 MINUTES",
            bgColor: "bg-orange-100",
            textColor: "text-orange-600",
          },
        ],
        isLocked: false,
      },
      { id: 10, title: "Global Variable and Scope", isLocked: true },
      { id: 11, title: "Newer Way of creating a Constant", isLocked: true },
      { id: 12, title: "Constants", isLocked: true },
    ],
  },
  {
    id: "week5-8-2",
    title: "Week 5-8",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: [
      { id: 13, title: "Defining Functions", isLocked: true },
      { id: 14, title: "Function Parameters", isLocked: true },
      {
        id: 15,
        title: "Return Values From Functions",
        tags: [
          {
            text: "2 QUESTION",
            bgColor: "bg-teal-100",
            textColor: "text-teal-600",
          },
          {
            text: "15 MINUTES",
            bgColor: "bg-orange-100",
            textColor: "text-orange-600",
          },
        ],
        isLocked: false,
      },
      { id: 16, title: "Global Variable and Scope", isLocked: true },
      { id: 17, title: "Newer Way of creating a Constant", isLocked: true },
      { id: 18, title: "Constants", isLocked: true },
    ],
  },
];

const CourseSidebar: React.FC = () => {
  return (
    <aside className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="flex flex-col justify-between items-start">
          <h3 className="text-xl font-bold">Topics for This Course</h3>
          <StudentProgressBar
            percentage={80}
          />
        </div>
        <div className="mt-4 border-t border-gray-200 pt-4 space-y-6">
          {curriculumData.map((section) => (
            <CurriculumSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default CourseSidebar;
