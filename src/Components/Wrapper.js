import React from 'react';
import { GoLightBulb } from 'react-icons/go';

const Wrapper = () => {
  return (
    <div className="wrapper">
      <section className="top">
        <div className="gradient"></div>
        <div className="degrees">
          <span>
            23<sup>o</sup> C
          </span>
        </div>
        <div className="humidity">
          58<sup>%</sup>
        </div>
      </section>
      <section className="bottom">
        <div className="container">
          <h1>Smart Home</h1>
          <div className="content">
            <div className="card">
              <div className="header">
                <h3>Light Bulb</h3>
                <p>
                  <GoLightBulb />
                </p>
              </div>
              <div className="toggler">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wrapper;
