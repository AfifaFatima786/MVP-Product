import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5dc] via-[#fdf6f0] to-[#f8ede3] flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-[#5c4033] mb-10">
        Welcome! 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        
        <button
          onClick={() => navigate("/provider")}
          className="p-8 cursor-pointer hover:bg-[#e1cdb0] bg-[#fffaf3] border border-[#e6d5c3] rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform text-center"
        >
          <h2 className="text-2xl font-bold text-[#5c4033]"> Job Provider</h2>
          <p className="text-[#7d5a50] mt-2">
            Post new jobs and find the right candidates.
          </p>
        </button>

        
        <button
          onClick={() => navigate("/seeker")}
          className="p-8 hover:bg-[#e1cdb0] cursor-pointer bg-[#fffaf3] border border-[#e6d5c3] rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform text-center"
        >
          <h2 className="text-2xl font-bold text-[#5c4033]"> Job Seeker</h2>
          <p className="text-[#7d5a50] mt-2">
            Browse jobs available in your area.
          </p>
        </button>
      </div>
    </div>
  );
}

export default Home;
