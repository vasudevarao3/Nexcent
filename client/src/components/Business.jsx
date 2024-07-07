import members from "../assets/Icons/members.svg";
import clubs from "../assets/Icons/clubs.svg"
import bookings from "../assets/Icons/bookings.svg"
import payments from "../assets/Icons/payment.svg"
import CountUp from 'react-countup'

export default function Business() {
  return (
    <>
      <div className="bg-[#F5F7FA] flex flex-col md:flex-row md:justify-center items-center px-2 md:gap-[7rem] md:p-10">
        <div className="pt-10 items-center md:max-w-[28rem] px-15">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-D_Grey dark:text-slate-800">
            Helping a local{" "}
            <span className="text-Primary text-green-500"> business reinvent itself</span>
          </h1>
          <p className="pt-4 text-[#717171]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pt-7 px-2 md:gap-5">
          <div className="flex flex-row gap-10 md:gap-[5rem]">
            <div className="flex flex-row gap-2 md:gap-4">
              <img src={members} width={40} height={40} />
              <div>
                <h1 className="text-D_Grey font-bold text-lg dark:text-slate-800">
                <CountUp start={0} end={2245341} duration={5} separator="," />
                </h1>
                <p className="text-[#717171] text-sm">Members</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
              <img src={clubs} width={40} height={40} />
              <div>
                <h1 className="text-D_Grey font-bold text-lg dark:text-slate-800">
                <CountUp start={0} end={46328} duration={5} separator="," />
                </h1>
                <p className="text-[#717171] text-sm">Clubs</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6  md:gap-[4rem]">
            <div className="flex flex-row gap-2 md:gap-4">
              <img src={bookings} width={40} height={40} />
              <div>
                <h1 className="text-D_Grey font-bold text-lg dark:text-slate-800">
                   <CountUp start={0} end={828867} duration={5} separator="," />
                </h1>
                <p className="text-[#717171] text-sm">Event Bookings</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
              <img src={payments} width={40} height={40} />
              <div>
                <h1 className="text-D_Grey font-bold text-lg dark:text-slate-800">
                <CountUp start={0} end={1926436} duration={5} separator="," />
                </h1>
                <p className="text-[#717171] text-sm">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
