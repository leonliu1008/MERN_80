import React from "react";

const Students = (props) => {
  return (
    <div className="Students">
      <h3>女生朋友名稱:{props.name}</h3>
      <h3>女生朋友年齡:{props.age}</h3>
    </div>
  );
};

export default Students;
