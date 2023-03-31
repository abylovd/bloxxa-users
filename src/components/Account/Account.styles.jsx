import React from "react";
import styled from "styled-components";
import img from "../../img/account-bg.svg";
import mail from "../../img/mail.svg";

export const AccountContent = styled.div`
  margin-left: 179px;
  margin-bottom: 48px;
  h1 {
    margin: 0;
  }
  .header-bg {
    width: 100%;
    height: 240px;
    background: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .BtnDelete {
    margin-top: 48px;
    display: flex;
    justify-content: end;
  }
`;
export const AccountHeaeder = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    margin-left: 32px;
    position: absolute;
  }
  .UserName {
    display: flex;
    flex-direction: column;
    font-family: "Helvetica";
    text-align: center;
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    text-transform: uppercase;
    color: #0e0e0e;
    margin-left: 220px;
    margin-top: 25px;
    a {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #8d8d8d;
      text-decoration: none;
      text-transform: none;
      text-align: left;
    }
  }
`;

export const AccountInput = styled.input`
  background: #eaebe7;
  border: 1px solid rgba(141, 141, 141, 0.3);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  outline: none;
  height: 42px;
  padding: 0 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0e0e0e;
  ::-ms-reveal {
    display: none;
  }
`;

export const PersonalInfo = styled.div`
  margin-top: 78px;
  padding: 0 32px;
`;
export const Column = styled.div`
  display: grid;
  grid-template-columns: 340px 660px;
  column-gap: 32px;
  .accountBtn {
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-top: 40px;
  }
  .acccountText {
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #0e0e0e;
    text-align: left;
    p {
      font-family: "Random Grotesque Standard Medium";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #8d8d8d;
    }
  }
`;

export const Form = styled.div`
  padding: 0 24px 24px 24px;
  background: #eaebe7;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-family: "Random Grotesque Standard Semibold";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #0e0e0e;
    svg {
      position: absolute;
      top: 10px;
    }
    #email {
      background-image: url(${mail});
      background-repeat: no-repeat;
      background-position: 14px 12px;
      padding: 0 40px;
    }
  }
  span {
    display: grid;
    grid-template-columns: 294px 294px;
    column-gap: 24px;
  }
  label {
    margin-top: 24px;
    position: relative;
  }
  #cars {
    background: #eaebe7;
    border: 1px solid rgba(141, 141, 141, 0.3);
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    outline: none;
    height: 44px;
    padding: 0 14px;
    font-family: "Random Grotesque Standard Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #0e0e0e;
  }
  #icon {
    position: absolute;
    right: 40px;
    top: 20px;
  }
`;

export const Password = styled.div`
  padding: 0 32px;
  margin-top: 41px;
`;

export const Profile = styled.div`
  padding: 0 32px;
  margin-top: 20px;
  margin-bottom: 49px;
`;
