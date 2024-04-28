import { Link } from "react-router-dom";
import ImgBrand from "../../assets/ImageLogo.png";
import ImgPesawat from "../../assets/pesawat.png";
import ImgAwan from "../../assets/awan_1.png";
import { Button } from "../ui/button";
import { GitCommitVertical, MessageCircleReply } from "lucide-react";
import { linkgithubku, linkwaku, listCircular } from "@/data";
import { Avatar, AvatarImage } from "../ui/avatar";

function Home() {
  return (
    <main className="w-full mx-auto">
      <section className="h-svh bg-gray-50 px-4 md:px-7 py-5 md:py-16 md:max-h-[650px] max-w-6xl mx-auto">
        <div className="max-w-5xl mx-auto md:size-full md:flex md:items-center md:gap-5 relative">
          <div className="bg-violet-600 md:bg-transparent md:border-0 rounded-md rounded-tr-[50%] border-t-[35px] border-r-[35px] border-t-violet-700 border-r-violet-700">
            <img src={ImgBrand} alt="" className="md:w-[590px] lg:w-[650px]" />
          </div>
          <div className="absolute size-[4.5rem] lg:size-[6rem] right-0 top-0 bg-violet-600 rounded-md rounded-bl-[100%]">
            <img src={ImgPesawat} alt="" />
          </div>
          <div className="absolute size-[5rem] lg:size-[7.8rem] -bottom-5 right-0 bg-violet-600 rounded-md rounded-tl-[100%]">
            <img src={ImgAwan} alt="lg:absolute lg:mt-2" />
          </div>
          <div className="mt-4">
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Software & Web{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-700 bg-clip-text text-transparent">
                Devalopment
              </span>
            </h1>
            <p className="leading-7 md:leading-6 [&:not(:first-child)]:mt-3 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              distinctio quidem amet fugiat eum cum voluptas repellendus
              perspiciatis, maiores provident temporibus ut. Asperiores,
              excepturi architecto tempore consectetur dicta saepe dolor.
            </p>
            <div className="mt-4 flex gap-3 ml-1">
              <Link to={linkgithubku}>
                <Button className="flex items-center gap-1">
                  <GitCommitVertical />
                  <span>My Github</span>
                </Button>
              </Link>
              <Link to={linkwaku}>
                <Button className="flex gap-1">
                  <MessageCircleReply />
                  <span>Whats's up</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*
      <section className="h-dvh bg-sky-100 px-4 md:max-h-[650px] md:max-w-6xl mx-auto  overflow-hidden">
        <div className="relative">
          <div className="max-w-5xl md:mx-auto md:relative md:flex md:items-center size-full">
            <div
              className="absolute md:relative bg-gray-50 -top-20 md:top-0 md:left-0 -left-20 rounded-full size-[25rem] md:size-[24rem] flex justify-center items-center"
              style={{
                animation: "spin 10s linear 1s infinite",
              }}
            >
              <ul className="flex justify-center items-center size-full relative">
                {listCircular.map((item, index) => (
                  <li
                    key={index}
                    className="absolute left-0 origin-[200px] md:origin-[180px]"
                    style={{
                      transform: `rotate(${(index / listCircular.length) * 360}deg)`,
                    }}
                  >
                    <Link
                      to="/"
                      className="absolute"
                      style={{
                        animation: "spin 10s linear 1s reverse",
                        transform: `rotate(${(index / listCircular.length) * -360}deg)`,
                      }}
                    >
                      <Avatar className="size-[4rem] md:h-[3rem] md:w-[3rem]">
                        <AvatarImage src={item.img} />
                      </Avatar>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      */}
    </main>
  );
}

export default Home;
