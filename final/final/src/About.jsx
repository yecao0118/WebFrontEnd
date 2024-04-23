import './About.css';
import Panel from "./Panel";
import about1 from './assets/images/about/about1.png';
import about2 from './assets/images/about/about2.png';
import about3 from './assets/images/about/about3.png';
import about4 from './assets/images/about/about4.png';
import about5 from './assets/images/about/about5.png';
import about6 from './assets/images/about/about6.png';
import about7 from './assets/images/about/about7.png';
import about8 from './assets/images/about/about8.png';
import about9 from './assets/images/about/about9.png';


function About({ setPage }) {
  return (
    <div id='main-content'>
      <div className="about">
        <div className="about-title-container">
          <h1 className="about-title">VAPOR STATION</h1>
          <p className="about-title-slogan">Choose Your Reality</p>
          <p className="about-title-text">We focus on the next generation of gaming, designing narratives and gaming environments for the future world.
            By leveraging gaming formats and applying them to a broader brand landscape, we infuse gaming into everything we do.
            <br /><br />
            Innovation. Imagination. Interaction.
          </p>
        </div>

        <div>
          <Panel
            className="about-section"
            title="ALTERNATE REALITY GAME"
            text="We create multilingual, cross-border ARGs that immerse players in customized, immersive brand experiences, fostering unparalleled brand loyalty."
            images={[
              { src: about1, alt: "icon for expertise 1" },
              { src: about2, alt: "icon for expertise 2" },
              { src: about3, alt: "icon for expertise 3" }
            ]}
            imageTexts={[
              "Multilingual, Cross-Border Play",
              "Customized Immersive Experiences",
              "Fostering Brand Loyalty"
            ]}
          />
          <Panel
            className="about-section-special"
            title="TRANSMEDIA STORYTELLING"
            text="Creating interactive variety shows and web-fictions, we blend gaming experiences into video, social media, and live streaming. Through transmedia  storytelling, we turn audience into active participants, crafting uniquely immersive content."
            images={[
              { src: about4, alt: "icon for expertise 4" },
              { src: about5, alt: "icon for expertise 5" },
              { src: about6, alt: "icon for expertise 6" }
            ]}
            imageTexts={[
              "Blending Gaming with Multimedia",
              "Transmedia Engagement",
              "Uniquely Immersive Content"
            ]}
          />
          <Panel
            className="about-section"
            title="IMMERSIVE EXPERIENCES"
            text="We engineer bespoke brand interactive experiences, merging brand stories, live events, and both physical and virtual encounters. This fosters unforgettable moments, empowering users to become vocal community advocates and creators."
            images={[
              { src: about7, alt: "icon for expertise 7" },
              { src: about8, alt: "icon for expertise 8" },
              { src: about9, alt: "icon for expertise 9" }
            ]}
            imageTexts={[
              "Merging Brand Stories with Interactive Events",
              "Fostering Unforgettable Moments",
              "Empowering Community Advocates"
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default About;