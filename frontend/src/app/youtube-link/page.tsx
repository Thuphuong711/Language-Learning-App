// frontend/src/app/youtube-link/page.tsx

export default function YouTubeLinkPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="border border-black p-6 rounded-md bg-white w-80">
        <h1 className="text-center text-xl font-bold mb-4">
          Enter YouTube Video link
        </h1>
        <input
          type="text"
          placeholder="Paste YouTube link here"
          className="w-full border border-gray-400 px-3 py-2 rounded mb-4"
        />
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Start Learning
        </button>
      </div>
    </div>
  );
}
