import { useState, useEffect } from "react";
import Image from "next/image";
import logo from '/public/images/logofj.png'
import styles from "../PageLoader/PageLoader.module.css";

const PageLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5500);/* 5500 */

    return () => clearTimeout(timer);
  }, []);

  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    const timer = setInterval(() => {
      switch (loadingText) {
        case "Loading...":
          setLoadingText("Fetching data...");
          break;
        case "Fetching data...":
          setLoadingText("Access granted...");
          break;
        case "Access granted...":
          setLoadingText("Running tests...");
          break;
        case "Running tests...":
          setLoadingText("Done!");
          clearInterval(timer);
          break;
        default:
          break;
      }
    }, 1200);
    return () => clearInterval(timer);
  }, [loadingText]);

  return (
    <>
    
      {showLoader && (
        
        <div
          className={`${styles.loaderContainer} loader-cont fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-black z-50`}
        >
  
                



          <div className={`${styles.loaderBox}load-box w-80 h-80 relative`}>
            
            <div
              className={`${styles.shapeContainer}  absolute inset-0 flex justify-center items-center`}
            >
              
              <div
                className={`${styles.logoBox} text-center text-white font-bold text-6xl uppercase`}
              >
     
        
              </div>
              
              
              <div
                className={`${styles.loaderShape} ${styles.animateSpinSlow}}`}
              >
                
                <div className="">
                <Image
                width={0}
                height={0}
                  className={`${styles.logo} absolute`}
                  src={logo}
                  alt="My logo"
                />
                </div>
              </div>
              
            </div>
          </div>

          {/* top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  */}
          <div className="terminal-container relative bg-black w-100 h-100 rounded-md overflow-hidden">
            <div className="cli-header flex items-center h-8 bg-gray-800 px-3">
              <div className="cli-dot bg-red-500 rounded-full w-3 h-3 mr-2"></div>
              <div className="cli-dot bg-yellow-500 rounded-full w-3 h-3 mr-2"></div>
              <div className="cli-dot bg-green-500 rounded-full w-3 h-3 mr-2"></div>
              <div className="cli-title text-white font-bold">Going live</div>
            </div>
            <div
              className="terminal relative bottom-0 left-0 w-100 h-100 px-4 py-2 bg-green-900 text-green-500 font-mono text-sm"
              style={{ lineHeight: "1.5rem" }}
            >
              <p>{loadingText}</p>
            </div>
          </div>
 

        </div>
      )}
    </>
  );
};

export default PageLoader;
