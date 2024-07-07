import { Button } from "flowbite-react";
import bgImage from "../assets/Images/hero.svg";

export default function Home() {
  return (
    <div className="flex p-6 mb-2 bg-slate-100 dark:text-white dark:bg-slate-800 md:justify-between items-center sm:px-[5rem] bg-Silver">
      <div className="left">
        <div className="pt-[4rem] md:max-w-[45rem] ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-D_Grey">
            Lessons and insights{" "}
            <span className="text-Primary text-green-500">from 8 years</span>
          </h1>
          <p className="pt-4 text-slate-500">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className="pt-6">
            <Button href="" className="text-white bg-green-400">
              Register
            </Button>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={bgImage} />
      </div>
    </div>
  );
}