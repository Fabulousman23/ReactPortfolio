import React, { forwardRef } from "react";

const MyButton = forwardRef((props, ref) => (
  <button ref={ref} {...props}>
    {props.children}
  </button>
));

export default MyButton;
