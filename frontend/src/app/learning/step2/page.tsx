// frontend/src/app/learning/step2/page.tsx

import { FaPlay, FaArrowRight } from "react-icons/fa";

export default function LearningStep2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-white text-center">
      <h2 className="text-xl font-bold mb-4">Learning (Part 2)</h2>

      <div className="w-full max-w-xs border border-gray-300 rounded-md p-4 mb-4 flex justify-center items-center">
        <FaPlay className="text-4xl text-gray-500" />
      </div>

      <div className="w-full max-w-xs bg-gray-100 rounded-md p-2 mb-2 h-12"></div>

      <p className="mt-4 text-sm">You said</p>
      <p className="text-lg font-semibold">"Bonjour"</p>

      <div className="my-4 border border-black px-4 py-2 rounded font-bold">
        96%
      </div>

      <div className="flex justify-between gap-4">
        <button className="border px-4 py-2 rounded hover:bg-gray-200">
          Retry
        </button>
        <button className="flex items-center gap-1 border px-4 py-2 rounded hover:bg-gray-200">
          Next
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
