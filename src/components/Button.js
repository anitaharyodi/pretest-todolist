import React from "react";
import withStyles from "./withStyles";

function Button({ className, text, ...props }) {
  return <button className={className} {...props}>{text}</button>;
}

export default withStyles(Button);
