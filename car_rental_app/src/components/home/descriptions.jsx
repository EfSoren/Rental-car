import React, { useState } from "react";
import herocar from "../../assets/herocar.png";
import { car1, car2, car3, car4, car5, car6 } from "./carjson";
function CarDescriptions() {
  const [modelView, setModelView] = useState(herocar);
  const [modelDetails, setModelDetails] = useState(car1);
  const toggleActive = (elem) => {
    const lists = document.getElementsByTagName("li");
    for (let i = 0; i < lists.length; i++) {
      lists[i].classList.remove("list-active");
    }
    elem.target.className = "list-active";

    switch (elem.target.value) {
      case 1:
        setModelDetails(car1);
        break;
      case 2:
        setModelDetails(car2);
        break;
      case 3:
        setModelDetails(car3);
        break;
      case 4:
        setModelDetails(car4);
        break;
      case 5:
        setModelDetails(car5);
        break;
      case 6:
        setModelDetails(car6);
        break;
      default:
        break;
    }
  };

  return (
    <section className="description-wrapper" id="models">
      <div className="description-header">
        <h3 className="model-head">Vehicle Models</h3>
        <h1 className="model-info">Our rental Fleet</h1>
        <p style={{ color: "grey" }}>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="car-wrapper">
        <ul>
          <li value="1" onClick={toggleActive}>
            Audi A5 Coupe
          </li>
          <li value="2" onClick={toggleActive}>
            BMW M2 Coupe
          </li>
          <li value="3" onClick={toggleActive}>
            Mazda3
          </li>
          <li value="4" onClick={toggleActive}>
            Chevy Cruze
          </li>
          <li value="5" onClick={toggleActive}>
            Jeep Wrangler
          </li>
          <li value="6" onClick={toggleActive}>
            Ford Focus
          </li>
        </ul>
        <img src={modelDetails.Img} className="model-image" />
        <aside className="car-info-grid">
          <h1 className="span2 grid-header">${modelDetails.Price}/ Per Day</h1>
          <p className="grid-border grid-top">Make</p>
          <p className="grid-top">{modelDetails.Make}</p>
          <p className="grid-border">Model</p>
          <p>{modelDetails.Model}</p>
          <p className="grid-border">Year</p>
          <p>{modelDetails.Year}</p>
          <p className="grid-border">Doors</p>
          <p>{modelDetails.Doors}</p>
          <p className="grid-border">AC</p>
          <p>{modelDetails.AC}</p>
          <p className="grid-border">Transmission</p>
          <p>{modelDetails.Transmission}</p>
          <p className="grid-border">Fuel</p>
          <p>{modelDetails.Fuel}</p>
          <button href="form-wrapper" className="span2">
            <a href="#form-wrapper">Reserve Now</a>
          </button>
        </aside>
      </div>
    </section>
  );
}

export default CarDescriptions;
