"use client";
import React, { useState } from "react";
import data from "../rentagreement/dummyData";
import AgentList from "./AgentList";
import styles from "./agent.module.css";
import SearchCategories from "../rentagreement/SearchCategories";
import SideContentContainer from "../property/sidecontentcontainer/SideContentContainer";

const Agent = (props) => {
  // let [limit, setLimit] = useState(5);
  const filteredData = data["Experts"];
  return (
    <div className={styles.agentLayout}>
      <div>
        <h2 className={styles.Explore}>Explore our Rent Agreement Experts</h2>
        <div>
          <AgentList featured={true} limit={-1} />
        </div>
      </div>

      <div className={styles.sidebar}>
        <SideContentContainer Addbox={true} />

        <div className="max-[768px]:w-full max-[768px]:flex max-[768px]:justify-center">  
        <div className={`${styles.MostSearched} container_box_shadow`}>
          {data["MostSearched"].map((Cate, index) => (
            <SearchCategories
              key={index}
              city={Cate.Location}
              category={Cate.Categories}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
