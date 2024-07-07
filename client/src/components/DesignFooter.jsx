import { Button } from "flowbite-react";
import Image from "../assets/Images/mobilelogin.svg";
export default function DesignFooter() {
  return (
    <>
      <div className="flex flex-col md:flex-row sm:px-[1rem] md:px-[5rem] pt-5 md:pb-[3rem]">
        <div className="max-w-[70rem]">
          <img src={Image} width={400} height={400} />
        </div>
        <div className="w-screen max-w-[25rem] md:pt-[0rem] lg:pt-[5rem] justify-center items-center text-left text-D_Grey font-Inter p-5 md:p-0">
          <h1 className="text-D_Grey font-semibold text-3xl pt-10 pb-2 md:pt-9 md:pb-3">
          How to design your site footer like we did
          </h1>
          <p className="text-[#717171] text-sm md:max-w-[45rem] whitespace-pre-wrap">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,augue nec tincidunt 
            molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at 
            libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta 
            nisi facilisis finibus. In euismod augue vitae nisi ultricies, nonaliquet urna tincidunt. Integer 
            in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi 
            ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <div className="pt-4 p-2 md:pt-8 md:pl-0 ">
            <Button className="text-white bg-green-500 rounded-md dark:bg-green-500">Learn More</Button>
          </div>
        </div>
        </div>
    </>
  );
}

