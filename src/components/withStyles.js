import React from 'react';

function withStyles(Component) {
  return props => {
    const { className, ...rest } = props;
    const defaultStyle = "bg-blue-500 text-white py-2 px-4 rounded-md ml-2";
    const classNames = className ? `${defaultStyle} ${props.className}` : defaultStyle;
    
    return <Component className={classNames} {...rest} />;
  }
}

export default withStyles;
