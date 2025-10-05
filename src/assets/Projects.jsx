import React from "react";
import "./Projects.css";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Smart Parking System",
      desc: "Web app with QR code scanning and slot management built using HTML, CSS, JavaScript, and MySQL.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      live: "#",
      code: "#",
      image: "src/back-video/OIP (1).webp",
    },
    {
      title: "E-commerce Website for Fashion Sales",
      desc: "Responsive online store built with HTML, CSS, JavaScript, and Bootstrap.",
      tech: ["React", "CSS", "JavaScript", "Bootstrap"],
      live: "https://shopping-cards-nu.vercel.app/",
      code: "https://github.com/akashmhadgut/ShoppingCards.git",
      image: "src/back-video/ecom.jpg",
    },
    {
      title: "Blogging Website",
      desc: "Full-featured website built using React.js and Bootstrap for blogging + product showcases.",
      tech: ["React", "Bootstrap"],
      live: "https://blogapp-topaz-seven.vercel.app/",
      code: "https://github.com/akashmhadgut/blogapp.git",
      image: "src/back-video/OIP.webp",
    },
  ];

  return (
    <section id="project" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-5 text-center fw-bold">Projects</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projects.map((p, i) => (
            <div className="col" key={i}>
              <div className="card h-100 shadow-sm border-0 project-card">
                {/* Project Image */}
                <div className="project-img-wrapper">
                  <img src={p.image} alt={p.title} className="project-img" />
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{p.title}</h5>
                  <p className="card-text text-muted">{p.desc}</p>

                  {/* Tech badges */}
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className={`badge tech-badge ${t.toLowerCase()}`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto d-flex gap-2">
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                      <FaExternalLinkAlt className="me-1" /> Live Demo
                    </a>
                    <a href={p.code} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm">
                      <FaCode className="me-1" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
