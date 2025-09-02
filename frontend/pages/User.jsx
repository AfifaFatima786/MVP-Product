import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import socket from "../src/socket";
import { toast } from "react-toastify";

function User() {
  const navigate = useNavigate();
  const area = 110062;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    
    
    socket.on("new_job", ({ job, area }) => {
      console.log(job, area);
      setUserData((prevUserData) => [
        ...prevUserData,
        {
          title: job.title,
          description: job.description || "",
          areaCode: area,
        },
      ]);
      toast.success("New Job Added!")
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#fdf6f0] flex items-center justify-center px-4">
      <div className="flex flex-wrap items-start gap-6 w-full max-w-5xl">
        {/* Back Button */}
        <div className="w-full sm:w-auto">
          <button
            onClick={() => navigate("/")}
            className="px-4 cursor-pointer flex items-center justify-center gap-2 py-2 rounded-lg bg-[#e6d5c3] text-[#5c4033] font-medium hover:bg-[#d6c3b2] transition w-full sm:w-auto"
          >
            <IoMdArrowRoundBack /> Back
          </button>
        </div>

        {/* Job Search & Results */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex-1 min-w-[280px] border border-[#e6d5c3]">
          <h1 className="text-3xl font-bold text-[#5c4033] text-center">
            Job Seeker
          </h1>
          <p className="text-[#7d5a50] mt-2 text-center">
            Search and apply for jobs in your area.
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter area / pincode"
              className="flex-1 rounded-lg border border-[#d6c3b2] p-2 focus:ring-2 focus:ring-[#b08968] focus:outline-none"
            />
            <button className="bg-[#b08968] text-white px-4 py-2 rounded-lg hover:bg-[#8c6a4d] transition">
              Search
            </button>
          </div>

          {/* Job Listings */}
          <div className="mt-8 space-y-4">
            {console.log(userData)}

            {userData.map((data, idx) => (
              <div
                key={idx}
                className="border border-[#d6c3b2] rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-[#5c4033]">
                  {data.title}
                </h2>
                <p className="text-[#7d5a50] text-sm mt-1">
                  {data.description}
                </p>
                <p className="text-[#5c4033] mt-2 font-medium">
                  📍 Area: {data.areaCode}
                </p>
                <button className="mt-3 px-4 py-2 bg-[#5c4033] text-white rounded-lg hover:bg-[#7d5a50]">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;