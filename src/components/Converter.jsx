"use client";

import React, { useState, useRef} from"react";

export default function Converter() {
 const [image, setImage] = useState(null);
 const [previewUrl, setPreviewUrl] = useState(null);
 const [quality, setQuality] = useState(0.8);
 const [isDragging, setIsDragging] = useState(false);
 const [isConverting, setIsConverting] = useState(false);
 const fileInputRef = useRef(null);

 // Handle Drag & Drop Events
 const handleDragOver = (e) => {
 e.preventDefault();
 setIsDragging(true);
};

 const handleDragLeave = (e) => {
 e.preventDefault();
 setIsDragging(false);
};

 const handleDrop = (e) => {
 e.preventDefault();
 setIsDragging(false);
 if (e.dataTransfer.files && e.dataTransfer.files[0]) {
 processFile(e.dataTransfer.files[0]);
}
};

 const handleFileChange = (e) => {
 if (e.target.files && e.target.files[0]) {
 processFile(e.target.files[0]);
}
};

 // Read the uploaded file and generate a preview URL
 const processFile = (file) => {
 if (!file.type.startsWith("image/")) {
 alert("Please upload a valid image file.");
 return;
}
 setImage(file);
 const reader = new FileReader();
 reader.onload = (e) => {
 setPreviewUrl(e.target.result);
};
 reader.readAsDataURL(file);
};

 // Core Conversion Logic: Draw on HTML5 Canvas and extract as WebP
 const convertAndDownload = () => {
 if (!previewUrl || !image) return;
 setIsConverting(true);

 const img = new Image();
 img.src = previewUrl;
 img.onload = () => {
 // Create a canvas with the same dimensions as the original image
 const canvas = document.createElement("canvas");
 canvas.width = img.width;
 canvas.height = img.height;
 const ctx = canvas.getContext("2d");
 
 // Draw image to canvas
 ctx.drawImage(img, 0, 0);

 // Convert canvas to WebP using the specified quality (0.1 to 1.0)
 const webpUrl = canvas.toDataURL("image/webp", quality);

 // Extract original filename without extension
 const originalName = image.name.substring(0, image.name.lastIndexOf(".")) || image.name;

 // Create an invisible anchor tag to trigger the download
 const link = document.createElement("a");
 link.href = webpUrl;
 link.download = `${originalName}-converted.webp`;
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link);

 setIsConverting(false);
};
 img.onerror = () => {
 alert("Failed to process the image for conversion.");
 setIsConverting(false);
};
};

 return (
 <div className="max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-xl border border-gray-100 transition-all">
 {/* Drag & Drop Zone */}
 <div
 className={`relative flex flex-col items-center justify-center w-full h-72 border-2 border-dashed rounded-2xl transition-all cursor-pointer overflow-hidden
 ${isDragging 
 ?"border-blue-500 bg-blue-50 scale-[1.02]" 
 :"border-gray-300 hover:border-blue-400 hover:bg-gray-50"}`}
 onDragOver={handleDragOver}
 onDragLeave={handleDragLeave}
 onDrop={handleDrop}
 onClick={() => fileInputRef.current?.click()}
 >
 <input
 type="file"
 accept="image/*"
 className="hidden"
 ref={fileInputRef}
 onChange={handleFileChange}
 />
 
 {previewUrl ? (
 <img 
 src={previewUrl} 
 alt="Upload Preview" 
 className="h-full w-full object-contain p-2 rounded-2xl" 
 />
 ) : (
 <div className="flex flex-col items-center justify-center p-6 text-gray-500">
 <div className="p-4 bg-blue-100 rounded-full mb-4">
 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
 </svg>
 </div>
 <p className="mb-2 text-base font-semibold">Click to upload or drag and drop</p>
 <p className="text-sm opacity-80">Supports PNG, JPG, JPEG, and GIF</p>
 </div>
 )}
 </div>

 <div className="mt-8 space-y-8">
 {/* Quality Slider Control */}
 <div className="bg-gray-50 p-5 rounded-2xl">
 <div className="flex justify-between items-center mb-4">
 <label htmlFor="quality-slider" className="text-sm font-semibold text-gray-800">
 WebP Quality: <span className="text-blue-600">{Math.round(quality * 100)}%</span>
 </label>
 <span className="text-xs text-gray-500">Higher % = Better Quality / Larger Size</span>
 </div>
 <input
 id="quality-slider"
 type="range"
 min="0.1"
 max="1.0"
 step="0.05"
 value={quality}
 onChange={(e) => setQuality(parseFloat(e.target.value))}
 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
 />
 </div>

 {/* Action Button */}
 <button
 onClick={convertAndDownload}
 disabled={!previewUrl || isConverting}
 className={`w-full py-4 px-6 text-white text-lg font-bold rounded-2xl transition-all shadow-lg
 ${!previewUrl || isConverting 
 ?"bg-gray-400 cursor-not-allowed opacity-60 shadow-none" 
 :"bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98]"}`}
 >
 {isConverting ? (
 <span className="flex items-center justify-center gap-2">
 <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
 </svg>
 Converting...
 </span>
 ) :"Convert & Download WebP"}
 </button>
 </div>
 </div>
 );
}
