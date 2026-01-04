import React from "react";
import InfoLayout from "../layouts/InfoLayout";
import StrategiesSideBar from "../components/StrategiesSideBar";
import Analysis from "../components/Analysis";

const Home = () => {

  return (
    <div className="flex max-sm:block relative w-full min-h-screen h-auto">
      <div className="sm:w-full md:w-[30%] h-full max-sm:relative md:fixed">
        <StrategiesSideBar />
      </div>
      <div className="sm:w-full md:w-[30%] h-full max-sm:hidden"></div>
      <div className="relative sm:w-full md:w-[70%] h-full flex flex-col">
        <InfoLayout />
        <Analysis />
      </div>
    </div>
  );
};

export default Home;
