import "../css/dentistry.css";
import dental from "../images/treatments/dental.jpg";
import dental0 from "../images/treatments/dental0.jpg";
import dental1 from "../images/treatments/dental1.jpg";
import dental2 from "../images/treatments/dental2.jpg";
import dental3 from "../images/treatments/dental3.jpg";
import dental4 from "../images/treatments/dental4.jpg";

function Dentistry() {
  return (
    <div className="dentistry treatments">
      <div>
        <div className="content">
          <h1>Best Dentistry Services You Can Trust.</h1>
          <p>
            If you are looking for a reliable dentist in town, we are here to
            help. We are known for the best, affordable, and painless dental
            treatments with quick appointments and timely solutions.
          </p>
        </div>
        <img src={dental} alt="" />
      </div>
      <div>
        <img src={dental0} alt="" />
        <div>
          <div className="content">
            <span className="sub_heading">About Us</span>
            <h1>Certified Dentists Committed to Excellence</h1>\
            <p>
              We are a team of 3 certified dentists specialised in offering the
              best dental treatments in town. With adequate experience of over
              12 years, we have mastered the skills of offering the best
              solutions with the latest technologies.
            </p>
          </div>
        </div>
      </div>
      <h1>All Your Dental Needs at One Place</h1>
      <div>
        <div className="content">
          <h1>Cosmetic Dentistry</h1>
          <p>
            Need help with teeth bleaching, enamel bonding and more? You can
            count on us for the best cosmetic services.
          </p>
        </div>
        <img src={dental1} alt="" />
      </div>
      <div>
        <img src={dental2} alt="" />
        <div className="content">
          <h1>Dental X-Rays​</h1>
          <p>
            X-rays help us reach the root cause of trouble and that’s where we
            like to dig in and help you with the right treatment.
          </p>
        </div>
      </div>
      <div>
        <div className="content">
          <h1>Root Canals​</h1>
          <p>
            Root canals can be painful. But, we assure the most painless and
            tension-free root canal treatments in town.
          </p>
        </div>
        <img src={dental3} alt="" />
      </div>
    </div>
  );
}

export default Dentistry;
