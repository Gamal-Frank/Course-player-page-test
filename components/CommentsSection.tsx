
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Comment } from '../types';

const commentsData: Comment[] = [
  {
    id: 1,
    author: {
      name: 'Student Name Goes Here',
      avatarUrl: 'https://picsum.photos/seed/avatar1/48/48'
    },
    date: 'Oct 10, 2021',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    author: {
      name: 'Student Name Goes Here',
      avatarUrl: 'https://picsum.photos/seed/avatar2/48/48'
    },
    date: 'Oct 15, 2021',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    author: {
      name: 'Student Name Goes Here',
      avatarUrl: 'https://picsum.photos/seed/avatar3/48/48'
    },
    date: 'Oct 19, 2021',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <div className="flex space-x-4 py-6 border-b border-gray-200 last:border-b-0">
      <img src={comment.author.avatarUrl} alt={comment.author.name} className="w-12 h-12 rounded-full" />
      <div>
        <p className="font-semibold text-gray-800">{comment.author.name}</p>
        <p className="text-xs text-gray-500 mb-2">{comment.date}</p>
        <p className="text-gray-600 text-sm">{comment.text}</p>
      </div>
    </div>
  );
};

const CommentsSection: React.FC = () => {
    const [newComment, setNewComment] = useState('');

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Comments</h2>
            <div>
                {commentsData.map(comment => <CommentCard key={comment.id} comment={comment} />)}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment"
                    className="w-full h-24 p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition resize-none"
                />
            </div>
            <button className="flex items-center justify-center space-x-2 bg-teal-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-teal-600 transition-colors shadow-sm">
                <span>Submit Review</span>
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default CommentsSection;
