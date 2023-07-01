
import './style.css';
import AhmadHassan from '../../assets/images/Ahmad Hassan.jpg'

const Hero = ()=>{
    return <>
        <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div  class="col-10 col-sm-8 col-lg-6">
        <img style={{borderRadius:'50%'}} src={AhmadHassan} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3 hero-title show">Full Stack Developer</h1>
        <p class="lead">With an expert command over HTML, CSS, and JavaScript,I possesses the technical prowess to transform designs into interactive realities.I meticulously craft visually stunning layouts, ensuring that every pixel aligns flawlessly and captures attention from the very first glance.But it's not just about aesthetics;I understand the art of seamless user experiences.I am specialized in creating intuitive navigation, smooth transitions, and engaging animations that guide visitors through our website with ease and delight.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">LinkedIn</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Resume</button>
        </div>
      </div>
    </div>
  </div>
    </>
}

export default Hero;