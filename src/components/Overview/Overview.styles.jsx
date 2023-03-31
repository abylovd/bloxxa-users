import React from "react";
import styled from "styled-components";

export const Tab = styled.div`
  background: #2c2c2d;
  height: 95vh;
  position: fixed;
  left: 0;
  width: 147px;
  padding: 25px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    cursor: pointer;
  }
  li:hover {
    background: #464646;
    border-radius: 6px;
    padding: 8px 12px;
    cursor: pointer;
  }
  #link {
    font-family: "Random Grotesque Standard Semibold";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    color: #f2f3ed;

    padding: 8px 12px;
    svg {
      margin-right: 12px;
    }
  }

  p {
    text-align: left;
    margin: 0;
    font-family: "Random Grotesque Standard Semibold";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #f2f3ed;
    display: flex;
    align-items: center;
  }
`;
