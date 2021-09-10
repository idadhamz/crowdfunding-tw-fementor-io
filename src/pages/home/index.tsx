import React from "react";

// ** Components Layout
import CrowdName from "../../components/layout/crowd-name";

const index = () => {
  const crowdFundingData = {
    logo: "",
    title: "Mastercraft Bamboo Monitor Riser",
    desc: "A beautiful & handcrafted monitor stand to reduce neck and eye strain",
    statsFunding: {
      total: 89914,
      donorAmount: 102,
      dayLeft: 30,
    },
  };

  return (
    <div className="container md:mx-auto md:max-w-4xl md:mt-60">
      <CrowdName
        logo={crowdFundingData.logo}
        title={crowdFundingData.title}
        desc={crowdFundingData.desc}
        statsFunding={crowdFundingData.statsFunding}
      />
    </div>
  );
};

export default index;
