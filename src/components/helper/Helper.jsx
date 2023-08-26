
  import './Helper.css';
  import Farm from '../../assets/farm1e.jpg';
  import Farm2 from '../../assets/farm2e.jpg';

  const Helper = () => {
    return (
      <div className="helper-container">
        <div className="slider  1">
          <input type="radio" name="toggle" id="btn-1" checked />
          <input type="radio" name="toggle" id="btn-2" />
          <input type="radio" name="toggle" id="btn-3" />
  
          <div className="slider1-controls">
            <label htmlFor="btn-1"></label>
            <label htmlFor="btn-2"></label>
            <label htmlFor="btn-3"></label>
          </div>
          <ul className="slides">
            <li className="slide">
              <p className="slide-image">
                <img src={Farm2} alt="stuff" />
              </p>
            </li>
            <li className="slide">
              <p className="slide-image">
                <img src={Farm} alt="stuff" />
              </p>
            </li>
            <li className="slide">
              <p className="slide-image">
                <img src={Farm} alt="stuff"  />
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Helper;
  