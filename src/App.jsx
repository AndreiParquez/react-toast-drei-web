import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useToast } from "react-toast-drei";
import { motion } from "framer-motion";

function App() {
  const toast = useToast();
  const [downloads, setDownloads] = useState(null);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (downloads && typeof downloads === "number") {
      let start = 0;
      const end = downloads;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayCount(end);
          clearInterval(timer);
        } else {
          setDisplayCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [downloads]);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await fetch(
          "https://api.npmjs.org/downloads/point/last-month/react-toast-drei"
        );
        const data = await response.json();
        setDownloads(data.downloads);
      } catch (error) {
        console.error("Failed to fetch downloads:", error);
        setDownloads("N/A");
      } finally {
        setLoading(false);
      }
    };

    fetchDownloads();
  }, []);

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
      <div className=" min-h-screen flex flex-col items-center justify-center text-white">
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
            <div className="relative">
              Drei.
              <span className="font-normal absolute text-xs right-0  md:bottom-0 -bottom-2  ">
                Made By{" "}
                <a
                  href="https://andreidev.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-mono hover:text-blue-800 underline"
                >
                  Andrei
                </a>
                ❤️
              </span>
            </div>
          </div>
        </h1>
        <div className=" backdrop-blur-sm rounded-lg p-4 mt-4 max-w-md mx-4">
          <div className="flex flex-col items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-zinc-700 font-medium">Downloads</span>
            </div>
            <div className="">
              <div className="flex items-center justify-center ">
                {loading ? (
                  <div className="animate-pulse bg-zinc-300 h-6 w-16 rounded"></div>
                ) : (
                  <span className="text-2xl font-bold text-blue-600">
                    {typeof downloads === "number"
                      ? displayCount.toLocaleString()
                      : downloads}
                  </span>
                )}
                <svg
                  className="w-5 h-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>

              <div className="text-xs tracking-widest text-zinc-500"> last month</div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 mt-6 max-w-md mx-4">
          <h2 className="text-lg font-semibold text-zinc-800 mb-3">
            How to Install
          </h2>
          <div className="space-y-2">
            <div className="bg-zinc-900 text-green-400 p-3 rounded font-mono text-sm flex justify-between items-center">
              <span>> npm install react-toast-drei</span>
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
              </a>
              .
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
