import { useState } from "react";

export default function FlashCardForm({addFlashcard}){
    const [question,setQuestion] = useState("");
    const [answer,setAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addFlashcard(question,answer);
        setAnswer("");
        setQuestion("");
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-md p-4 mx-auto space-y-4 bg-gray-100 rounded-md shadow-md">
            <input
                type="text"
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Answer"
                value={answer}
                onChange={(e)=> setAnswer(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Add Flashcard</button>
         </form>
    )
}