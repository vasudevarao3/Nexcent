import React from 'react'
import marketing1 from "../assets/Images/marketing (1).svg"
import marketing2 from "../assets/Images/marketing (2).svg"
import marketing3 from "../assets/Images/marketing (3).svg"
import arrow from "../assets/Icons/greenarrowright.svg"


export default function Marketing() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center md:pt-12 p-5 md:p-0 ">
        <div className="text-D_Grey font-Inter text-2xl">
          <h1 className="text-D_Grey text-2xl font-semibold max-w-[28rem] text-center">
            Caring is the new marketing
          </h1>
        </div>
        <p className="text-[#717171] text-sm text-center md:max-w-[35rem] pt-3">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="flex flex-col gap-[10rem] sm:flex-row sm:pt-3 justify-center items-center px-3 lg:gap-2 lg:pb-[8rem]">
        <div className="px-5 w-full sm:w-auto p-4 flex flex-col justify-center items-center">
          <img
            src={marketing3}
            width={300}
            height={300}
            className='relative z-1'
          />
          <div className="z-10 md:shadow-[#abbed13a] pt-5 absolute max-w-[15rem] md:bg-Silver px-4 mt-[15rem] rounded-md shadow-lg">
            <h1 className="max-w-[20rem] text-center  font-semibold text-Grey">
              Creating Streamlined Safeguarding Processes with OneRen
            </h1>
            <div className="flex flex-row  justify-center items-center gap-1 text-center pb-4">
              <h4 className="text-green-500 font-semibold text-md  pt-2">
                Readmore
              </h4>
              <img
                className="pt-[0.70rem] "
                src={arrow}
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="px-5 p-4 w-full sm:w-auto flex flex-col justify-center items-center">
          <img
            src={marketing2}
            width={300}
            height={300}
          />
          <div className="md:shadow-[#abbed13a] absolute max-w-[16rem] pt-5  md:bg-Silver px-4 mt-[15rem] rounded-md shadow-lg">
            <h1 className="min-w-[14rem] flex justify-center items-center text-center  font-semibold text-Grey">
              What are your safeguarding responsibilities and how can you manage
              them?
            </h1>
            <div className="flex flex-row  justify-center items-center gap-1 text-center pb-4">
              <h4 className="text-green-500 font-semibold text-md  pt-2">
                Readmore
              </h4>
              <img
                className="pt-[0.70rem]"
                src={arrow}
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="px-5 p-4 w-full sm:w-auto flex flex-col justify-center items-center">
          <img
            src={marketing1}
            width={300}
            height={300}
          />
          <div className="md:shadow-[#abbed13a] absolute pt-5 max-w-[15rem]  md:bg-Silver px-4 mt-[15rem] rounded-md shadow-lg">
            <h1 className="max-w-[20rem] text-center  font-semibold text-Grey">
              Revamping the Membership Model with Triathlon Australia
            </h1>
            <div className="flex flex-row justify-center items-center gap-1 text-center pb-4">
              <h4 className="text-green-500 font-semibold text-md  pt-2">
                Readmore
              </h4>
              <img
                className="pt-[0.70rem]"
                src={arrow}
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
