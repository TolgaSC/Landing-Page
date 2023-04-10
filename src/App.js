import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Info from "./Components/Info";
import Food from "./Components/Food";
import FoodData from "./Components/FoodData";

function App() {
  const Data = [
    {
      number: "127",
      text: "Award Received",
    },
    {
      number: "1505",
      text: "Cups of Coffee",
    },
    {
      number: "109",
      text: "Projects Completed",
    },
    {
      number: "102",
      text: "Happy Clients",
    },
  ];

  return (
    <div className="App">
      <header>
        <h1>Hello There</h1>
        <h2>We Are Glint</h2>
        <div className="line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero
          porro natus mollitia nam repellat suscipit reprehenderit quasi
          aliquid. Omnis quis dolores temporibus sapiente obcaecati laboriosam,
          repellendus laudantium asperiores tempore facere possimus, aliquid
          commodi expedita.
        </p>
        <article className="info">
          {Data.map((elt) => (
            <Header 
            number={elt.number} 
            text={elt.text} 
            />
          ))}
        </article>
      </header>
      <main>
        <h2>What We Do</h2>
        <h3>We've got everything you need to launch and grow your business</h3>
        <div className="head-div">
        {Info.map((elt) => (
          <Main 
          image={elt.image} 
          headtext={elt.headtext} 
          text={elt.text} />
        ))}
        </div>
      </main>
      <footer>
        {FoodData.map((elt) => (
          <Food
            image={elt.image}
            headline={elt.headline}
            info={elt.info}
            price={elt.price}
          />
        ))}
      </footer>
    </div>
  );
}

export default App;
