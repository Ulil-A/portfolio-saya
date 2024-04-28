import { Link } from "react-router-dom";
import ImgBrand from "../../assets/ImageLogo.png";
import { listFooterData } from "@/data";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="py-6 md:py-8 mx-auto max-w-6xl px-3">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <Link to={"/"} className="flex items-center">
              <img src={ImgBrand} alt="" className="h-8 me-3" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Ayung<span className="text-violet-600">Kez</span>
              </span>
            </Link>
            <p className="w-full md:w-[88%] md:text-sm text-muted-foreground mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              natus beatae sit. Natus ea doloribus, deleniti ullam aspernatur
              eos exercitationem quae dignissimos voluptates quisquam! Tempore
              amet facilis quis iusto cumque.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {listFooterData.map((item, index) => (
              <div key={index}>
                <h2 className="mb-4 md:mb-5 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {item.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {item.lists?.map((item, index) => (
                    <li className="mb-2" key={index}>
                      <Link key={index} to={item.link} className="text-md">
                        {item.sub_title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex items-center justify-center py-3">
        <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link to={"/"}>
            Ayoung<span className="text-violet-500">Kez</span>
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
