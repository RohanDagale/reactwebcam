import React, { useState } from "react";

const States = () => {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>my name is {name}</div>
    </>
  );
};

export default States;
