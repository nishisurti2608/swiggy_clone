import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch, BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline, IoPersonOutline } from "react-icons/io5";
import { PiHandbagSimpleBold } from "react-icons/pi";

const Header = () => {
  return (
    <div>
      <nav className="flex flex-wrap">
        <div className="main-nav flex justify-between px-10 py-4 items-center bg-white shadow-md h-20 w-screen">
          <div className="logo flex items-center ml-80 hover:cursor-pointer ">
            <svg
              viewBox="0 0 16 25"
              height="49"
              width="34"
              fill="#fc8019"
              className="hover:scale-125 transition duration-600"
            >
              <path
                d="M15.5397581,11.1409928 C15.6509608,10.509712 15.5235868,10.0243137 15.1951696,9.77089093 C14.7011461,9.38969453 13.9591625,9.18240372 12.1918981,9.18240372 C10.8843181,9.18240372 9.48050894,9.18382005 8.88067307,9.18351656 C8.824972,9.17259055 8.62352934,9.10693329 8.6159428,8.86342483 L8.60775734,4.99753828 C8.60755774,4.75352397 8.80231214,4.55503473 9.04308494,4.55452889 C9.28425707,4.55412423 9.47990987,4.75190531 9.4801096,4.99571727 C9.4801096,4.99571727 9.48609894,7.09432117 9.48669787,7.84012275 C9.48669787,7.91215351 9.52822427,8.08029271 9.69013694,8.12409793 C10.745764,8.40908477 16.0819961,8.20068119 15.9990433,7.22017265 C15.5462467,3.15296419 12.1495732,0 8.02559027,0 C6.72689454,0 5.497376,0.313010053 4.40860776,0.868112227 C1.80303074,2.22496121 -0.0474859557,4.9636474 0.000928137643,8.12703176 C0.0352672176,10.3690901 1.49467783,14.3542524 2.38809268,14.9457747 C2.7998621,15.2186215 3.34210002,15.1176569 5.7669976,15.1176569 C6.86664654,15.1176569 7.89062974,15.1212989 8.39383694,15.1236259 C8.44614414,15.1335401 8.72045734,15.1971741 8.72045734,15.4525191 L8.726846,18.391212 C8.72744507,18.6353275 8.53249094,18.8337155 8.2913188,18.8338167 C8.050546,18.8342213 7.85499294,18.6366427 7.85459374,18.3927295 C7.85459374,18.3927295 7.8760556,17.2135293 7.8760556,16.7737573 C7.8760556,16.6719836 7.88334267,16.4971673 7.59006307,16.3649424 C6.6241768,15.929824 3.48764179,16.1924529 3.31165404,16.6725905 C3.24427359,16.8573211 3.5949514,17.5713563 4.13479358,18.4869157 C5.93330254,21.3601537 7.6990696,23.6004924 7.98456307,23.9589263 C8.00223174,23.9744048 8.0192016,23.9886693 8.03437467,24 C8.26985694,23.7099548 14.5488164,16.7550415 15.5397581,11.1409928 Z"
                id="Swiggy_Filled"
              ></path>
            </svg>
            <div className="location group flex items-start pl-10">
              <span className="location-span text-sm font-bold  text-gray-800 border-b-2 group-hover:border-orange-500 group-hover:text-orange-500 border-gray-800">
                Other
              </span>
              <span className="text-sm pl-3 text-gray-500 group-hover:text-gray-400">
                Ahmedabad, Gujarat, India
              </span>

              <IoIosArrowDown className="mt-1 text-sm  mx-2 text-orange-500 group-hover:cursor-pointer flex" />
            </div>
          </div>

          <div className="menu flex items-center mr-40">
            <ul className="flex items-center space-x-16">
              <li>
                <a href="/#" className="group">
                  <BiSearch className="inline-flex text-lg mr-2 group-hover:text-orange-500" />
                  <span className="text-md font-medium  group-hover:text-orange-500 text-gray-600">
                    Search
                  </span>
                </a>
              </li>
              <li>
                <a href="/#" className="group">
                  <BiSolidOffer className="inline-flex text-lg mr-2 group-hover:text-orange-500" />
                  <span className="text-md font-medium  group-hover:text-orange-500 text-gray-600">
                    Offers
                  </span>
                  <sup className="text-[10px] font-bold inline-flex text-orange-500">
                    NEW
                  </sup>
                </a>
              </li>
              <li>
                <a href="/#" className="group">
                  <IoHelpBuoyOutline className="inline-flex text-lg mr-2 group-hover:text-orange-500" />
                  <span className="text-md font-medium  group-hover:text-orange-500 text-gray-600">
                    Help
                  </span>
                </a>
              </li>
              <li>
                <a href="/#" className="group">
                  <IoPersonOutline className="inline-flex text-lg mr-2 group-hover:text-orange-500" />
                  <span className="text-md font-medium  group-hover:text-orange-500 text-gray-600">
                    Sign In
                  </span>
                </a>
              </li>
              <li>
                <a href="/#" className="group">
                  <PiHandbagSimpleBold className="inline-flex text-lg mr-2 group-hover:text-orange-500" />
                  <span className="text-md font-medium  group-hover:text-orange-500 text-gray-600">
                    Cart
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
