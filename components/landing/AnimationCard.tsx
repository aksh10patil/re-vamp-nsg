"use client";


import {  FaUsers, FaClock, FaEnvelope, FaDatabase, FaStar, } from "react-icons/fa";

import WorkflowCard from "./WorkflowCard";
import AutomatedTasksCard from "./AutomatedTasksCard";

export default function AnimationCard() {
  const tasks = [
    { icon: <FaEnvelope />, text: "Social media post" },
    { icon: <FaUsers />, text: "Employee Tracking" },
    { icon: <FaClock />, text: "Payment reminder" },
  ];

  const orbitIcons = [
    <FaEnvelope size={26} key="1" />,
    <FaUsers size={26} key="2" />,
    <FaDatabase size={26} key="3" />,
    <FaStar size={26} key="4" />,
  ];

  return (

        <div>
<section className="w-full px-6">
  <div
    className="
      max-w-7xl 
      mx-auto 
      grid 
      grid-cols-1 
      lg:grid-cols-2 
      gap-10 
      items-stretch
    "
  >
    {/* LEFT CARD */}
      <AutomatedTasksCard />
            <WorkflowCard />
        </div>
      </section>
    
       </div>
  );
}
