import { Accordion, AccordionDetails, AccordionSummary, Container, Paper } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";

export default function AboutBlock(){
    const [expanded, setExpanded] = useState('panel1')

    function handleChange(panel){
        setExpanded(panel)
    }

    return (
        <div id="aboutBlock">
            <Container>
                <h6 id="aboutBlockMainText">MORE ABOUT ME</h6>
                
                <div id="dropdown">
                    <Accordion name='panel1' expanded={expanded === 'panel1'} onChange={() => handleChange('panel1')} sx={{bgcolor:'rgb(0,0,0,0)', color:'rgb(255,255,255)'}} elevation={0}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            My Background
                        </AccordionSummary>
                        <AccordionDetails>
                            In 2022 I decided to pursue a software development carreer by starting my education with Flatiron School. In my time at Flatiron School I designed and developed multiple full-stack applications that use ReactJS frontends and Ruby on Rails backend APIs, and now that I have graduated I've been learning NodeJS with Express and I will continue to expand my tech-stack. Through my proffesional experience in food service, I have gained a lot of valuable skills in team working and leading which would make me a great addition to any team.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion name='panel2' expanded={expanded === 'panel2'} onChange={() => handleChange('panel2')} sx={{bgcolor:'rgb(0,0,0,0)', color:'rgb(255,255,255)', marginTop:'-1.25%'}} elevation={0}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            Technologies I Currently Use
                        </AccordionSummary>
                        <AccordionDetails>
                        JavaScript, React, Redux, Ruby on Rails API, Material UI, Git, ActiveRecord, Postgresql, Next.js, Node.js, Express, CSS, HTML, Postman, VsCode
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Container>
        {/* Drop down menu for about and Technologies I use */}
        </div>
    )
}