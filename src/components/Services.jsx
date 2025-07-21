import React from "react";
import SectionHeader from "./SectionHeader";
import { services } from "./db";

const Services = ({ title }) => {
  return (
    <div>
      <section className="section services" id="services">
        <SectionHeader title={title} />
        <div className="section-center services-center">
          {services.map((services, index) => {
            const { icon, headingText, description } = services;
            return (
              <article className="service">
                <span className="service-icon">
                  <i className={icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{headingText}</h4>
                  <p className="service-text">{description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
