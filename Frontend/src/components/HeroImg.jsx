import React from "react";
import { IoBagAdd } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import "../styles/dashboard.css";
import '../App.css';

const HeroImg = () => {
  return (
    <div id="hero_container">
      <h1>Connect Talent With</h1>
      <h1>Opportunity</h1>
      <p>
        The fasted way to find the skilled freelancers or discover your next
        project join thousands of professionals building their carrers on
        Quickhire
      </p>

      <div className="hero_container_job_btn">
        <button>
          <IoBagAdd />
          &nbsp; Post a Job
        </button>
        <button>
          <FaSearch /> &nbsp; Find Jobs
        </button>
      </div>

      <div className="hero_container_content">
        <div>
          <p>50K+</p>
          <p>Active Jobs</p>
        </div>

        <div>
          <p>25k+</p>
          <p>Freelancers</p>
        </div>

        <div>
          <p>98%</p>
          <p>Success Rates</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
