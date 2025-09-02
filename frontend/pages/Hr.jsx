import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import  socket  from "../src/socket";
import { useState } from "react";
import { toast } from "react-toastify";


function Hr() {
  const navigate = useNavigate();
  const area=110062
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");





  const submitHandler=(e)=>{
    e.preventDefault()
      const job={
        title:title,
        description:description
        
      }

      toast.success("Job Created Succesfully!");
      socket.emit("new_job_created",{job,area})
      setTitle("");
    setDescription("");
  }

  return (
    <div className="min-h-screen bg-[#fdf6f0] flex items-center justify-center px-4">
  <div className="flex flex-wrap items-start gap-6 w-full max-w-4xl">
    
    {/* Back Button */}
    <div className="w-full sm:w-auto">
      <button
        onClick={() => navigate("/")}
        className="px-4 flex items-center justify-center gap-1.5 cursor-pointer py-2 rounded-lg bg-[#e6d5c3] text-[#5c4033] font-medium hover:bg-[#d6c3b2] transition w-full sm:w-auto"
      >
        <IoMdArrowRoundBack /> Back
      </button>
    </div>

    {/* Form Card */}
    <div className="bg-white shadow-lg rounded-2xl p-8 flex-1 min-w-[280px] border border-[#e6d5c3]">
      <h1 className="text-3xl font-bold text-[#5c4033] text-center">
        Job Provider
      </h1>
      <p className="text-[#7d5a50] mt-2 text-center">
        Post a job and connect with seekers in your area.
      </p>

      {/* Form */}
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#5c4033]">
            Job Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Enter job title"
            className="mt-1 w-full rounded-lg border border-[#d6c3b2] p-2 focus:ring-2 focus:ring-[#b08968] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#5c4033]">
            Job Description
          </label>
          <textarea
          value={description}
            onChange={(e)=>setDescription(e.target.value)}
            placeholder="Enter job details"
            className="mt-1 w-full rounded-lg border border-[#d6c3b2] p-2 focus:ring-2 focus:ring-[#b08968] focus:outline-none"
            rows="4"
          />
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-[#5c4033]">
            Area / Pincode
          </label>
          <input
            type="text"
            placeholder="e.g. 110062"
            className="mt-1 w-full rounded-lg border border-[#d6c3b2] p-2 focus:ring-2 focus:ring-[#b08968] focus:outline-none"
          />
        </div> */}

        <button
          type="submit"
          onClick={submitHandler}
          className="w-full cursor-pointer bg-[#b08968] text-white py-2 rounded-lg hover:bg-[#8c6a4d] transition"
        >
          Post Job
        </button>
      </form>
    </div>
  </div>
</div>

  );
}

export default Hr;
