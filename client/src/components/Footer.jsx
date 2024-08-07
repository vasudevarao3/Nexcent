import whitearrow from "../assets/Icons/whitearrow.svg";
import logodark from "../assets/Icons/logodark.svg"
import insta from "../assets/Icons/instagram.svg"
import ball from "../assets/Icons/ball.svg"
import twitter from "../assets/Icons/twitter.svg"
import youtube from "../assets/Icons/youtube.svg"
import share from "../assets/Icons/share.svg"

export default function Footer() {
  return (
    <>
      <div className="bg-slate-100 flex flex-col justify-center items-center p-[4rem] dark:bg-slate-400">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold text-D_Grey max-w-[40rem] dark:text-slate-800 ">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <div className="pt-4 p-2  md:pt-8 md:p-0 ">
          <a
            href=""
            className="text-white flex flex-row gap-2 bg-green-500 rounded-lg px-4 py-2 md:px-4 md:py-3"
          >
            <h1>Get a Demo</h1>
            <img
              src={whitearrow}
              width={15}
              height={15}
            />
          </a>
        </div>
      </div>
      <div className="bg-slate-800 text-white  flex flex-col justify-center items-center pb-[5rem] lg:flex-row lg:gap-[10rem] ">
        <div className="flex flex-col sm:flex-col pt-3  justify-center items-center gap-7">
          <div className=" p-4 sm:pt-9 flex flex-row gap-2 ">
            <img
              src={logodark}
              alt="Logo"
              width={50}
              height={50}
            />
            <span className="text-white text-center lg:text-left  font-bold text-2xl">Nexcent</span>
          </div>
          <h4 className="text-Silver text-center lg:text-left ">
            Copyright © 2020 Nexcent ltd. <br /> All rights reserved
          </h4>
          <div className="flex flex-row items-center justify-center gap-4">
            <img src={insta} width={40} height={40} />
            <img src={ball} width={40} height={40} />
            <img src={twitter} width={40} height={40} />
            <img src={youtube} width={40} height={40} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row sm:gap-[3rem] sm:pt-4 justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-[5rem] sm:gap-[6rem] pt-8">
            <div>
              <h1 className="text-white font-semibold text-xl">Company</h1>
              <div className="text-Silver font-normal text-sm pt-4 flex flex-col gap-2">
                <h2>About Us</h2>
                <h2>Blog</h2>
                <h2>Contact Us</h2>
                <h2>Pricing</h2>
                <h2>Testimonials</h2>
              </div>
            </div>
            <div>
              <h1 className="text-white font-semibold text-xl">Support</h1>
              <div className="text-Silver font-normal text-sm pt-4 flex flex-col gap-2">
                <h2>Help center</h2>
                <h2>Terms of Service</h2>
                <h2>Legal</h2>
                <h2>Privacy Policy</h2>
                <h2>Status</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center gap-4 lg:text-left lg:pt-0 pb-10 px-6 pt-[4rem]">
              <h1 className="text-white font-semibold text-xl text-center lg:text-left ">
                Stay up to date
              </h1>
              <div className="flex flex-row bg-slate-600 px-8 sm:px-4 py-2  rounded-md">
                <input type="email" className="bg-slate-600  sm:px-1
                tetx-slate-600 text-sm rounded-md outline-none" placeholder="Your email address"/>
                <img src={share} width={20} height={20} />
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
