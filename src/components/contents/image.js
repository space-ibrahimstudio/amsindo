import React from "react";

const Image = ({ className, style, width, height, alt, src, onClick }) => {
  const defaultcss = { objectFit: "cover", objectPosition: "center", cursor: onClick ? "pointer" : "unset" };
  const imgcss = { position: "relative", width, height };
  return <img className={className} style={style ? { ...style, ...defaultcss } : { ...imgcss, ...defaultcss }} loading="lazy" alt={alt} src={src} onClick={onClick} />;
};

export default Image;
