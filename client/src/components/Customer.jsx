import React from 'react'
import T from "../assets/Images/t.svg"
import client1Img from "../assets/Images/client1.svg"
import client2Img from "../assets/Images/client2.svg"
import client3Img from "../assets/Images/client3.svg"
import client4Img from "../assets/Images/client4.svg"
import client5Img from "../assets/Images/client5.svg"
import client6Img from "../assets/Images/client6.svg"
import arrow from "../assets/Icons/greenarrowright.svg"


export default function Customer() {
  return (
    <div className="flex flex-col bg-slate-100 md:flex-row sm:px-[1rem] md:px-[5rem] md:gap-10 pt-5 md:pt-9 dark:bg-slate-200">
        <div className="max-w-[70rem]">
          <img src={T} width={300} height={300} />
        </div>
        <div className="w-screen max-w-[25rem] md:pt-[0rem] lg:pt-[0rem] justify-center items-center text-left text-D_Grey font-Inter p-5 md:p-0">
          <p className="text-slate-700 text-sm max-w-[55] whitespace-normal sm:min-w-[25rem]  lg:min-w-[40rem]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div>
            <h4 className="text-green-500 font-semibold text-md pt-4">
              Tim Smith
            </h4>
            <h5 className="text-slate-400 text-sm">
              British Dragon Boat Racing Association
            </h5>
          </div>
          <div className="flex flex-col p-9 md:p-0 md:pt-4 gap-7 md:gap-7  sm:flex-row lg:gap-[10rem] sm:gap-[10rem] sm:justify-between justify-center items-center">
            <div className="flex flex-col md:flex-row gap-12 justify-between items-center lg:gap-[22rem] ">
            <div className="hidden sm:block flex-row gap-10">
              <div className="flex flex-row gap-[2rem]">
                <img
                  src={client1Img}
                  width={50}
                  height={25}
                />
                <img
                  src={client2Img}
                  width={50}
                  height={25}
                />
                <img
                  src={client3Img}
                  width={50}
                  height={25}
                />
                <img
                  src={client4Img}
                  width={50}
                  height={25}
                />
                <img
                  src={client5Img}
                  width={50}
                  height={25}
                />
                <img
                  src={client6Img}
                  width={50}
                  height={25}
                />
                </div>
              </div>
              <div className="flex flex-row">
                <h4 className="text-green-500 font-semibold text-md pt-4">
                  Meet all customers
                </h4>
                <img
                  className=""
                  src={arrow}
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
