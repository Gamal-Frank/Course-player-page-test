import React, { useState, useEffect } from "react";
import {
  FileText,
  Lock,
  Plus,
  Minus,
  ArrowLeft,
  Clock,
  Square,
  CheckSquare,
} from "lucide-react";

interface Tag {
  text: string;
  bgColor: string;
  textColor: string;
}

interface Lesson {
  id: number;
  title: string;
  isLocked: boolean;
  type?: "video" | "exam" | "pdf";
  progress?: number;
  tags?: Tag[];
}

interface CurriculumSectionData {
  id: string;
  title: string;
  isCurrent?: boolean;
  lessons: Lesson[];
}

const curriculumData: CurriculumSectionData[] = [
  {
    id: "section-1",
    title: "Course Introduction",
    isCurrent: true,
    lessons: [
      {
        id: 1,
        title: "Introduction",
        isLocked: false,
        progress: 63,
        type: "video",
      },
      { id: 2, title: "Course Overview", isLocked: false, type: "video" },
      {
        id: 3,
        title: "Course Overview",
        tags: [
          {
            text: "0 QUESTION",
            bgColor: "bg-blue-100",
            textColor: "text-blue-600",
          },
          {
            text: "10 MINUTES",
            bgColor: "bg-red-100",
            textColor: "text-red-600",
          },
        ],
        isLocked: false,
        type: "exam",
      },
      {
        id: 4,
        title: "Course Exercise / Reference Files",
        isLocked: false,
        type: "pdf",
      },
      {
        id: 5,
        title: "Code Editor Installation (Optional if you have one)",
        isLocked: true,
        type: "video",
      },
      { id: 6, title: "Embedding PHP in HTML", isLocked: true, type: "video" },
    ],
  },
  {
    id: "section-2",
    title: "JavaScript Language Basics",
    lessons: [{ id: 7, title: "Introduction to JavaScript", isLocked: true }],
  },
  {
    id: "section-3",
    title: "Components & Databinding",
    lessons: [{ id: 8, title: "Understanding Components", isLocked: true }],
  },
];

const ExamModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>("Bahar");

  const quizData = {
    question:
      "1. Among the following status of India, which one has the oldest rock formations in the country?",
    options: ["Asam", "Bahar", "Kamaltake", "Utter Pardesh"],
  };

  return (
    <div className="fixed inset-0 bg-blue-800 z-50 flex flex-col font-sans">
      <header className="p-4 flex items-center justify-between text-white">
        <button onClick={onClose} className="p-2">
          <ArrowLeft size={24} />
        </button>
        <div className="bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-lg">
          <Clock size={20} />
          <span>09:32</span>
        </div>
        <div className="w-10"></div> {/* Spacer */}
      </header>

      <nav className="px-4 py-2 flex justify-center gap-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold ${
              num === 2
                ? "bg-white text-blue-800 border-white"
                : "bg-transparent text-white border-white/50"
            }`}
          >
            {num}
          </button>
        ))}
      </nav>

      <main className="flex-1 p-4 mt-4">
        <div className="bg-white rounded-2xl p-6 h-full shadow-2xl">
          <p className="text-lg font-semibold text-gray-800 mb-6">
            {quizData.question}
          </p>
          <div className="space-y-4">
            {quizData.options.map((option) => {
              const isSelected = selectedAnswer === option;
              return (
                <button
                  key={option}
                  onClick={() => setSelectedAnswer(option)}
                  className={`w-full text-left p-4 rounded-lg flex items-center gap-4 transition-all duration-200 ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {isSelected ? (
                    <CheckSquare size={24} />
                  ) : (
                    <Square size={24} className="text-gray-400" />
                  )}
                  <span className="font-medium">{option}</span>
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

const PdfModal: React.FC<{ onClose: () => void; lessonTitle: string }> = ({
  onClose,
  lessonTitle,
}) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col">
        <header className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-lg">{lessonTitle}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 font-bold text-2xl"
          >
            &times;
          </button>
        </header>
        <div className="flex-1 p-4">
          <p className="text-center text-gray-600">
            PDF content would be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
};

const LessonItem: React.FC<{
  lesson: Lesson;
  onLessonClick: (lesson: Lesson) => void;
}> = ({ lesson, onLessonClick }) => (
  <button
    onClick={() => !lesson.isLocked && onLessonClick(lesson)}
    disabled={lesson.isLocked}
    className="flex justify-between items-center w-full text-left py-3 px-2 text-sm text-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed hover:bg-gray-50"
  >
    <div className="flex items-center">
      <FileText className="w-4 h-4 mr-3 text-gray-400" />
      <span>{lesson.title}</span>
    </div>
    <div className="flex items-center gap-4">
      {lesson.progress && (
        <span className="text-xs text-gray-500">{lesson.progress}%</span>
      )}
      {lesson.tags && (
        <div className="hidden md:flex flex-col items-end gap-1">
          {lesson.tags.map((tag) => (
            <span
              key={tag.text}
              className={`px-2 py-0.5 text-[10px] font-bold rounded ${tag.bgColor} ${tag.textColor}`}
            >
              {tag.text}
            </span>
          ))}
        </div>
      )}
      {lesson.isLocked && <Lock className="w-4 h-4 text-gray-400" />}
    </div>
  </button>
);

const CurriculumSection: React.FC<{
  section: CurriculumSectionData;
  isOpen: boolean;
  onToggle: () => void;
  onLessonClick: (lesson: Lesson) => void;
}> = ({ section, isOpen, onToggle, onLessonClick }) => (
  <div className="border border-gray-200 rounded-lg">
    <h2>
      <button
        type="button"
        className="flex items-center justify-between w-full p-4 font-semibold text-left text-gray-800"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <span>{section.title}</span>
          {section.isCurrent && (
            <span className="ml-3 text-xs text-blue-600 border border-gray-300 rounded-full px-2 py-0.5 bg-white">
              You
            </span>
          )}
        </div>
        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>
    </h2>
    {isOpen && (
      <div className="px-2 divide-y divide-gray-200">
        {section.lessons.map((lesson) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            onLessonClick={onLessonClick}
          />
        ))}
      </div>
    )}
  </div>
);

const MobileCourseContent: React.FC = () => {
  const courseProgress = 63;
  const [openSectionId, setOpenSectionId] = useState<string | null>(
    curriculumData.find((s) => s.isCurrent)?.id || null
  );
  const [modalContent, setModalContent] = useState<{
    type: "exam" | "pdf";
    lesson: Lesson;
  } | null>(null);

  const handleLessonClick = (lesson: Lesson) => {
    if (lesson.type === "exam" || lesson.type === "pdf") {
      setModalContent({ type: lesson.type, lesson });
    }
  };

  return (
    <>
      <aside className="w-full mx-auto">
        <h3 className="text-2xl font-bold mb-4">Topics for This Course</h3>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
          <div
            className="bg-green-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${courseProgress}%` }}
          />
        </div>
        <div className="space-y-3">
          {curriculumData.map((section) => (
            <CurriculumSection
              key={section.id}
              section={section}
              isOpen={openSectionId === section.id}
              onToggle={() =>
                setOpenSectionId(
                  openSectionId === section.id ? null : section.id
                )
              }
              onLessonClick={handleLessonClick}
            />
          ))}
        </div>
      </aside>

      {modalContent?.type === "exam" && (
        <ExamModal onClose={() => setModalContent(null)} />
      )}
      {modalContent?.type === "pdf" && (
        <PdfModal
          onClose={() => setModalContent(null)}
          lessonTitle={modalContent.lesson.title}
        />
      )}
    </>
  );
};

export default MobileCourseContent;
