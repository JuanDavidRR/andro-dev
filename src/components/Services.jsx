import React, { useState } from "react";
import { MdCodeOff, MdOutlineDesignServices } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import Web from "./services/Web";
import Development from "./services/Development";
import SEO from "./services/SEO";
import Consultoria from "./services/Consultoria";

export const Services = () => {
  const [activeTab, setActiveTab] = useState("webDevelopment");

  return (
    <section className="services container" id="servicios">
      <h2>Services</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
        facilis molestias at alias unde assumenda perspiciatis, fuga dolore, in
        consectetur fugiat vero, dolor adipisci nemo accusamus asperiores
        voluptatum ex architecto!
      </p>
      <section className="tab-container mt-5 mb-5">
        <section className="tab-button-group">
          <ul>
            <li>
              <button
                className={
                  activeTab === "websites" ? "tab-btn" : "tab-btn active"
                }
                onClick={() => setActiveTab("websites")}
              >
                <MdCodeOff size={50} />
              </button>
            </li>

            <li>
              <button
                className={
                  activeTab === "webDevelopment" ? "tab-btn" : "tab-btn active"
                }
                onClick={() => setActiveTab("webDevelopment")}
              >
                <MdOutlineDesignServices size={50} />
              </button>
            </li>

            <li>
              <button
                className={activeTab === "seo" ? "tab-btn" : "tab-btn active"}
                onClick={() => setActiveTab("seo")}
              >
                <BiLineChart size={50} />
              </button>
            </li>

            <li>
              <button
                className={
                  activeTab === "consult" ? "tab-btn" : "tab-btn active"
                }
                onClick={() => setActiveTab("consult")}
              >
                <FiUsers size={50} />
              </button>
            </li>
          </ul>
        </section>

        <section className="tabs-content">
          {activeTab === "websites" && (
            <Web
              title="Diseño de páginas web"
              description="Lorem No sé que mondá"
            />
          )}

          {activeTab === "webDevelopment" && (
            <Development
              title="Desarrollo Web"
              description="Lorem No sé que mondá"
            />
          )}

          {activeTab === "seo" && (
            <SEO
              title="Posicionamiento SEO"
              description="Lorem No sé que mondá"
            />
          )}

          {activeTab === "consult" && (
            <Consultoria
              title="Consultoria"
              description="Lorem No sé que mondá"
            />
          )}
        </section>
      </section>
    </section>
  );
};
