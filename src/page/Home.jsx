import { Button } from "flowbite-react";




export default function Home() {
  return (
    <>
        <div className="flex flex-col max-w-7xl justify-center mx-auto h-[800px] my-3 gap-5">
            <div className="text-start w-6xl">
                <span className="text-white ">Lorem ipsum dolor sit amet consectetur, 
                </span >    
            </div>
            <p className="text-white text-7xl font-bold max-w-6xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure.</p>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iure.
            </p>
            <div className="flex gap-5">
                <Button gradientDuoTone='purpleToBlue' className="w-32">Join Now</Button>
                <Button outline gradientDuoTone="purpleToPink" className="w-32 ">Hot Now</Button>
            </div>
        </div>

      
    </>
  )
}
