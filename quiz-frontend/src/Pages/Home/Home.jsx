import React from "react";
import './Home.css'

import Item from "../../Components/Item/Item";
import QuizOptions from "../../Components/QuizOptions/QuizOptions";


const Home = () => {
  return (
    <div>
      <QuizOptions/>
      <Item/>
   
    </div>
  );
};

export default Home;
