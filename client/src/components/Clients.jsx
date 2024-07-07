import React from 'react'
import client1Img from "../assets/Images/client1.svg"
import client2Img from "../assets/Images/client2.svg"
import client3Img from "../assets/Images/client3.svg"
import client4Img from "../assets/Images/client4.svg"
import client5Img from "../assets/Images/client5.svg"
import client6Img from "../assets/Images/client6.svg"
import members from "../assets/Icons/members.svg"

export default function Clients() {
  return (
    <>
      <div>
        <div className="w-screen max-w-[75rem] justify-center items-center text-center text-slate-700 font-Inter p-5 md:p-0">
          <h1 className="text-slate-700 font-extrabold text-3xl md:text-2xl pt-10 pb-2 md:pt-9 md:pb-3 dark:text-slate-200">
            Our Clients
          </h1>
          <p className="text-[#717171]">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex flex-col p-9 gap-7 md:gap-7  sm:flex-row lg:gap-[10rem] sm:gap-[5rem] justify-center items-center">
          <div className="flex flex-row gap-12 md:gap-7 lg:gap-[10rem] ">
            <img src={client1Img} width={50} height={25} />
            <img src={client2Img} width={50} height={25} />
            <img src={client3Img} width={50} height={25} />
          </div>
          <div className="flex flex-row  gap-12 md:gap-7   lg:gap-[10rem]">
            <img src={client4Img} width={50} height={25} />
            <img src={client5Img} width={50} height={25} />
            <img src={client6Img} width={50} height={25} />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center   p-5 md:p-0">
        <div className="text-slate-700 font-Inter text-2xl">
          <h1 className="text- text-2xl font-semibold max-w-[28rem] text-center dark:text-slate-300">
            Manage your entire community in a single system
          </h1>
        </div>
        <p className="text-[#717171] text-md text-center pt-3">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row pt-4 md:px-[3rem]">
        <div className="flex flex-col  justify-center items-center px-4 pt-4">
          <div className="flex flex-col justify-center items-center bg-white shadow-sm rounded-md p-4 dark:bg-slate-300">
            <div className="">
              <img src={members} width={50} height={50} />
            </div>
            <h1 className="font-bold text-slate-700 text-3xl text-center pt-4">
              Membership <br /> Organisations
            </h1>
            <p className="pt-2 text-[#717171] text-center text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 pt-4">
          <div className="flex flex-col justify-center items-center bg-white shadow-sm rounded-md p-4 dark:bg-slate-300">
            <div className="">
              <img src={members} width={50} height={50} />
            </div>
            <h1 className="font-bold text-slate-700 text-3xl text-center pt-4 ">
              National <br /> Associations
            </h1>
            <p className="pt-2 text-[#717171] text-center text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 pt-4">
          <div className="flex flex-col justify-center items-center bg-white shadow-sm rounded-md p-4 dark:bg-slate-300">
            <div className="">
              <img src={members} width={50} height={50} />
            </div>
            <h1 className="font-bold text-slate-700 text-3xl text-center pt-4">
              Clubs And <br /> Groups
            </h1>
            <p className="pt-2 text-[#717171] text-center text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
