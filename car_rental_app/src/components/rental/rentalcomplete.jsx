function DisplayRentalInfo() {
  const rentalPackage = localStorage.getItem("CarRentalPackage");
  const getInfo = JSON.parse(rentalPackage);

  return (
    <section className="rental-wrapper">
      <div className="rental-cont">
        <h1>Thank you for submitting your rental request</h1>
        <h2>Your rental details are as follows</h2>
        <article className="rental-grid">
          <p>Vehicle Type: {getInfo.carType}</p>
          <p>Pickup Location: {getInfo.pickupLocation}</p>
          <p>Return Location: {getInfo.dropLocation}</p>
          <p>Pickup Date: {getInfo.pickupDate}</p>
          <p>Return Date: {getInfo.dropDate}</p>
          <p>Rental ID: {getInfo.date}</p>
        </article>
      </div>
    </section>
  );
}

export default DisplayRentalInfo;
