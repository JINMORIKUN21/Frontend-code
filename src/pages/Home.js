import { useState } from "react";
import UploadImage from "../components/UploadImage";
import ResultDisplay from "../components/ResultDisplay";
import { classifyImage } from "../api/api";

const Home = () => {
  const [result, setResult] = useState(null);

  const handleUpload = async (file) => {
    const response = await classifyImage(file);
    setResult(response);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-soft p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-secondary">🌱 Weed Classification System</h1>
      <UploadImage onUpload={handleUpload} />
      <ResultDisplay result={result} />
    </div>
  );
};

export default Home;