import FlashCard from "./flashCard";

export default function FlashcardList({flashcards,deleteFlashCard}){
    return (
        <div className="grid grid-cols-1 gap-6 p-6 flashcard-list sm:grid-cols-2 md:grid-cols-3 justify-items-center">
            {flashcards.map((card,index) => (
                <FlashCard key={index} question={card.question} answer={card.answer} onDelete={()=> deleteFlashCard(index)}/>
            ))}
        </div>
    )
}