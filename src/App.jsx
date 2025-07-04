import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useToast } from "react-toast-drei";
import { motion } from "framer-motion";

function App() {
  const toast = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm install react-toast-drei");
    toast("success", "Command copied to clipboard!", 3000);
  };

  const handleSuccess = () => {
    toast("success", "Operation completed successfully!", 9000);
  };

  const handleError = () => {
    toast("error", "Something went wrong!", 7000);
  };

  const handleInfo = () => {
    toast("info", "Here is some information for you.", 5000);
  };

  const handleWarning = () => {
    toast("warning", "Please be careful with this action.", 6000);
  };

  return (
    <>
      <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="md:text-9xl text-6xl flex md:flex-col flex-col lg:flex-row  justify-center items-center font-extrabold text-zinc-900">
          <div>React</div>
          <div className=" flex items-center justify-center">
            {" "}
            T
            <motion.img
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                times: [0, 1],
              }}
              src={reactLogo}
              className="md:size-24 size-14  drop-shadow-[0_0_20px_rgba(97,218,251,0.8)] filter brightness-110"
              alt="React logo"
            />
            ast
            <div className="relative">Drei.
              <span className="font-normal absolute text-xs right-0  md:bottom-0 -bottom-2  ">Made By <a href="https://andreidev.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-mono hover:text-blue-800 underline">Andrei</a>❤️</span>
            </div>
          </div>
        </h1>

        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 mt-6 max-w-md mx-4">
          <h2 className="text-xl font-semibold text-zinc-800 mb-3">
            Quick Install
          </h2>
          <div className="space-y-2">
            <div className="bg-zinc-900 text-green-400 p-3 rounded font-mono text-sm flex justify-between items-center">
              <span>npm install react-toast-drei</span>
              <button
                onClick={copyToClipboard}
                className="text-zinc-400 hover:text-white transition-colors duration-200 ml-3"
                title="Copy to clipboard"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                </svg>
              </button>
            </div>
            <p className="text-zinc-600 text-sm">
              Then import and use the{" "}
              <code className="bg-zinc-200 px-1 rounded text-zinc-800">
                useToast
              </code>{" "}
              hook in your components!
            </p>
            <p className="text-zinc-600 font-mono mt-4 text-sm">
              Read the Full{" "}
              <a
                href="https://www.npmjs.com/package/react-toast-drei"
                className="text-blue-600  hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>.
            </p>
          </div>
        </div>

        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <button
            onClick={handleSuccess}
            className="bg-green-500 p-3 rounded-xl ring-2 ring-zinc-300 "
          >
            Show Success Toast
          </button>
          <button
            onClick={handleError}
            className="bg-red-500 p-3 rounded-xl ring-2 ring-zinc-300"
          >
            Show Error Toast
          </button>
          <button
            onClick={handleInfo}
            className="bg-blue-500 p-3 rounded-xl ring-2 ring-zinc-300"
          >
            Show Info Toast
          </button>
          <button
            onClick={handleWarning}
            className="bg-yellow-500 p-3 rounded-xl ring-2 ring-zinc-300"
          >
            Show Warning Toast
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
