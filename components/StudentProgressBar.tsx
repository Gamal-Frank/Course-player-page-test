import React from "react";

interface StudentProgressBarProps {
  percentage: number;
}

export const StudentProgressBar: React.FC<StudentProgressBarProps> = ({
  percentage,
}) => {
  return (
    <div className="relative w-full pt-10 pb-6 ">
      <div
        className="absolute top-0 z-20 flex flex-col items-center"
        style={{ left: `${percentage}%`, transform: "translateX(-50%)" }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white">
          <span className="text-sm text-blue-600">You</span>
        </div>
        <div className="mt-1 h-0 w-0 border-x-[5px] border-x-transparent border-t-[5px] border-t-gray-300" />
      </div>

      <div className="relative flex items-center">
        <div
          className="absolute top-1/2 z-10 -translate-y-1/2 -left-1"
          style={{ filter: "drop-shadow(1px 2px 2px rgba(0,0,0,0.1))" }}
        >
        </div>

        <div className="h-1 w-full rounded-full bg-gray-200">
          <div
            className="h-1 rounded-full bg-teal-400"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div
        className="absolute bottom-0"
        style={{ left: `${percentage}%`, transform: "translateX(-50%)" }}
      >
        <span className="text-sm font-medium text-blue-600">{percentage}%</span>
      </div>
    </div>
  );
};
