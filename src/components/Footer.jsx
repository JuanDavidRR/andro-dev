import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-5">
      <section className="footer-container container">
        <div className="footer-company">
          <h3>LOGO</h3>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            similique enim voluptatum ut. Fugiat mollitia aliquid modi
            reiciendis expedita tempora explicabo quod incidunt cumque
            repudiandae? Vero eaque omnis vel! Fuga.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="footer-info">
          <div>
            <h5>Support</h5>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">About Us</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">Start Now</li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li className="py-2 text-sm">+1 456-345-4663</li>
              <li className="py-2 text-sm">jorden@marketing.com</li>
              <li className="py-2 text-sm">Angie@marketing.com</li>
              <li className="py-2 text-sm">Street 65 Av.56 Ch.Ill</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};
