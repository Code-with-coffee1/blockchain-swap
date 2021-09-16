import React from "react";
import FarmTable from "../components/Farms/FarmTable";
import PageHeader from "../components/UI/Common/PageHeader";

const Farms = () => {
  console.log("Farms");
  return (
    <div>
      <PageHeader>
        <h1>Farms</h1>
        <h3>Stake LP tokens to earn.</h3>
        <h5>
          <a href="#">Community Auctions</a>
        </h5>
      </PageHeader>
      <FarmTable />
    </div>
  );
};

export default Farms;
