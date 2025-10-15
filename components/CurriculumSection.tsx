
import React from 'react';
import type { CurriculumSectionData, Lesson } from '../types';
import { FileText, Lock } from 'lucide-react';

interface LessonItemProps {
    lesson: Lesson;
}

const LessonItem: React.FC<LessonItemProps> = ({ lesson }) => (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
        <div className="flex items-start space-x-3">
            <FileText className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
            <div>
                <p className="text-sm font-medium text-gray-700">{lesson.title}</p>
                {lesson.tags && (
                    <div className="flex items-center space-x-2 mt-1">
                        {lesson.tags.map(tag => (
                           <span key={tag.text} className={`px-2 py-0.5 text-xs font-semibold rounded ${tag.bgColor} ${tag.textColor}`}>
                                {tag.text}
                           </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
        <Lock className={`w-4 h-4  flex-shrink-0 ${lesson.isLocked ? 'text-gray-400' : 'text-green-500'}`} />
    </div>
);


interface CurriculumSectionProps {
  section: CurriculumSectionData;
}

const CurriculumSection: React.FC<CurriculumSectionProps> = ({ section }) => {
  return (
    <div className="space-y-2">
      <div>
        <h4 className="font-bold">{section.title}</h4>
        <p className="text-xs text-gray-500">{section.description}</p>
      </div>
      <div>
        {section.lessons.map(lesson => (
            <LessonItem key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default CurriculumSection;
