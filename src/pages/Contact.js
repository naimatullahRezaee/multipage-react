import { useLocation } from "react-router-dom";

import React from "react";

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  return (
    <div>
      {name && <h1>Hello {name} contact with us</h1>}
      <h2>This is a Contact Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
        perferendis suscipit officiis repellendus animi doloremque voluptates
        libero at deleniti? Modi necessitatibus soluta recusandae molestiae
        excepturi quibusdam odit nihil. Officiis!
      </p>
    </div>
  );
}
