import "./CodeEcho.css";
import { useState } from "react";
import Accordion from './Accordion';
import { accordionData } from './AccordionData';


function CodeEcho() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='code-echo'>
            <div className='code-echo-title-container'>
                <h1 className='code-echo-title'>CODE ECHO</h1>
            </div>
            <div id="main-content">
            <div className="about-code-echo">
                <h2 className="code-echo-subtitle">About Code Echo</h2>
                <p className="work-description">First Commercial ARG in China</p>
                <div className="basic-intro">
                    <h3 className="basic-intro-title">REBOOT THE FUTURE</h3>
                    <p className="basic-intro-text">
                        In 2050, artificial intelligence has become the infrastructure of human society.
                        People rely on AI to manage production and make decisions that impact all aspects of life.
                        Disaster strikes. A massive solar storm hits Earth, causing severe damage to global technological infrastructure.
                        Cities descend into chaos, communication networks collapse, and AI systems malfunction.
                        The world, which had become so reliant on artificial intelligence, suddenly finds itself in turmoil.
                        Nations unite to form a special task force, the Joint Special Operations Committee, to address the crisis and rebuild a universal AI system for humanity, codenamed Echo.
                        <br /> <br /> <br />
                        In this unprecedented reconstruction of the digital civilization, AI repair technician Ning and her team discover that,
                        due to the loss of vast amounts of data, relying solely on the resources of the present era is no longer sufficient.
                        After countless restless days and nights, they attempt to travel back to the year of AGI emergence,
                        seeking assistance from humanity in 2023.
                        <br /> <br /> <br />
                        You will become an AI repair technician, uploading data from the AGI era and aiding future humans in rebuilding a new AI system, under the codename Echo.
                    </p>
                </div>
                <div className="accordion-container">
                    <div className="accordion">
                        {accordionData.map(({ title, content }) => (
                            <Accordion
                                key={title}
                                title={title}
                                content={content}
                                isOpen={isOpen}
                                toggleAccordion={toggleAccordion}
                            />
                        ))}
                    </div>


                </div>

            </div>

        </div>
        </div>
    );
}

export default CodeEcho;
