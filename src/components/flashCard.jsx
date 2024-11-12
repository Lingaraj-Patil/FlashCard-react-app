import { useState } from "react";

export default function FlashCard({question,answer,onDelete}){
    const [flipped,setFlipped] = useState(false);

    return(
        <div className={`flashcard p-4 m-4 w-64 rounded-lg shadow-md cursor-pointer transition-transform transform ${flipped ? "bg-blue-200" : "bg-white"}`} onClick={()=>setFlipped(!flipped)}>  
            <p className="text-lg font-semibold text-center">{flipped ? answer : question}</p>
            <div className="flex justify-between mt-2">
                <button onClick={(e) => { e.stopPropagation(); setFlipped(!flipped)}} className="px-4 py-2 mt-2 text-black bg-gray-300 rounded-md hover:bg-gray-400">
                    Flip 
                </button>
                <button onClick={(e)=>{e.stopPropagation(); onDelete();}} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    )
}