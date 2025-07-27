import React from "react";
import './Home.css'

import Item from "../../Components/Item/Item";
import QuizOptions from "../../Components/QuizOptions/QuizOptions";
import Prizes from "../../Components/Prizes/Prizes";
import Offers from "../../Components/Offers/Offers";


const Home = () => {
  return (
    <div>
      <QuizOptions/>
      <Item/>
      <Prizes/>
      <Offers/>
   
    </div>
  )
};

export default Home;
