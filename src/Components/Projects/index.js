import "./style.css";
import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";

const Projects = () => {
  return (
    <div class="container">
      <h1>Projects</h1>
      <div className="card">
        <img src={project1} alt="Project 1" />
        <div className="overlay">
          <h3>Car Parking System</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <a href="/" className="btn">
            View Details
          </a>
        </div>
      </div>
      <div className="card">
        <img src={project2} alt="Project 1" />
        <div className="overlay">
          <h3>Car Parking System</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <a href="/" className="btn">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
