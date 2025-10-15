# E-Learning Platform UI - Technical Assessment

This repository contains a collection of React components developed as part of a front-end developer technical assessment. The project focuses on building a pixel-perfect, responsive user interface for a modern e-learning platform based on provided design mockups.

The primary goal was to demonstrate proficiency in creating high-quality, interactive, and reusable UI components using **React**, **TypeScript**, and **Tailwind CSS**.


## ✨ Key Features

This project implements several key UI sections of an online course page:

*   **Interactive Video Player**: A custom video player component that shows a thumbnail initially and loads the video embed upon user interaction.
*   **Dynamic Course Sidebar**: An accordion-style curriculum viewer that displays course sections and lessons, including progress indicators and locked content states.
*   **Responsive Progress Bar**: A unique student progress bar that visualizes completion percentage with user avatars.
*   **Data Display Components**: Clean, icon-driven lists for displaying course metadata like duration, lessons, and enrollment numbers.
*   **Popup Modals**:
    *   A **Leaderboard** popup displaying student rankings with a motivational message.
    *   An **Exam/Quiz** interface designed for mobile.
    *   An "Ask a Question" popup that persists user input within the same session using `sessionStorage`.
*   **Mobile-First Responsive Navigation**: The desktop social sharing icons are replaced by a functional tab bar on mobile screens for navigating to different sections of the page (Curriculum, Comments, etc.).
*   **Pixel-Perfect Styling**: Meticulous attention to detail to match the provided designs, including spacing, colors, shadows, and typography.

## 🛠️ Tech Stack

*   **Framework**: [React](https://reactjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/) 
*   **Code Quality**: ESLint & Prettier

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v16 or later)
*   npm or yarn

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd your-repository-name
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run:

```sh
npm run dev
