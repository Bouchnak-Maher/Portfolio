import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import ServiceItem from '../ServiceItem/ServiceItem'
import Title from '../Title/Title'
import { code, design, desktop } from '../../utils/Icons'


function Services() {
    const theme = useTheme()
    return (
        <ServicesStyled id='services' theme={theme}>
            <Title name={'Services'}  />
            <div className="services-con">
                <ServiceItem 
                    icon={design} 
                    
                    title={'Web Design'}
                    bg={theme.colorPurple}
                    shadow={theme.shadowPurple}
                    desc={'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.'}
                />
                <ServiceItem 
                    icon={desktop}
                    title={'Artificial intelligence'}
                    bg={theme.colorGreenDark}
                    shadow={theme.shadowGreen}
                    desc={'Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision'}
                />
                <ServiceItem 
                    icon={code}
                    title={'Web Development'}
                    shadow={theme.shadowPrimary}
                    bg={theme.colorPrimary}
                    desc={'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.'}
                />
            </div>
        </ServicesStyled>
    )
}

const ServicesStyled = styled(SectionLayout)`
    background: ${(props) => props.theme.colorBgGrad};
    .services-con{
        margin-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 2rem;
    }
`;

export default Services