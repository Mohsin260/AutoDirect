import { useState } from "react";

const LocationStepper = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      location: "Autos Direct Fredericksburg",
      address: "4540 Lafayette Blvd, Fredericksburg, VA 22408",
      phone: "(540) 300-4540",
      hours: [
        {
          day: "Monday",
          sales: "9:00 AM - 9:00 PM",
          service: "10:30 AM - 5:30 PM",
        },
        {
          day: "Tuesday",
          sales: "9:00 AM - 9:00 PM",
          service: "10:30 AM - 5:30 PM",
        },
        {
          day: "Wednesday",
          sales: "9:00 AM - 9:00 PM",
          service: "10:30 AM - 5:30 PM",
        },
        {
          day: "Thursday",
          sales: "9:00 AM - 9:00 PM",
          service: "10:30 AM - 5:30 PM",
        },
        {
          day: "Friday",
          sales: "9:00 AM - 9:00 PM",
          service: "10:30 AM - 5:30 PM",
        },
        { day: "Saturday", sales: "9:00 AM - 9:00 PM", service: "Closed" },
        { day: "Sunday", sales: "11:00 AM - 5:00 PM", service: "Closed" },
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433.3974823375088!2d-77.4968921!3d38.2571997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6c114fc2c316f%3A0xdfbf23bd480eacb5!2sAutos%20Direct%20Financing%20Center!5e0!3m2!1sen!2sus!4v1693925563823!5m2!1sen!2sus",
    },
    {
      location: "Autos Direct Manassas",
      address: "9075 Euclid Ave, Manassas, VA 20110",
      phone: "(703) 260-8338",
      hours: [
        { day: "Monday", sales: "9:00 AM - 9:00 PM" },
        { day: "Tuesday", sales: "9:00 AM - 9:00 PM" },
        { day: "Wednesday", sales: "9:00 AM - 9:00 PM" },
        { day: "Thursday", sales: "9:00 AM - 9:00 PM" },
        { day: "Friday", sales: "9:00 AM - 9:00 PM" },
        { day: "Saturday", sales: "9:00 AM - 9:00 PM" },
        { day: "Sunday", sales: "11:00 AM - 5:00 PM" },
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.161432964847!2d-77.4537721!3d38.7596486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65b9f5354f45f%3A0xdd401c781660ab86!2sAutos%20Direct%20Of%20Manassas!5e0!3m2!1sen!2sus!4v1693930596765!5m2!1sen!2sus",
    },
  ];

  return (
    <div style={{ minHeight: 800 }}>
      <section className="bg-lighter border-top" id="location-maps">
        <div className="container">
          <h3 className="text-center mb-5">
            Find your next used car in Fredericksburg or Manassas, VA - serving
            Woodbridge, Centreville, and Fairfax
          </h3>

          {/* Stepper Navigation */}
          <div className="bg-white no-gutters rounded border row">
            <div className="px-4 pt-4 col-12">
              <div className="mb-4 nav nav-tabs">
                {locations.map((location, index) => (
                  <div className="nav-item" key={index}>
                    <button
                      className={`py-3 font-weight-bold nav-link ${
                        activeLocation === index ? "active" : ""
                      }`}
                      onClick={() => setActiveLocation(index)}
                    >
                      {location.location}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Location Details */}
            <div className="px-4 py-4 text-center col-sm-6">
              <span className="d-inline-block faIcon fa-regular fa-location-dot text-primary mb-3">
                <svg height={37} width={27} fill="inherit">
                  <use xlinkHref="/regular.svg#location-dot" />
                </svg>
              </span>
              <h4 className="notranslate">
                {locations[activeLocation].location}
              </h4>
              <hr />
              <strong>Street address:</strong>
              <br />
              {locations[activeLocation].address}
              <br />
              <br />
              <strong>Phone:</strong>
              <br />
              {locations[activeLocation].phone}
              <br />
              <br />
              <table width="100%" className="table table-bordered">
                <thead className="thead-light small bg-lighter">
                  <tr>
                    <th width="40%">Hours of Operation</th>
                    <th>Sales</th>
                    <th>Service</th>
                  </tr>
                </thead>
                <tbody>
                  {locations[activeLocation].hours.map((hour, index) => (
                    <tr key={index}>
                      <td className="px-2 py-1 border-bottom">{hour.day}</td>
                      <td className="px-2 py-1 border-bottom">{hour.sales}</td>
                      <td className="px-2 py-1 border-bottom">{hour.service}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Google Map */}
            <div className="col-sm-6">
              <iframe
                src={locations[activeLocation].mapUrl}
                width="100%"
                title="Get directions to our store"
                loading="lazy"
                className="border"
                style={{
                  border: 0,
                  height: "calc(100%)",
                  maxHeight: "100%",
                  filter: "grayscale(50%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationStepper;
