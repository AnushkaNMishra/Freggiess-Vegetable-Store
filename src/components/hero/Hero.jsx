import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-text-container">
            <p className="hero-title">
            Welcome&nbsp;to&nbsp; Freggies</p>
            <p className="hero-desc">A Community Fruit and Vegetable Market</p>
        </div>
        <div className="hero-img-container">
            <img src="src\assets\hero.jpg" alt="hero-img" />
        </div>
    </div>
  )
}

export default Hero