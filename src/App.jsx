import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import divideDesktop from "./assets/images/pattern-divider-desktop.svg";
import divideMobile from "./assets/images/pattern-divider-mobile.svg";
import dice from "./assets/images/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  function setAdviced() {
    console.log("call here");
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdviceId(data.slip.id);
        setAdvice(data.slip.advice);
      });
  }

  useEffect(() => {
    console.log("call this effect");
    setAdviced();
  });

  return (
    <>
      <main
        role="main"
        className="bg-dark-grayish-blue rounded-xl font-manrope"
      >
        <article className="relative flex flex-col items-center align-middle justify-center md:min-w-500 md:max-w-750 rounded-xl md:px-8 min-w-0 p-0">
          <p className="id-advice py-5 text-neonGreen text-sm tracking-widest font-bold">
            <h4>ADVICE ## {adviceId}</h4>
          </p>
          <blockquote className="lg:py-12 lg:text-3xl font-bold text-lightCyan tracking-wider after:ml-0.5 after:text-red-500 ">
            <p>&quot;{advice}&quot;</p>
          </blockquote>

          <picture className="pb-12">
            <source
              media="(min-width: 992px)"
              alt="divider"
              srcSet={divideDesktop}
            />
            <img src={divideMobile} alt="divider" />
          </picture>
          <button
            role="button"
            title="generate-advice-button"
            className="absolute -bottom-7 p-5 bg-neonGreen shadow-2xl hover:shadow-neonGreen rounded-full"
            onClick={setAdviced}
          >
            <img src={dice} alt="" />
          </button>
        </article>
      </main>
    </>
  );
}

export default App;
