import './Events.css';

const Events = () => {
  return (
    <div className="events-container">
      <div className="events-text">
        <p className="event-title">Recent Events</p>
        <p className="event-desc">Here’s What’s Happening at Your Local Fruit and Vegetable Market</p>
      </div>
      <div className="events-cards">
        <div className="event-card">
          <div className="event-card-img-container">
            <img src="https://static.wixstatic.com/media/12267a1aa0fa4617ba1ef4dca32cca2c.jpg/v1/fill/w_524,h_405,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/12267a1aa0fa4617ba1ef4dca32cca2c.jpg" alt="volunteer" />
          </div>
          <div className="event-card-text">
            <p className="event-card-title">Volunteer Day</p>
            <p className="event-card-date">March 22, 2023</p>
          </div>
        </div>
        <div className="event-card">
          <div className="event-card-img-container">
            <img src="https://static.wixstatic.com/media/9b77fa5117c84a6582e51d05435505af.jpg/v1/fill/w_524,h_405,fp_0.48_0.49,q_80,usm_0.66_1.00_0.01,enc_auto/9b77fa5117c84a6582e51d05435505af.jpg" alt="weekend" />
          </div>
          <div className="event-card-text">
            <p className="event-card-title">Weekend Carnival</p>
            <p className="event-card-date">June 02, 2023</p>
          </div>
        </div>
        <div className="event-card">
          <div className="event-card-img-container">
            <img src="https://static.wixstatic.com/media/948101d550964349b0d101cfd7add3dd.jpg/v1/fill/w_524,h_405,fp_0.46_0.43,q_80,usm_0.66_1.00_0.01,enc_auto/948101d550964349b0d101cfd7add3dd.jpg" alt="sandwich" />
          </div>
          <div className="event-card-text">
            <p className="event-card-title">Sandwich Festival</p>
            <p className="event-card-date">August 18, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
