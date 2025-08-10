import { createContext } from "react";
import all_quiz from "../Components/Assets/All_quiz";
import play_quiz from "../Components/Assets/play_quiz";



export const QuizContext=createContext();

const QuizContextProvider=(props)=>{

    const contextValue={all_quiz,play_quiz}
    return(

        <QuizContext.Provider value={contextValue}>
          {props.children}
        </QuizContext.Provider>
    )
}
export default QuizContextProvider;