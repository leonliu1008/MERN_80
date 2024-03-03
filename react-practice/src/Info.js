import React from "react";

const Info = (props) => {
  console.log(props);
  return (
    <div>
      <h1>這是info組件</h1>
      <h2>來自info,朋友props的name:{props.name}</h2>
      <h2>來自info,朋友props的age:{props.age}</h2>
    </div>
  );
};

export default Info;
