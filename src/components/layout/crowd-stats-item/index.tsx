import React from "react";

type crowdStatsItemProps = {
  value: string | number;
  desc: string;
};

const index = (props: crowdStatsItemProps) => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-bold">{props.value}</h1>
      <p className="text-lg color-gray-500">{props.desc}</p>
    </div>
  );
};

export default index;
