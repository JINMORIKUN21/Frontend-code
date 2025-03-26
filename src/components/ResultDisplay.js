const ResultDisplay = ({ result }) => {
    if (!result) return null;
    return (
      <div className={`mt-6 p-5 rounded-lg text-lg font-bold text-white shadow-lg ${result.prediction ? 'bg-green-500' : 'bg-gray-600'}`}>
        {result.prediction ? "🌿 Weed Detected! Take Action!" : "✅ No Weed Detected!"}
      </div>
    );
  };
  
  export default ResultDisplay;