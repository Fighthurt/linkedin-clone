import React from "react";
import myIcon from '../assets/svg-export/myicon.svg';
import { IoMdSearch } from 'react-icons/io';
import { IoHomeSharp } from 'react-icons/io5';
import { BsFillPeopleFill } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidBell } from "react-icons/bi";
import { TiArrowSortedDown } from "react-icons/ti";






export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <div className="navbarContentColOne">
          <div className="logoContainer">
            <img src={myIcon} alt="Description" />
            <myIcon />
          </div>
          <div className="appSearchNavbar">
            <div className="searchIcon-navbar">
              <IoMdSearch />
              <input type="text" placeholder="Search" />
            </div>
            <div></div>
          </div>
        </div>
        <div className="navbarContentColTwo">
          <ul>
            <li>
              <div className="RouteIconTab">
                <IoHomeSharp />
              </div>
              <div className="RouteIconTabText">Home</div>
            </li>

            <li>
              <div className="RouteIconTab">
                <BsFillPeopleFill />
              </div>
              <div className="RouteIconTabText">My Networks</div>
            </li>

            <li>
              <div className="RouteIconTab">
                <BsBriefcaseFill />
              </div>
              <div className="RouteIconTabText">Jobs</div>
            </li>

            <li>
              <div className="RouteIconTab">
                <AiFillMessage />
              </div>
              <div className="RouteIconTabText">Messaging</div>
            </li>

            <li>
              <div className="RouteIconTab">
                <BiSolidBell />
              </div>
              <div className="RouteIconTabText">Notifications</div>
            </li>

            <li>
              <div className="RouteIconTab">
                <div className="userIconCircle"></div>
              </div>
              <div className="RouteIconTabText">
                Me <TiArrowSortedDown />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
