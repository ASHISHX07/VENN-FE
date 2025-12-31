import React from "react";
import InfoLayout from "../layouts/InfoLayout";
import StrategiesSideBar from "../components/StrategiesSideBar";

const Home = () => {

  return (
    <div className="flex max-sm:block relative w-full min-h-screen h-auto">
      <div className="sm:w-full md:w-[30%] h-full max-sm:relative md:fixed">
        <StrategiesSideBar />
      </div>
      <div className="sm:w-full md:w-[30%] h-full max-sm:hidden md:relative"></div>
      <div className="sm:w-full md:w-[70%] h-full flex">
        <InfoLayout />
      </div>
    </div>
  );
};

export default Home;
