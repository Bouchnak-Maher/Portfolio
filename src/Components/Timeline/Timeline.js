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
                    duration={'Jun.-Aug.2022 '}
                    title={'Alfa Computers & Consulting– internship'}
                    desc={'Blog Website Development of a World Cup website provides the following features: Blogger authentication , User management (bloggers),  Article management, Tag management, Validation  of comments.Tools: PHP, MySQL, Html, CSS, Bootstrap,  Javascript'}
                    icon={brief}
                />
               <TimelineItem
                    duration={'Jun.-Aug.2022 '}
                    title={'Alfa Computers & Consulting– internship'}
                    desc={'Blog Website Development of a World Cup website provides the following features: Blogger authentication , User management (bloggers),  Article management, Tag management, Validation  of comments.Tools: PHP, MySQL, Html, CSS, Bootstrap,  Javascript'}
                    icon={brief}
                />
                <TimelineItem
                    duration={'Feb.-Jun. 2023'}
                    title={'End of year project'}
                    desc={' Development of a thin client-oriented application for centralizing patient data and computerized data exchange Tools: Spring boot-MySQL-html – Css - javascript – bootstrap - Jquery  '}
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
