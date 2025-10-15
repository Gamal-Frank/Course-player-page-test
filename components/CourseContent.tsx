import React, { useState, useRef, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  X,
  ListVideo,
  MessageCircle,
  HelpCircle,
  Trophy,
} from "lucide-react";
import CommentsSection from "./CommentsSection";
import CourseMaterials from "./CourseMaterials";
import MobileCourseContent from "./MobileCourseContent";

const VideoPlayer: React.FC<{ thumbnailUrl: string; videoUrl: string }> = ({
  thumbnailUrl,
  videoUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isPlaying) {
    return (
      <div
        className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
        onClick={() => setIsPlaying(true)}
      >
        <img
          src={thumbnailUrl}
          alt="Course Preview"
          className="w-full h-auto object-cover aspect-video"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity group-hover:bg-opacity-40">
          <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M23.1027 12.6366C24.436 13.4037 24.436 15.242 23.1027 16.0091L2.64531 27.8762C1.312 28.6433 -0.354687 27.7242 -0.354687 26.1668L-0.354685 2.47888C-0.354685 0.921445 1.31201 0.00234479 2.64531 0.769457L23.1027 12.6366Z"
                fill="#F43F5E"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`${videoUrl}?autoplay=1&rel=0`}
        title="Course Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const SocialShare: React.FC = () => {
  const socialLinks = [
    { Icon: Facebook, href: "#", name: "Facebook" },
    { Icon: Twitter, href: "#", name: "Twitter" },
    { Icon: Linkedin, href: "#", name: "LinkedIn" },
    { Icon: Youtube, href: "#", name: "YouTube" },
  ];

  return (
    <div className="flex items-center space-x-2">
      {socialLinks.map(({ Icon, href, name }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${name}`}
          className="flex items-center justify-center w-9 h-9 bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Icon className="h-4 w-4 text-gray-500" />
        </a>
      ))}
    </div>
  );
};

interface LeaderboardPopupProps {
  show: boolean;
  onClose: () => void;
}

const LeaderboardPopup: React.FC<LeaderboardPopupProps> = ({
  show,
  onClose,
}) => {
  if (!show) return null;

  const leaderboardData = [
    {
      rank: 1,
      avatar: "https://i.pravatar.cc/150?img=1",
      name: "Youssef Ahmed",
      score: "980 pts",
    },
    {
      rank: 2,
      avatar: "https://i.pravatar.cc/150?img=2",
      name: "Fatima Zahra",
      score: "950 pts",
    },
    {
      rank: 3,
      avatar: "https://i.pravatar.cc/150?img=3",
      name: "Ali Hassan",
      score: "925 pts",
    },
    {
      rank: 4,
      avatar: "https://i.pravatar.cc/150?img=4",
      name: "Nour El-Sherif",
      score: "910 pts",
    },
    {
      rank: 5,
      avatar: "https://i.pravatar.cc/150?img=5",
      name: "Sara Ibrahim",
      score: "890 pts",
    },
    {
      rank: 6,
      avatar: "https://i.pravatar.cc/150?img=6",
      name: "Khaled Mansour",
      score: "875 pts",
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-sm mx-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <p className="text-gray-600">Course Name Shown Here</p>
          <h2 className="text-2xl font-bold text-indigo-900">Leaderboard</h2>
        </div>

        <div className="bg-sky-50 p-4 rounded-lg my-6 flex items-center justify-between">
          <p
            dir="rtl"
            className="text-indigo-900 text-sm font-medium leading-relaxed"
          >
            عظيم يا صديقي.. أداءك في الكورس ده أفضل من ٦٠٪ من باقي الطلبة.. كمّل
            عايز أشوف اسمك في الليدر بورد هنا
          </p>
          <span className="text-5xl" role="img" aria-label="Flexed bicep">
            💪
          </span>
        </div>

        <div className="bg-slate-100 p-3 rounded-xl space-y-2 max-h-80 overflow-y-auto">
          {leaderboardData.map((player) => (
            <div
              key={player.rank}
              className="bg-white p-3 rounded-lg flex items-center gap-4 shadow-sm"
            >
              <span className="font-bold text-lg text-gray-400 w-6 text-center">
                {player.rank}
              </span>
              <img
                src={player.avatar}
                alt={player.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-semibold text-gray-800 flex-grow">
                {player.name}
              </span>
              <span className="font-bold text-indigo-700 text-sm">
                {player.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface AskQuestionPopupProps {
  show: boolean;
  onClose: () => void;
}

const AskQuestionPopup: React.FC<AskQuestionPopupProps> = ({
  show,
  onClose,
}) => {
  const [question, setQuestion] = useState(
    () => sessionStorage.getItem("userQuestion") || ""
  );

  useEffect(() => {
    sessionStorage.setItem("userQuestion", question);
  }, [question]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Ask a Question</h3>
          <button onClick={onClose}>
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={8}
          placeholder="Type your question here..."
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          Submit Question
        </button>
      </div>
    </div>
  );
};

interface MobileCourseBarProps {
  onCurriculumClick: () => void;
  onCommentsClick: () => void;
  onAskQuestionClick: () => void;
  onLeaderboardClick: () => void;
}

const MobileCourseBar: React.FC<MobileCourseBarProps> = ({
  onCurriculumClick,
  onCommentsClick,
  onAskQuestionClick,
  onLeaderboardClick,
}) => {
  const navItems = [
    { icon: ListVideo, label: "Curriculum", action: onCurriculumClick },
    { icon: MessageCircle, label: "Comments", action: onCommentsClick },
    { icon: HelpCircle, label: "Ask", action: onAskQuestionClick },
    { icon: Trophy, label: "Leaderboard", action: onLeaderboardClick },
  ];

  return (
    <div className="bg-white p-2 flex justify-around items-center">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={item.action}
          className="flex flex-col items-center text-gray-600 hover:text-indigo-600"
        >
          <item.icon size={24} />
          <span className="text-xs mt-1">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

const CourseContent: React.FC = () => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showAskQuestion, setShowAskQuestion] = useState(false);

  const curriculumRef = useRef<HTMLDivElement>(null);
  const commentsRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg">
        <div className="space-y-4">
          <VideoPlayer
            thumbnailUrl="https://i.imgur.com/uG9t7Y4.png"
            videoUrl="https://www.youtube.com/embed/mbyG85GZ0PI"
          />

          {/* Desktop Social Share */}
          <div className="hidden md:flex justify-between items-center">
            <SocialShare />
          </div>
          <div className="md:hidden block sticky bottom-0 -mx-4 -mb-4">
            <MobileCourseBar
              onCurriculumClick={() => handleScrollTo(curriculumRef)}
              onCommentsClick={() => handleScrollTo(commentsRef)}
              onAskQuestionClick={() => setShowAskQuestion(true)}
              onLeaderboardClick={() => setShowLeaderboard(true)}
            />
          </div>
          <div>
            <CourseMaterials />
          </div>
          <div ref={curriculumRef}>
            <MobileCourseContent />
          </div>

          <div ref={commentsRef}>
            <CommentsSection />
          </div>
        </div>
      </div>

      {/* Popups are rendered here, outside the main flow */}
      <LeaderboardPopup
        show={showLeaderboard}
        onClose={() => setShowLeaderboard(false)}
      />
      <AskQuestionPopup
        show={showAskQuestion}
        onClose={() => setShowAskQuestion(false)}
      />
    </>
  );
};

export default CourseContent;
