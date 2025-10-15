import React from "react";
import { Clock, Library, BookUser, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface InfoItemProps {
  IconComponent: LucideIcon;
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ IconComponent, label, value }) => (
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center text-gray-500">
      <IconComponent className="h-5 w-5 mr-3 text-gray-400" />
      <span>{label}:</span>
    </div>
    <span className="font-medium text-gray-800">{value}</span>
  </div>
);

const CourseMaterials: React.FC = () => {
  const materials = [
    { IconComponent: Clock, label: "Duration", value: "3 weeks" },
    { IconComponent: Library, label: "Lessons", value: "8" },
    { IconComponent: BookUser, label: "Enrolled", value: "65 students" },
    { IconComponent: Globe, label: "Language", value: "English" },
  ];

  const renderMaterialColumn = (keyPrefix: number) => (
    <div className="flex flex-col divide-y divide-gray-200">
      {materials.map((item, index) => (
        <InfoItem key={keyPrefix + index} {...item} />
      ))}
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Course Materials</h2>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {renderMaterialColumn(0)}
          {renderMaterialColumn(materials.length)}
        </div>
      </div>
    </div>
  );
};

export default CourseMaterials;
