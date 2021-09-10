import React from "react";

// ** Components Layout
import CrowdStats from "../crowd-stats";

type crowdNameProps = {
  logo?: string;
  title: string;
  desc: string;
  statsFunding: {
    total: number;
    donorAmount: number;
    dayLeft: number;
  };
};

const index = (props: crowdNameProps) => {
  return (
    <div className="w-full h-auto p-10 border rounded-xl bg-white text-center">
      <h1 className="text-4xl font-bold text-black">{props.title}</h1>
      <p className="text-xl text-gray-500 my-4">{props.title}</p>
      <CrowdStats statsFunding={props.statsFunding} />
    </div>
  );
};

export default index;
