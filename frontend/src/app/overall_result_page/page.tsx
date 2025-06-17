import { useRouter } from 'next/navigation'; // Changed from next/router

export default function OverallResultPage() {
    const router = useRouter();

    const handleFinish = () => {
        router.push('/');
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-80 bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <button className="text-left text-xl mb-4" onClick={() => router.back()}>
            ←
          </button>
          <h2 className="text-lg font-semibold text-center mb-2">Pronunciation Feedback</h2>
          <div className="flex justify-center items-center my-6">
            <div className="w-24 h-24 rounded-full border-4 border-gray-400 flex items-center justify-center text-2xl font-bold">
              82%
            </div>
          </div>
          <p className="text-center mb-4 text-sm text-gray-700">
            Good Job! You pronounced most sentences correctly.
          </p>
          <button
            onClick={handleFinish}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Finish Session
          </button>
        </div>
      </div>
    );
}