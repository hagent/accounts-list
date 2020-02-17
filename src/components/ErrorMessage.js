import React from "react";
import styled from "styled-components";

const ErrorPanel = styled.div`
  color: #bb2d2d;
`;
export default ({ children }) => {
  if (!children) {
    return null;
  }
  const message =
    typeof children.toString === "function" ? children.toString() : children;

  return <ErrorPanel>{message}</ErrorPanel>;
};
