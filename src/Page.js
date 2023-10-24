import React from "react";
import NavBar from "./Navbar";
import Selection from "./selection";
import Database from "./Database";
function Page(params) {
  return (
    <div>
      <NavBar />
      {Database.map((e) => (
        <Selection key={e.id} {...e} />
      ))}
    </div>
  );
}

export default Page;
