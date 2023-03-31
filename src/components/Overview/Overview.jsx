import Account from "../Account/Account";
import { Tab } from "../Overview/Overview.styles";
import { Outlet, Link } from "react-router-dom";

const Overview = () => {
  return (
    <>
      <Tab>
        <div className="TabHeader">
          <p>Overview</p>
          <ul>
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#F2F3ED"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <Link id="link" to="/">
                Account
              </Link>
            </li>
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 10H23M3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4Z"
                  stroke="#F2F3ED"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <Link id="link" to="/blogs">
                Billing
              </Link>
            </li>
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5002 5.5615C17.5002 7.252 16.1292 8.623 14.4387 8.623C12.7482 8.623 11.3779 7.252 11.3779 5.5615C11.3779 3.871 12.7482 2.5 14.4387 2.5C16.1292 2.5 17.5002 3.871 17.5002 5.5615Z"
                  fill="#F2F3ED"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.62225 5.5615C8.62225 7.252 7.252 8.623 5.56075 8.623C3.871 8.623 2.5 7.252 2.5 5.5615C2.5 3.871 3.871 2.5 5.56075 2.5C7.252 2.5 8.62225 3.871 8.62225 5.5615Z"
                  fill="#F2F3ED"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5002 14.3847C17.5002 16.0752 16.1292 17.4455 14.4387 17.4455C12.7482 17.4455 11.3779 16.0752 11.3779 14.3847C11.3779 12.6942 12.7482 11.3232 14.4387 11.3232C16.1292 11.3232 17.5002 12.6942 17.5002 14.3847Z"
                  fill="#F2F3ED"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.62225 14.3847C8.62225 16.0752 7.252 17.4455 5.56075 17.4455C3.871 17.4455 2.5 16.0752 2.5 14.3847C2.5 12.6942 3.871 11.3232 5.56075 11.3232C7.252 11.3232 8.62225 12.6942 8.62225 14.3847Z"
                  fill="#F2F3ED"
                />
              </svg>

              <Link id="link" to="/contact">
                Endpoints
              </Link>
            </li>
          </ul>
        </div>
        <div className="TabFooter">
          <p>
            Dinara K.
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 25.5H12.1667C11.7246 25.5 11.3007 25.3244 10.9882 25.0118C10.6756 24.6993 10.5 24.2754 10.5 23.8333V12.1667C10.5 11.7246 10.6756 11.3007 10.9882 10.9882C11.3007 10.6756 11.7246 10.5 12.1667 10.5H15.5M21.3333 22.1667L25.5 18M25.5 18L21.3333 13.8333M25.5 18H15.5"
                stroke="#F2F3ED"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
          <p>dinara@gmail.com</p>
        </div>
      </Tab>

      <Outlet />
    </>
  );
};
export default Overview;
