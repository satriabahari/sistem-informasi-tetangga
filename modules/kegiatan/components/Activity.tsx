import React from "react";
import LatestActivity from "./LatestActivity";
import Pagination from "./Pagination";
import ActivityList from "./ActivityList";

const Activity = () => {
  return (
    <div className="mt-28 space-y-28">
      <LatestActivity />
      <ActivityList />
      <Pagination />
    </div>
  );
};

export default Activity;
