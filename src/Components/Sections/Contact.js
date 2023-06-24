import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'

import Title from '../Title/Title'
import map from '../../img/map.png'

import Button from '../Button/Button'
import { FiPhone } from 'react-icons/fi';

import { FaFacebook, FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';


function Contact() {
    const theme = useTheme()
    return (
        <ContactStyled id='contact' theme={theme}>
            <Title name={'Lets Talk'}  />
            
           
            <div className="contact-info">
                <div className="map-section">
                <h1><br></br>CONTACT ME !</h1>
                <h4><br></br>Don't hesitate to contact me if you have new projects, creative ideas, or opportunities<br></br> that align with your visions.<br></br> I'm always open to discussing these possibilities <br></br>and willing to offer my help in any way I can.</h4>
                <br></br> <br></br>
                    <div className="contact-icons">
                        <a  target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="icon" />     &nbsp;  Mail Me : &nbsp;&nbsp;maher.bouchnak@enis.tn
                        </a><br></br><br></br>
                        <a href="" target="_blank" rel="noopener noreferrer">
                        <a href="tel:+21654843988">
                        <FiPhone className="icon" />&nbsp;&nbsp;
                        Call ME:&nbsp;&nbsp;  +216 54 843 988
                        </a>
                        </a><br></br><br></br>
                        <a href="https://www.facebook.com/maher.bouchnak/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/bouchnak-maher-204a06224/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://www.instagram.com/meher.bouchnak/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" />
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/Bouchnak-Maher" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;
                        
                    </div>
                    <img src={map} alt="" />
                </div>
                <form action="" className="form-section">
                    <div className="input-control">
                        <input type="text" placeholder='Your name' />
                        <input type="email" placeholder='Email address' />
                    </div>
                    <div className="input-control">
                        <input type="text" placeholder='Subject' />
                    </div>
                    <div className="input-control">
                        <textarea name="" id="" cols="30" rows="6" placeholder='Message'></textarea>
                    </div>
                    <div className="btn-con">
                        <Button
                            name="Send Message"
                            blob="blob"
                            bg={theme.colorPrimary}
                            color={theme.colorWhite}
                            bFw={'600'}
                            onClick="onClick"
                            bRad={'30px'}
                            bPad={theme.bPad1}
                        />
                    </div>
                </form>
            </div>
        </ContactStyled>
    )
}

const ContactStyled = styled(SectionLayout)`
    position: relative;
    .subscribe-con{
        position: absolute;
        top: -240px;
        left: 0;
        width: 100%;
        padding-right: 18rem;
        @media screen and (max-width: 1600px){
            padding-right: 10rem;
        }
        @media screen and (max-width: 1150px){
            padding-right: 6rem;
        }
        @media screen and (max-width: 1255px){
            padding-right: 0;
            margin: 0;
        }
        @media screen and (max-width: 653px){
            top: -270px;
        }
    }

    .contact-info{
        display: flex;
        gap: 2rem;
        margin-top: 3.rem;
        @media screen and (max-width: 973px){
            flex-direction: column;
        }
        .map-section{
            width: 40%;
            position: relative;
            img{
                width: 100%;
                object-fit: cover;
                opacity: 0.1;
            }
        }
        .form-section{
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            .input-control{
                display: flex;
                gap: 1rem;
                input, textarea{
                    width: 100%;
                    padding: 1rem 1.5rem;
                    border-radius: 30px;
                    font-size: inherit;
                    outline: none;
                    border: none;
                    font-family: inherit;
                    resize: none;
                }
            }
        }
    }
`;

export default Contact