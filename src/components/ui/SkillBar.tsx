"use client"

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SkillBar({ value }: { value: number }) {
  return (
    <>
      <CircularProgressbarWithChildren
        value={value}
        strokeWidth={14}
        styles={buildStyles({
          pathColor: "#000C24",
          textColor: "#928A97",
        })}
      >
        <span className="text-xs">{value}%</span>
      </CircularProgressbarWithChildren>
    </>
  );
}
