import "../css/preloading.css";
import circle from "../images/preloading/circle.png";
import letter from "../images/preloading/letter.png";

function Preloading() {
  document.addEventListener("DOMContentLoaded", () => {
    showLoadingScreen();
    setTimeout(() => {
      closeLoadingScreen();
    }, 1500);
  });

  function showLoadingScreen() {
    const preloading = document.querySelector(".preloading");
    const body = document.querySelector("body");

    preloading.classList.remove("inactive");
    body.style.overflow = "hidden";
  }

  function closeLoadingScreen() {
    const preloading = document.querySelector(".preloading");
    const body = document.querySelector("body");

    preloading.classList.add("inactive");
    body.style.overflow = "scroll";
  }

  return (
    <div className="preloading">
      <div className="loader">
        <img src={circle} alt="" className="circle" />
        <img src={letter} alt="" className="letter" />
      </div>
    </div>
  );
}

export default Preloading;
