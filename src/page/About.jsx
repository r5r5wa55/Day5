import { useEffect, useState } from "react"

import { Card } from 'flowbite-react';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/reducer";


export default function About() {

    const {items} = useSelector((state)=>state.todos)
    const [movieList,setMovieList] = useState()
    const dispath = useDispatch()
    useEffect(()=>{
        const fetchMovieList =async()=>{
            try {
                const res = await fetch(`https://www.omdbapi.com/?apikey=202a113f&s=%27thor%27&short=full`);
                if(res.ok){
                    const data = await res.json()
                    setMovieList(data.Search)
                    dispath(addItem(data.Search))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchMovieList()
    },[])
    console.log(items);
  return (
    <div>
       <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 my-5 justify-center">
        {items &&
                (
                    items.map((movie)=>(

                    <div  key={movie.imdbID} >
                        <Card  imgSrc={movie.Poster} className=' max-w-sm' horizontal >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            {movie.Title}
                        </Card>
                    </div>
                        
                    ))
                )
                
            }
       </div>
    </div>
  )
}
