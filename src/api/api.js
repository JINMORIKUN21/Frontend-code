export const classifyImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
  
    const response = await fetch("http://localhost:8000/api/classify/", {
      method: "POST",
      body: formData,
    });
  
    return response.json();
  };  