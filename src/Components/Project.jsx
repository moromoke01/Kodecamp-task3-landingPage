import projectImg0 from '../assets/project-img0.png';
import projectImg1 from '../assets/project-img1.png';
import projectImg2 from '../assets/project-img2.png';
import projectImg3 from '../assets/project-img3.png';
import projectImg4 from '../assets/project-img4.png';
import { IoIosArrowRoundForward } from "react-icons/io";

const Project = () => {
  return (
    <div className='project'>

        <p>Our Projects</p>
      <div className='project-img-grid'>
          <div className="FirstProjectImg"><img src={projectImg0} alt="projectImg0" /> <h2 className="content">Sample Project</h2></div>
          <img src={projectImg1} alt="projectImg1" />
          <img src={projectImg2} alt="projectImg2" />
          <img src={projectImg3} alt="projectImg3" />
          <img src={projectImg4} alt="projectImg" />
      </div>
      
      <button>All Projects <IoIosArrowRoundForward /></button>
    </div>
 )
}

export default Project