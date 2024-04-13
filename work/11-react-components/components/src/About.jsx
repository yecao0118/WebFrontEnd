import Card from "./Card";
import './About.css';
import image2 from './assets/images/2.jpg';
import image3 from './assets/images/3.jpg';

function About({ setPage }) {
    return (
      <div className="about">
        <h2 className="about-title">About Our Dogs</h2>
        <div className="cards-container">
          <Card
            className="card"
            title="Milo"
            pic={image2}
            alt="Golden Retriever Puppy"
            text="Milo is a Pembroke Welsh Corgi with a love for short runs and long naps in the sun. His short stature doesn't limit his big personality."
            linkText="Contact Me >"
            onNavigate={() => setPage('/contact')}
          />
  
          <Card
            className="card"
            title="Buddy"
            pic={image3}
            alt="Puppy in Banana PJs"
            text="Buddy is a cheerful Labrador Retriever who loves playing fetch and swimming. Always eager to please, he's the perfect family dog."
            linkText="Contact Me >"
            onNavigate={() => setPage('/contact')}
          />
        </div>
      </div>
    );
  }
  
  export default About;