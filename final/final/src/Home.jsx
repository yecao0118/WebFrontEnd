import './Home.css';
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import Button from './Button';

function Home() {

  return (
    
      <div className='home'>
        <div className='home-title-container'>
          <h1 className='home-title'>VAPOR STATION</h1>
        </div>
        <div id='main-content'>
        <div className='home-content-container'>
          <h2 className='home-subtitle'>FIND US</h2>
          <p className='home-text-1'>
          Unearth all clues about Vapor, including their products, employees' social media, interviews with leaders, and perhaps even resort to unconventional methods, like hacking into specific systems. 
          Your ultimate goal is to uncover Vapor's hidden operations and the true purpose behind this recruitment, and successfully qualify for the recruitment program.
          </p>
          <Button
            className="home-button"
            onClick={() => window.open('https://playerinmetaverse6.wixsite.com/vapor', '_blank')}
            type='button'
            visual='button'
          >
            PLAY NOW
          </Button>

          <p className='home-text-2'>you will step into the shoes of an applicant participating in a special talent recruitment test for the mixed-reality game company, Vapor. 
          This company is a metaverse gaming company, but they aspire to achieve much more than what meets the eye...
          </p>
          <img className='home-image-1' src={image1} alt='vapor' />
          <img className='home-image-2' src={image2} alt='find us ' />
        </div>
      </div>
    </div>
  )
}

export default Home;