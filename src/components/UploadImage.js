import React, { useState } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";

const UploadImage = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (image) onUpload(image);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-96 text-center border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload an Image</h2>

        <label className="cursor-pointer flex flex-col items-center gap-2 border-2 border-dashed border-blue-500 rounded-xl p-6 bg-gray-50 hover:bg-gray-100 transition">
          <CloudArrowUpIcon className="h-8 w-8 text-blue-200" />
          <span className="text-gray-500 font-medium">Choose File</span>
          <input type="file" accept="image/*" className="hidden" onChange={handleChange} />
        </label>

        {preview && (
          <img src={preview} alt="Preview" className="mt-4 w-full rounded-md shadow-md border border-gray-300" />
        )}

        <button
          onClick={handleUpload}
          className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-semibold transition"
        >
          Upload & Classify 🚀
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
