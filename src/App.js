import React, { useState } from 'react';
import './App.css'; 
import programmerImage from './img/undraw_programmer_raqr.png';
import imageImage from './img/image.png';
import vaccine from './img/vaccine.jpeg';
import OCA from './img/OCA.png';
import VOLUNTEER_WORKS from './img/VOLUNTEER_WORKS.jpeg';
import ebu from './img/ebu.png';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <nav>
        <input type="checkbox" className="checkbox" id="check" checked={menuOpen} onChange={toggleMenu} />
        <h1 className="nav_head">Tuqa.</h1>
        <ul className={menuOpen ? 'open' : ''}>
          <li><a href="#Home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#Skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#work" onClick={() => setMenuOpen(false)}>Work</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#Training_courses" onClick={() => setMenuOpen(false)}>Training Courses</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
        <label htmlFor="check" className="checkbtn" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </label>
      </nav>

      <section id="Home" className="home">
      <img src={programmerImage} alt="Tuqa Al-Islam Jaradat" width="300" height="250" />   
       <div className="description">
          <h1>Hello, I'm<br /><span>Tuqa Al-Islam Jaradat</span></h1>
          <h2>About me...</h2>
          <p><strong>Junior Full Stack Developer</strong></p>
          <p>Skilled in developing user-centric web applications, with practical experience from projects at Orange Coding Academy where I collaborated within a team.</p>
          <p>I have solid foundational skills in HTML, CSS, PHP, and JavaScript, and I focus on writing clean and efficient code.</p>
          <p>I'm excited to work in an innovative web development team to continue growing and sharpening my skills.</p>
        </div>
        <a href="/files/tuqa%20Jaradat%20CV.pdf" className="cv_button" download>Download CV</a>
                </section>

      <section id="Skills" className="skills">
        <div className="skills_section">
          <h1>Skills</h1>
          <div className="skill_list">
            <SkillItem icon="fas fa-file-alt" text="Office Applications" />
            <SkillItem icon="fas fa-lightbulb" text="Problem Solving" />
            <SkillItem icon="fas fa-keyboard" text="Data Entry" />
            <SkillItem icon="fas fa-comments" text="Effective Communication" />
            <SkillItem icon="fas fa-clock" text="Time Management" />
            <SkillItem icon="fas fa-users" text="Teamwork" />
            <SkillItem icon="fas fa-brain" text="Quick Learning" />
            <SkillItem icon="fas fa-heart" text="Patience" />
          </div>
          <hr />
          <h1>Education</h1>
          <p>Bachelor's: Management and Information Systems, Al-Balqa' Applied University, Amman (Sep 2019 – Jul 2023)</p>
          <div className="about_photo">
            <img src= {imageImage} alt="Skills illustration" />
          </div>
        </div>
      </section>

      <section id="work">
        <h1 className="work_section"><span>Work</span></h1>
        <div className="project">
          <WorkCard 
            imgSrc={vaccine}
            imgAlt="Vaccine program" 
            title="Data Entry" 
            description="MINISTRY OF HEALTH - National Vaccination Program (2021). Data entry specialist with Orange – Jordan Vaccine Village in Amman." 
          />
          
          <WorkCard 
            imgSrc={OCA}
            imgAlt="Full-stack" 
            title="Full-Stack Development" 
            description="Orange Coding Academy Trainee (Jan 2025 – May). Developed front-end (HTML, CSS, JS), back-end services, and managed SQL databases." 
          />
          
          <WorkCard 
            imgSrc={VOLUNTEER_WORKS}
            imgAlt="Volunteering" 
            title="Volunteer" 
            description="Participated in volunteer activities such as the Clothing Bank, helping orphans, and organizing Ramadan events." 
          />
          
          <WorkCard 
            imgSrc={ebu}
            imgAlt="EBU Projects Coordination" 
            title="EBU Projects Coordination" 
            description="Completed university field training in project coordination and follow-up at Jordan Telecom Group (Orange)." 
          />
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h1 className="projects_section"><span>Projects</span></h1>
        <div className="projects_grid">
          <ProjectCard 
            title="Watch Store E-Commerce" 
            description="E-Commerce website using HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, following MVC pattern." 
            role="Developer in a team project." 
            link="https://github.com/tuqajr/watch-store" 
          />
          
          <ProjectCard 
            title="Workout Fitness Website" 
            description="Dynamic and responsive fitness site using HTML, CSS, JS, and APIs to promote wellness." 
            role="Scrum Master – task organizer and team lead." 
            link="https://github.com/tuqajr/workout-fitness" 
          />
          
          <ProjectCard 
            title="Johotel" 
            description="Greenfield Web Application Responsive personal site using Laravel Framework, PHP, HTML, CSS, JavaScript" 
            role="Product owner & Developer" 
            link="https://github.com/tuqajr/booking" 
          />
        </div>
      </section>

      <section id="Training_courses">
        <h1 className="Training_section"><span>Training Courses</span></h1>
        <div className="card">
          <TrainingCard icon="fas fa-star-half-alt" text="2024<br/>TTM1 - Training of Trainers - DTDA" />
          <TrainingCard icon="fas fa-laptop-code" text="2024<br/>Skills Train Education Program (STEP) - BDC" />
          <TrainingCard icon="fa fa-project-diagram" text="2024<br/>Project Management Professional (PMI-PMP)" />
          <TrainingCard icon="fa fa-users" text="2023<br/>Team Work and Leadership" />
        </div>
      </section>

      <footer>
        <section id="contact">
          <div className="footer">
            <a href="https://www.linkedin.com/in/tuqa-jaradat-836405290/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/tuqajr" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:tuqaalislam2001@gmail.com">
              <i className="far fa-envelope"></i>
            </a>
            <p>&copy; 2025 My Portfolio</p>
          </div>
        </section>
      </footer>
    </div>
  );
}

// Component for skill items
function SkillItem({ icon, text }) {
  return (
    <div className="skill_item">
      <i className={icon}></i>
      <p>{text}</p>
    </div>
  );
}

// Component for work cards
function WorkCard({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="work_card">
      <img src={imgSrc} alt={imgAlt} width="400" height="220" />
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Component for project cards
function ProjectCard({ title, description, role, link }) {
  return (
    <div className="project_card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Role:</strong> {role}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
}

// Component for training cards
function TrainingCard({ icon, text }) {
  return (
    <div className="Training_card">
      <i className={icon}></i>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
}

export default App;