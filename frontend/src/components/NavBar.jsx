import pp from "../../public/1.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import notif from "../assets/notification.png";
const NavBar = () => {
  return (
    <div>
      <div
        id="nav"
        className=" hidden md:flex md:items-center md:justify-between md:border-b-2 md:border-primary"
      >
        <div id="logo" className="ml-6">
          <img src={logo} alt="" />
        </div>
        <div id="input+btn" className="  flex gap-3 ">
          <input type="text" className=" flex w-96 bg-primary rounded-xl" />
          <button className="flex">
            <img src={search} alt="" className="" />
          </button>
        </div>
        <div id="notification" className=" mr-5 flex">
          <img src={notif} alt="" />
        </div>
      </div>
      <div
        id="nav tel"
        className="flex items-center justify-between border-b-2 border-primary p-3 md:hidden"
      >
        <div id="pp" className="flex flex-initial">
          <img src={pp} alt="" className="w-16" />
        </div>
        <div id="logo" className="ml-6">
          <img src={logo} alt="" className="w-36" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
