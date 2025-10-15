
export interface Lesson {
  id: number;
  title: string;
  tags?: {
    text: string;
    bgColor: string;
    textColor: string;
  }[];
  isLocked: boolean;
}

export interface CurriculumSectionData {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Comment {
  id: number;
  author: {
    name: string;
    avatarUrl: string;
  };
  date: string;
  text: string;
}
