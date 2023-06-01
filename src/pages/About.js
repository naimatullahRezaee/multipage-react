import { Routes, Route } from "react-router-dom";
import OpenCode from "./OpenCode";
import React from "react";

export default function About() {
  return (
    <div>
      <h2>This is a About Page</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae animi
        quos a in natus! Libero, at eos. Quisquam ex similique dolor harum nulla
        asperiores, exercitationem consequatur cupiditate obcaecati aliquam
        sunt?
      </p>
      <Routes>
        <Route path="opencode" element={<OpenCode />} />
      </Routes>
    </div>
  );
}
