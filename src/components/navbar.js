import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div>
<nav class="bg-white border border-gray-300 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
    <a class="flex items-center space-x-3 rtl:space-x-reverse px-3">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" class="h-11 w-11 m-2" />
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex space-x-4">
        <li>
          <Link to="/register"><span className="text-sm">Register</span></Link>
        </li>
        <li>
          <Link to="/login"><span className="text-sm">Login</span></Link>
        </li>
        <li>
          <Link to="/logout"><span className="text-sm">Logout</span></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}