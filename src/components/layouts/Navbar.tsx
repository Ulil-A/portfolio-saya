import { BrandText, SubBrandText, listNavbar } from "@/data";
import { Link, useLocation } from "react-router-dom";
import ImgBrand from "../../assets/ImageLogo.png";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const location = useLocation();
  return (
    <header className="w-full py-2 bg-white border ">
      <div className="container px-2 py-1 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center text-md gap-2 font-bold">
            <img src={ImgBrand} alt="" className="h-9" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {BrandText}
              <span className="text-violet-600">{SubBrandText}</span>
            </span>
          </Link>
          <Button
            type="button"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            size="icon"
            className="md:hidden"
          >
            <MenuIcon />
          </Button>
        </div>
        <nav
          className={`${isOpenMenu ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col bg-gray-50 mt-2 rounded-md space-y-2 p-5 md:p-1 md:space-y-0 md:flex-row md:space-x-2">
            {listNavbar.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`block py-2 px-3 rounded-md ${item.path === location.pathname ? "bg-gray-200 text-violet-600" : "bg-gray-100 md:bg-transparent"}`}
                >
                  {item.nama_list}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
