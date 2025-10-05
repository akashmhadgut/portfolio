import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import './about.css'
import { FaArrowRight, FaBootstrap, FaCss3, FaDatabase, FaGift, FaGit, FaHtml5, FaJs, FaNode, FaReact } from 'react-icons/fa6';
import { SiExpress, SiMongodb, SiNetlify } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { FaTools, FaUser } from 'react-icons/fa';

 
function About() {
  return (
    <section id="about" className="py-5 bg-dark text-white">
      <Container>
          <div className="heading text-center mb-5">
                  <FaUser size={120} className="icon bg-primary" />
                  <h2 className="fw-bold">About Me</h2>
                </div>
        <Row className="align-items-center justify-content-center mb-5">
          <Col md={3} className="text-center">
            <img
              src="src/profilepic.jpg"
              alt="Profile"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: '160px', objectFit: 'cover' }}
            />
            <h3 className="mt-3">Akash Mhadgut</h3>
            <h5 className="text-info mt-2">
              <Typewriter
                words={['Full Stack Developer', 'Building Web Apps', 'Loving React ❤️']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h5>
          </Col>

          <Col md={9}>
            <p className="lead">
              Hi, I’m <strong>Akash Mhadgut</strong>, a recent BCA graduate passionate about
              building clean, responsive, and user-friendly web applications.
            </p>
            <p>
              I specialize in <strong>React, JavaScript, HTML, CSS, and Bootstrap</strong>. I enjoy turning
              ideas into functional projects and continuously learning modern web development tools to
              stay ahead in the field.
            </p>
            <p>
              Currently, I’m working on small React projects to sharpen my frontend development skills
              and preparing for my first role as a <strong>Frontend Developer</strong>.
            </p>

            <div className="d-flex gap-3 mt-4">
              <Button variant="outline-light" href="#contact">Get In Touch</Button>
              <Button variant="info" href="#project" className="text-white">View My Work</Button>
            </div>
          </Col>
        </Row>

        {/* Skills Section */}
        <div className='glass-card mb-5 p-4'>
        <h2 className="text-center mb-5 ">🛠️Skills</h2>
        <Row className="gy-4 gx-4  ">
          <Col md={4} >
            <div className="p-4  text-dark rounded-4 shadow-sm h-100 skill-cards">
              <h5 className="fw-bold mb-3 ">Frontend Development</h5>
              <ul className="list-unstyled ps-2 ">
                <li><FaHtml5></FaHtml5> HTML</li>
                <li> <FaCss3></FaCss3> CSS</li>
                <li> <FaJs></FaJs> JavaScript</li>
                <li> <FaReact></FaReact> React</li>
                <li> <FaBootstrap></FaBootstrap> Bootstrap</li>

              </ul>
            </div>
          </Col>


          <Col md={4}>
            <div className="p-4   text-dark rounded-4 shadow-sm h-100 skill-cards">
              <h5 className="fw-bold mb-3">Backend Development</h5>
              <ul className="list-unstyled ps-3">
                <li><FaNode></FaNode> Node.js</li>
                <li> <SiExpress></SiExpress> Express.js</li>
                <li><SiMongodb></SiMongodb> MongoDB</li>
                <li><FaDatabase></FaDatabase> REST APIs</li>
              </ul>
            </div>
          </Col>

          <Col md={4}>
            <div className="p-4   text-dark rounded-4 shadow-sm h-100 skill-cards">
              <h5 className="fw-bold mb-3">Tools & Platforms</h5>
              <ul className="list-unstyled ps-3">
  <li><FaGit style={{ color: '#f1502f' }} /> Git & GitHub</li>
  <li><VscJson style={{ color: '#007ACC' }} /> VS Code</li>
  <li><SiNetlify style={{ color: '#38bdf8' }} /> Netlify / Vercel</li>
  <li><FaTools style={{ color: '#6c757d' }} /> Chrome DevTools</li>
</ul>

            </div>
          </Col>
        </Row>
        </div>
      </Container>
    </section>
  );
}

export default About;
