import React, { useState } from "react";
import {
  AccountContent,
  AccountHeaeder,
  AccountInput,
  PersonalInfo,
  Column,
  Form,
  Password,
  Profile,
} from "../Account/Account.styles";
import Button from "../Button/Button";
const Account = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AccountContent>
      <div className="header-bg"></div>
      <AccountHeaeder>
        <svg
          width="168"
          height="168"
          viewBox="0 0 168 168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.00098"
            y="2"
            width="164"
            height="164"
            rx="82"
            fill="#EAEBE7"
          />
          <path
            d="M83.9876 97.2275C66.0167 97.2275 50.6667 100.061 50.6667 111.394C50.6667 122.732 65.9209 125.665 83.9876 125.665C101.958 125.665 117.308 122.836 117.308 111.498C117.308 100.161 102.058 97.2275 83.9876 97.2275Z"
            fill="#8D8D8D"
          />
          <path
            d="M83.9876 86.432C96.2293 86.432 106.038 76.6195 106.038 64.382C106.038 52.1445 96.2293 42.332 83.9876 42.332C71.7501 42.332 61.9376 52.1445 61.9376 64.382C61.9376 76.6195 71.7501 86.432 83.9876 86.432Z"
            fill="#8D8D8D"
          />
          <rect
            x="2.00098"
            y="2"
            width="164"
            height="164"
            rx="82"
            stroke="#EAEBE7"
            stroke-width="4"
          />
        </svg>
        <div className="UserName">
          Dinara Koldasbayeva
          <a href="#">dinara@gmail.com</a>
        </div>
      </AccountHeaeder>

      <PersonalInfo>
        <Column>
          <div className="acccountText">
            Personal info
            <p>Update your photo and personal details.</p>
          </div>
          <Form>
            <span>
              <label>
                First name
                <AccountInput placeholder="Dinara" type="text" />
              </label>
              <label>
                Last name
                <AccountInput placeholder="Koldasbayeva" type="text" />
              </label>
            </span>
            <label className="email">
              E-mail
              <AccountInput
                id="email"
                placeholder="dinara@gmail.com"
                type="text"
              />
            </label>
            <div className="accountBtn">
              <Button type="transparent" />
              <Button type="black" />
            </div>
          </Form>
        </Column>
      </PersonalInfo>

      <Password>
        <Column>
          <div className="acccountText">
            Password
            <p>Update your portfolio and bio.</p>
          </div>
          <Form>
            <label>
              Old password
              <AccountInput
                placeholder="Type your old password "
                type={showPassword ? "text" : "password"}
              />
              <i id="icon" onClick={() => setShowPassword(!showPassword)}>
                <svg
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6154 6.92345C9.91157 6.92345 9.23655 7.16658 8.73886 7.59936C8.24117 8.03214 7.96157 8.61911 7.96157 9.23114C7.96157 9.84318 8.24117 10.4302 8.73886 10.8629C9.23655 11.2957 9.91157 11.5388 10.6154 11.5388C11.3193 11.5388 11.9943 11.2957 12.492 10.8629C12.9897 10.4302 13.2693 9.84318 13.2693 9.23114C13.2693 8.61911 12.9897 8.03214 12.492 7.59936C11.9943 7.16658 11.3193 6.92345 10.6154 6.92345ZM10.6154 13.0773C9.44234 13.0773 8.31731 12.6721 7.48782 11.9508C6.65834 11.2295 6.19234 10.2512 6.19234 9.23114C6.19234 8.21108 6.65834 7.2328 7.48782 6.5115C8.31731 5.79021 9.44234 5.38499 10.6154 5.38499C11.7885 5.38499 12.9135 5.79021 13.743 6.5115C14.5725 7.2328 15.0385 8.21108 15.0385 9.23114C15.0385 10.2512 14.5725 11.2295 13.743 11.9508C12.9135 12.6721 11.7885 13.0773 10.6154 13.0773ZM10.6154 3.46191C6.19234 3.46191 2.41503 5.85422 0.884644 9.23114C2.41503 12.6081 6.19234 15.0004 10.6154 15.0004C15.0385 15.0004 18.8158 12.6081 20.3462 9.23114C18.8158 5.85422 15.0385 3.46191 10.6154 3.46191Z"
                    fill="#8D8D8D"
                  />
                  <path
                    d="M20 2.5L1.5 16"
                    stroke="#8D8D8D"
                    stroke-width="1.5"
                  />
                </svg>
              </i>
            </label>
            <label>
              Create password
              <AccountInput placeholder="Type new password" type="text" />
            </label>
            <label htmlFor="">
              Confirm password
              <AccountInput placeholder="Type new password" type="text" />
            </label>
            <div className="accountBtn">
              <Button type="transparent" />
              <Button type="black" />
            </div>
          </Form>
        </Column>
      </Password>

      <Profile>
        <Column>
          <div className="acccountText">
            profile
            <p>Update your portfolio and bio.</p>
          </div>
          <Form>
            <label>
              Organization name
              <AccountInput
                placeholder="TechCulture"
                type={showPassword ? "text" : "password"}
              />
              <i id="icon" onClick={() => setShowPassword(!showPassword)}>
                <svg
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6154 6.92345C9.91157 6.92345 9.23655 7.16658 8.73886 7.59936C8.24117 8.03214 7.96157 8.61911 7.96157 9.23114C7.96157 9.84318 8.24117 10.4302 8.73886 10.8629C9.23655 11.2957 9.91157 11.5388 10.6154 11.5388C11.3193 11.5388 11.9943 11.2957 12.492 10.8629C12.9897 10.4302 13.2693 9.84318 13.2693 9.23114C13.2693 8.61911 12.9897 8.03214 12.492 7.59936C11.9943 7.16658 11.3193 6.92345 10.6154 6.92345ZM10.6154 13.0773C9.44234 13.0773 8.31731 12.6721 7.48782 11.9508C6.65834 11.2295 6.19234 10.2512 6.19234 9.23114C6.19234 8.21108 6.65834 7.2328 7.48782 6.5115C8.31731 5.79021 9.44234 5.38499 10.6154 5.38499C11.7885 5.38499 12.9135 5.79021 13.743 6.5115C14.5725 7.2328 15.0385 8.21108 15.0385 9.23114C15.0385 10.2512 14.5725 11.2295 13.743 11.9508C12.9135 12.6721 11.7885 13.0773 10.6154 13.0773ZM10.6154 3.46191C6.19234 3.46191 2.41503 5.85422 0.884644 9.23114C2.41503 12.6081 6.19234 15.0004 10.6154 15.0004C15.0385 15.0004 18.8158 12.6081 20.3462 9.23114C18.8158 5.85422 15.0385 3.46191 10.6154 3.46191Z"
                    fill="#8D8D8D"
                  />
                  <path
                    d="M20 2.5L1.5 16"
                    stroke="#8D8D8D"
                    stroke-width="1.5"
                  />
                </svg>
              </i>
            </label>
            <label>
              Organization URL
              <AccountInput placeholder="www.techculture.tech" type="text" />
            </label>
            <label>
              Your position
              <select name="cars" id="cars">
                <option value="product">Product manager</option>
                <option value="product">Product manager</option>
                <option value="product">Product manager</option>
                <option value="product">Product manager</option>
              </select>
            </label>
            <label>
              Organization size
              <select name="cars" id="cars">
                <option value="employ">10-50 employees</option>
                <option value="employ">50-100 employees</option>
                <option value="employ">100-150 employees</option>
                <option value="employ">150-200 employees</option>
              </select>
            </label>
            <label>
              Organization category
              <select name="cars" id="cars">
                <option value="web3">Web3 Company</option>
                <option value="web3">Web3 Company</option>
                <option value="web3">Web3 Company</option>
                <option value="web3">Web3 Company</option>
              </select>
            </label>
            <div className="accountBtn">
              <Button type="transparent" />
              <Button type="black" />
            </div>
          </Form>
          <div></div>
          <div className="BtnDelete">
            <Button to="" type={"red"} />
          </div>
        </Column>
      </Profile>
    </AccountContent>
  );
};
export default Account;
