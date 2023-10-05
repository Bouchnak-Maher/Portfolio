import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { brief, education } from '../../utils/Icons';
import TimelineItem from '../TimelineItem/TimelineItem';

function Timeline() {
    const theme= useTheme()
    return (
        <TimelineStyled theme={theme}>
            <div className="education-timeline timeline">
                <TimelineItem 
                    duration={'2015 - 2019'}
                    title={'High School diploma-Ibn Sina High school'}
                    desc={'Mahdia'}
                    icon={education}
                />
                <TimelineItem
                    duration={'2019 - 2021'}
                    title={'Pre-engineering degree – Sfax Preparatory Engineering Institute'}
                    desc={'Monastir'}
                    icon={education}
                />
                <TimelineItem
                    duration={'2021 - 2024'}
                    title={'Engineering degree – National Engineering School of Sfax Computer science engineering'}
                    desc={'Sfax'}
                    icon={education}
                />
            </div>
            <div className="jobs-timeline timeline">
                <TimelineItem
                    duration={'June 2023 - Aug  2023 '}
                    title={'Development Internship : Web Development - Full Stack Spring Boot Angular:ADS&CO'}
                    desc={
                        <div>
                            Design and development of a web application based on Spring Boot (microservices) and Angular.<br />
                            Objective: Facilitate online appointments and manage customers, employees and services for a hair salon.<br />
                            Technology Used: Spring boot (Config Server, API Gateway, Spring Cloud Netflix Eureka), MySQL, Angular.
                        </div>
                    }                    icon={brief}
                />
              
                <TimelineItem
                    duration={'Feb 2023 - June 2023'}
                    title={'End of year project : Web Development - Backend Spring Boot '}
                    desc={' Creation of a web application to centralize patient medical data.Objective: Simplify coordination between medical professionals (doctors, pharmacies, laboratories).Reduce paperwork and travel for patients.Technology Used: Spring Boot (microservices architecture),Template,Thymeleaf,MySQL,JavaScript. '}
                    icon={brief}
                />
                 <TimelineItem
                    duration={'Jun.-July.2022 '}
                    title={'Development Internship: Web Development - Full Stack PHP Native:Alfa Computers & Consulting'}
                    desc={'Blog Website Development of a World Cup website provides the following features: Blogger authentication , User management (bloggers),  Article management, Tag management, Validation  of comments.Tools: PHP, MySQL, Html, CSS, Bootstrap,  Javascript'}
                    icon={brief}
                />
            </div>
        </TimelineStyled>
    )
}

const TimelineStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 2rem;
    .timeline{
        background-color: ${(props) => props.theme.colorBg5};
        padding: 2rem;
        border-radius: 10px;
    }

    .jobs-timeline{
        .icon{
            left: -10px;
        }
    }
`;

export default Timeline
