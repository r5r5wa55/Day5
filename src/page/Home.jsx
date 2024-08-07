import { Button } from "flowbite-react";

import MovieHome from "../assets/Movie.png"


export default function Home() {
  return (
    <>
      <div className="flex flex-col container justify-center mx-auto h-[800px] my-3 gap-5">
        <div className="text-start w-6xl">
          <span className="text-white ">Web design
          </span >
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-3">
            <p className="text-white text-7xl font-bold max-w-6xl">I'm</p>
            <p className="text-white text-7xl font-bold max-w-6xl">Werapol Jaranai </p>
            <p className="text-white text-7xl font-bold max-w-6xl">Project Api Movie IMDB</p>
            <p className="text-white">เป็นโปรเจ็คที่ทำเพิ้อการฝึกฝนพิ้นฐานในการเขียน React</p>
          </div>
          <div className="col-span-2 flex justify-center">
             <img src={MovieHome} alt="" />
          </div>
        </div>
        <div className="flex gap-5">
          <Button gradientDuoTone='purpleToBlue' className="w-32">Join Now</Button>
          <Button outline gradientDuoTone="purpleToPink" className="w-32 ">Test Us</Button>
        </div>
      </div>


    </>
  )
}
