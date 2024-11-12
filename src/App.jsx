import { useEffect, useState } from 'react'
import FlashCardForm from './components/flashCardForm';
import FlashcardList from './components/flashCardList';


function App() {
  const [flashcards, setFlashcards] = useState([]);
  
  useEffect(()=>{
    const savedFlashCards = JSON.parse(localStorage.getItem("flashcards")) || [];
    setFlashcards(savedFlashCards);
  },[]);

  useEffect(()=>{
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
  },[flashcards]);

  const addFlashcard = (question,answer) => {
    setFlashcards([...flashcards,{question,answer}])
  };

  const deleteFlashCard = (indexToDelete) => {
    setFlashcards(flashcards.filter((_,index)=> index !== indexToDelete));
  }

  return (
    <div className='container flex flex-col items-center p-4 mx-auto App'>
      <div className='w-full max-w-md mb-6'>
        <FlashCardForm addFlashcard={addFlashcard}/>
      </div>
        <FlashcardList flashcards={flashcards} deleteFlashCard={deleteFlashCard}/>
    </div>
  )
}

export default App
