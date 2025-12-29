import React from "react";
import InfoLayout from "../layouts/InfoLayout";
import StrategiesSideBar from "../components/StrategiesSideBar";

const Home = () => {

  return (
    <div className="flex relative w-full min-h-full h-auto">
      <StrategiesSideBar />
      <InfoLayout />
    </div>
  );
};

export default Home;
