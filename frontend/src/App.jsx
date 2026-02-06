import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8 space-y-4">

        <h1 className="text-3xl font-bold text-blue-600 underline text-center">
          Tailwind install kar diya gaya hai 🚀
        </h1>

        <p className="text-gray-700 text-lg">
          Project ko run karne ke liye sabse pehle apne computer me
          <span className="font-semibold text-black"> npm install </span>
          command run karein.
        </p>

        <p className="text-gray-700 text-lg">
          Phir
          <span className="font-semibold text-black"> npm run dev </span>
          command run karein.
        </p>

        <p className="text-gray-700 text-lg">
          Ab aap apna project browser me successfully run kar paayenge 🎉
        </p>

        <h2 className="text-xl font-semibold text-green-600 border-t pt-4">
          npm install karne se saari dependencies install ho jaati hain ✅
        </h2>

        <button
          onClick={() => setCount(count + 1)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Count: {count}
        </button>

      </div>
    </div>
  )
}

export default App
