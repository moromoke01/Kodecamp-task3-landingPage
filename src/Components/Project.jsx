
import projectImg1 from '../assets/project-img1.png';
import projectImg2 from '../assets/project-img2.png';
import projectImg3 from '../assets/project-img3.png';
import projectImg4 from '../assets/project-img4.png';

const Project = () => {
  return (
    <div className='project'>

        <p>Our Projects</p>
      <div className='project-img-grid'>
          <img src={projectImg1} alt="projectImg1" />
          <img src={projectImg3} alt="projectImg3" />
          <img src={projectImg2} alt="projectImg2" />
          <img src={projectImg3} alt="projectImg3" />
          <img src={projectImg4} alt="projectImg" />
      </div>
      
      <button>All Projects</button>
    </div>
  )
}

export default Project
