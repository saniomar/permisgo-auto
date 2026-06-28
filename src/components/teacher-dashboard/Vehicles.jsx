"use client";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
// import img from "../../../../public/image/car.jpg";
const vehicles = [
  {
    brand: "Audi",
    model: "S4 Premium Plus",
    year: "2021",
    number: "789006655",
    type: "Automatic",
    image: "/image/car.jpg",
  },
  {
    brand: "Audi",
    model: "S4 Premium Plus",
    year: "2021",
    number: "789006655",
    type: "Automatic",
    image: "/image/car.jpg",
  },
];

export default function Vehicles() {
  return (
    <section className="vehicles-page">
      <div className="vehicles-header">
        <h2>List of Vehicles</h2>

        <button className="add-vehicle-btn">
          <FaPlus />
          Add new vehicles
        </button>
      </div>

      <div className="vehicles-wrapper">
        {vehicles.map((v, i) => (
          <div key={i} className="vehicle-card">
            <div className="row align-items-center g-3">
              {/* Image */}
              <div className="col-12 col-md-3">
                {typeof v.image === "object" ? (
                  <Image
                    src={v.image}
                    alt="vehicle"
                    className="vehicle-img"
                    width={300}
                    height={150}
                  />
                ) : (
                  <img src={v.image} alt="vehicle" className="vehicle-img" />
                )}
              </div>

              {/* Details */}
              <div className="col-12 col-md-9">
                <div className="row text-center text-md-start g-3">
                  <div className="col-6 col-md-2">
                    <p className="label">Brand</p>
                    <h6>{v.brand}</h6>
                  </div>

                  <div className="col-6 col-md-3">
                    <p className="label">Model</p>
                    <h6>{v.model}</h6>
                  </div>

                  <div className="col-6 col-md-2">
                    <p className="label">Year</p>
                    <h6>{v.year}</h6>
                  </div>

                  <div className="col-6 col-md-3">
                    <p className="label">Vehicle Number</p>
                    <h6>{v.number}</h6>
                  </div>

                  <div className="col-6 col-md-2">
                    <p className="label">Vehicle Type</p>
                    <h6>{v.type}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
