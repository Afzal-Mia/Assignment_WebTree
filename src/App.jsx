import React, { useEffect, useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.results[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, []);

  return (
    <div className="bg-gray-900 text-white h-screen flex justify-center items-center">
      {userData ? (
        <div className="relative">
          {/* Animated Plant */}
          <div className="absolute -top-15 left-1/2 -translate-x-1/2">
            <svg
              width="80"
              height="80"
              viewBox="0 0 64 64"
              className="text-green-600"
            >
              {/* Plant Stem */}
              <path
                fill="currentColor"
                d="M32 12L32 50"
                stroke="currentColor"
                strokeWidth="2"
              />
              {/* Animated Leaf */}
              <path
                fill="currentColor"
                d="M12 20L32 10L52 20L32 30Z"
                className="animate-float origin-bottom"
                style={{ transformBox: 'fill-box' }}
              />
            </svg>
          </div>
  
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex gap-12 items-center w-96 border border-gray-700">
            <img
              src={userData.picture.large}
              className="w-24 h-24 rounded-full border-4 border-green-600 shadow-md hover:scale-105 transition-transform hover:cursor-pointer duration-300"
              alt="User"
            />
            <div className="text-center">
              <h2 className="text-xl font-semibold">{`${userData.name.first} ${userData.name.last}`}</h2>
              <p className="text-gray-400 capitalize">{userData.gender}</p>
              <p className="text-sm text-gray-300 mt-1">{userData.phone}</p>
            </div>
          </div>
  
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0) rotate(-5deg); }
              50% { transform: translateY(-10px) rotate(5deg); }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
          `}</style>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xl font-semibold mt-2 animate-pulse">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default App