import { Link } from "react-router-dom"

import pp from "../../public/1.png"
import logo from "../assets/logo.png"
import search from "../assets/search.png"
import notif from "../assets/notification.png"

const NavBar = () => {
  return (
    <div className="md:flex md:justify-center">
      <div
        id="nav"
        className="hidden md:w-full md:max-w-5xl md:flex md:items-center md:justify-between md:border-b-2 md:border-primary"
      >
        <Link to="/">
          <img src={logo} alt="TimeHub" />
        </Link>
        <div className="flex gap-10 mr-10">
          <Link to="/search">
            <img src={search} alt="Loupe" />
          </Link>
          <img src={notif} alt="Cloche" />
        </div>
      </div>
      <div
        id="nav tel"
        className="flex items-center justify-between border-b-2 border-primary p-3 md:hidden"
      >
        <div id="pp" className="flex flex-initial">
          <img
            src={pp}
            alt=""
            className="w-16 border-2 border-primary rounded-full"
          />
        </div>
        <Link to="/">
          <div id="logo" className="ml-6">
            <img src={logo} alt="" className="w-36" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
