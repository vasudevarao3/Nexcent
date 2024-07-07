import React from 'react'
import Image from "../assets/Images/mobile1.svg"
import { Button } from 'flowbite-react';

export default function Experience() {
  return (
    <div>
      <div className="flex flex-col md:flex-row itms-cente sm:px-[1rem] md:px-[5rem] p-5">
        <div className="max-w-[70rem]">
          <img src={Image} width={500} height={500} />
        </div>
        <div className="w-screen whitespace-pre-wrap md:pt-[0rem] lg:pt-[5rem] justify-center items-center text-left text-D_Grey font-Inter p-5 md:p-0">
          <h1 className="text-D_Grey font-semibold text-3xl md:text-2xl pt-10 pb-2 md:pt-9 md:pb-3">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-[#717171] text-sm md:max-w-[35rem] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <div className="pt-4 p-2 md:pt-8 md:p-0 ">
            <Button className='bg-green-500 rounded-md dark:bg-green-500'>
                Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
