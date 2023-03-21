import { FaCar, FaLocationArrow, FaCalendar } from "react-icons/fa";
import { useState } from "react";
function RentForm() {
  const [formDetails, setFormDetails] = useState({
    carType: "audi",
    pickupLocation: "Lehi",
    dropLocation: "Lehi",
    pickupDate: "",
    dropDate: "",
  });

  const updateFormInfo = (e) => {
    e.preventDefault();
    const currentItem = e.target.id;
    const newInfo = e.target.value;
    setFormDetails({ ...formDetails, [currentItem]: newInfo });
  };
  const rentCar = (e) => {
    e.preventDefault();
    setFormDetails({ ...formDetails });
    (function formatDate() {
      const now = Date.now();
      const convertNum = Number(now);
      const convertDate = new Date(convertNum);
      const convertLocal = convertDate.toLocaleDateString("en-US");
      const dateArray = convertLocal.split("/");
      const month = dateArray[0].padStart(2, "0");
      const day = dateArray[1];
      const year = dateArray[2];
      const dateComparison = `${year}-${month}-${day}`;
      if (dateComparison > formDetails.pickupDate) {
        alert("Cannot rent a car in the past");
      } else if (formDetails.pickupDate > formDetails.dropDate) {
        alert("Return date cannot be before pickup date");
      }
    })();
  };
  return (
    <section className="form-wrapper" id="form-wrapper">
      <div>
        <form onSubmit={rentCar}>
          <h1 className="span3">Rental Form</h1>
          <div className="form-item">
            <label htmlFor="carType">
              <FaCar />
              <span style={{ color: "black" }}>
                {"  Select your rental car  "}
              </span>
              *
            </label>
            <select id="carType" onChange={updateFormInfo}>
              <option value={"audi"}>Audi A5 Coupe</option>
              <option value={"bmw"}>BMW M2 Coupe</option>
              <option value={"mazda"}>Mazda3</option>
              <option value={"chevy"}>Chevy Cruze</option>
              <option value={"jeep"}>Jeep Wrangler</option>
              <option value={"ford"}>Ford Focus</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="pickupLocation">
              <FaLocationArrow />
              <span style={{ color: "black" }}>
                {"  Select your pickup location  "}
              </span>
              *
            </label>
            <select id="pickupLocation" onChange={updateFormInfo}>
              <option value={"Lehi"}>Lehi</option>
              <option value={"Draper"}> Draper</option>
              <option value={"Salt Lake City"}>Salt Lake City</option>
              <option value={"Orem"}>Orem</option>
              <option value={"Ogden"}>Ogden</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="dropLocation">
              <FaLocationArrow />
              <span style={{ color: "black" }}>
                {"  Select your return location  "}
              </span>
              *
            </label>
            <select id="dropLocation" onChange={updateFormInfo}>
              <option value={"Lehi"}>Lehi</option>
              <option value={"Draper"}> Draper</option>
              <option value={"Salt Lake City"}>Salt Lake City</option>
              <option value={"Orem"}>Orem</option>
              <option value={"Ogden"}>Ogden</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="pickupDate">
              <FaCalendar />
              <span style={{ color: "black" }}>
                {"  Select your checkout date  "}
              </span>
              *
            </label>

            <input type="date" id="pickupDate" onChange={updateFormInfo} />
          </div>
          <div className="form-item">
            <label htmlFor="dropDate">
              <FaCalendar />
              <span style={{ color: "black" }}>
                {"  Select your return date "}
              </span>
              *
            </label>

            <input type="date" id="dropDate" onChange={updateFormInfo} />
          </div>
          <div className="form-item">
            <input type="submit" className="form-submit" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default RentForm;
