import React from "react";

// ** Components Layout
import CrowdStatsItem from "../crowd-stats-item";

type crowdStatsProps = {
  statsFunding: {
    total: number;
    donorAmount: number;
    dayLeft: number;
  };
};

const index = (props: crowdStatsProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center space-y-5 my-10 sm:space-x-10">
      <CrowdStatsItem
        value={`$ ${props.statsFunding.total}`}
        desc="of $100000 target"
      />
      <CrowdStatsItem
        value={`${props.statsFunding.donorAmount}`}
        desc="total donor"
      />
      <CrowdStatsItem value={`${props.statsFunding.dayLeft}`} desc="day left" />
    </div>
  );
};

export default index;
