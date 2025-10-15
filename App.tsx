
import React from 'react';
import CourseContent from './components/CourseContent';
import CourseSidebar from './components/CourseSidebar';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <main className="mt-6   grid grid-cols-1 lg:grid-cols-3 lg:gap-x-12 gap-y-8">
          <div className="lg:col-span-2">
            <CourseContent />
          </div>
          <div className="lg:col-span-1 hidden md:block">
            <CourseSidebar />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
