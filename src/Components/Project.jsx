import projectImg0 from '../assets/project-img0.png';
import projectImg1 from '../assets/project-img1.png';
import projectImg2 from '../assets/project-img2.png';
import projectImg3 from '../assets/project-img3.png';
import projectImg4 from '../assets/project-img4.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import './Project.css'; // Import CSS file for styling

const Project = () => {
  return (
    <div className='project'>
      <p>Our Projects</p>
      <div className='project-img-grid'>
        <div className="FirstProjectImg">
          <img src={projectImg0} alt="projectImg0" />
          <div className="project-info">
            <h2 className="content">Sample Project</h2>
            <p className="description">This is a description of the sample project. You can add more details here.</p>
          </div>
        </div>
        <img src={projectImg1} alt="projectImg1" />
        <img src={projectImg3} alt="projectImg3" />
        <img src={projectImg2} alt="projectImg2" />
        <img src={projectImg3} alt="projectImg3" />
        <img src={projectImg4} alt="projectImg4" />
      </div>
      <button>All Projects <IoIosArrowRoundForward /></button>
    </div>
  )
}

export default Project;
