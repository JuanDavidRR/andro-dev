import React from "react";
import { portfolio } from "../portfolio";
import PortfolioItem from "./PortfolioItem";

export const Porfolio = () => {
  return (
    <section id="portafolio" className="product-list-container container mt-3">
      <div className="product-list-text">
        <h1 className="product-list-title">Proyectos</h1>
        <p className="product-list-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima ex, consequuntur repellendus culpa inventore quibusdam, quis dolores sit, rerum veritatis dolore voluptas. Porro quidem cumque sed rem atque fuga.
        </p>
      </div>
      <div className="product-list">
        <ul>
        {portfolio.map((product, i) => (
          <PortfolioItem
            i={product.id}
            title={product.title}
            img={product.img}
            description={product.description}
            link={product.link}
          />
        ))}
        </ul>
      </div>
    </section>
  );
};
