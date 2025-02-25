import React from "react";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

const Cursor = () => (
  <CustomCursor
    targets={[".link"]}
    customClass="custom-cursor"
    dimensions={30}
    fill="#000"
    smoothness={{
      movement: 0.2,
      scale: 0.1,
      opacity: 0.2,
    }}
    targetOpacity={0.5}
  />
);

export default Cursor;
