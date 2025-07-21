import React from "react";
import { features } from "./db";

const Featured = () => {
  return (
    <div>
      <section className="section" id="tours">
        <div className="section-title">
          |
          <h2>
            featured <span>tours</span>
          </h2>
        </div>
        <div className="section-center featured-center">
          {features.map((feature, index) => {
            const { img, title, description, country, No_of_Day, cost, date } =
              feature;
            return (
              <article className="tour-card">
                <div className="tour-img-container">
                  <img src={img} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{description}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {country}
                    </p>
                    <p>{No_of_Day}</p>
                    <p>{cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Featured;
