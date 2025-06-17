// frontend/src/app/learning/step1/page.tsx

import {
  FaPlay,
  FaMicrophone,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

export default function LearningStep1() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-white text-center">
      <h2 className="text-xl font-bold mb-4">Learning (Part 2)</h2>

      <div className="w-full max-w-xs border border-gray-300 rounded-md p-4 mb-4 flex justify-center items-center">
        <FaPlay className="text-4xl text-gray-500" />
      </div>

      <div className="w-full max-w-xs bg-gray-100 rounded-md p-2 mb-2 h-12"></div>
      <p className="mb-2">Repeat after this sentence</p>

      <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center mb-4">
        <FaMicrophone className="microphone text-xl text-gray-700" />
      </div>

      <div className="w-full max-w-xs bg-gray-100 rounded-md p-2 h-12 mb-6"></div>

      <div className="flex justify-between w-full max-w-xs">
        <button className="flex items-center gap-1 text-gray-600 hover:text-black">
          <FaArrowLeft />
          Previous
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-black">
          Next
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
