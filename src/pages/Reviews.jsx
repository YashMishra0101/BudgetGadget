import React, { useState } from "react";
import { db } from "../firebase/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Reviews = () => {
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("male");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const addReview = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "Reviews", userName), {
      name: userName,
      gender: gender,
      description: description,
    });
    toast.success("Review added successfully");
    navigate("/home");
  };

  return (
    <div className="bg-[#111827] h-screen">
      <form className="max-w-2xl  mx-2 md:mx-auto ">
        <label
          htmlFor="website-admin"
          className="pt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="website-admin"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="rounded-none outline-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Name"
          />
        </div>

        <label
          htmlFor="countries"
          className="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select your gender
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option>Male</option>
          <option>Female</option>
        </select>
        <label
          htmlFor="message"
          className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
        <button
          onClick={addReview}
          className="bg-gray-700 text-white mt-5 px-10 py-2 rounded-md hover:bg-blue-700"
        >
          Add review
        </button>
      </form>
    </div>
  );
};

export default Reviews;