import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled Components
const PageContainer = styled.div`
  padding: 120px 5% 80px;
  min-height: 100vh;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 80px;
  color: ${props => props.theme.colors.secondary};
  position: relative;
  letter-spacing: -1px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 60px;
    height: 1px;
    background-color: ${props => props.theme.colors.highlight};
  }
`;

const IntroText = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 60px;
  max-width: 900px;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 80px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled.div`
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  position: relative;
  transition: all 0.5s ease;
  padding: 30px 25px;
  border-left: 1px solid ${props => props.theme.colors.highlight};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(155, 133, 121, 0.05) 0%, rgba(0, 0, 0, 0) 50%);
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ExperienceIcon = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${props => props.theme.colors.highlight};
  margin-bottom: 20px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 1px;
    background-color: ${props => props.theme.colors.highlight};
    transition: width 0.4s ease;
  }
  
  ${ExperienceCard}:hover &::after {
    width: 50px;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.secondary};
  letter-spacing: 0.5px;
`;

const ExperienceText = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: ${props => props.theme.colors.textSecondary};
  position: relative;
  padding-bottom: 5px;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: width 0.5s ease;
  }
  
  ${ExperienceCard}:hover &::after {
    width: 100%;
  }
`;

const ShowroomSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(to right, rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.7)), url('/images/lex_show.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin-bottom: 100px;
`;

const ShowroomContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const ShowroomTitle = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 30px;
`;

const ShowroomText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ShowroomGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const GalleryImage = styled.div`
  height: 300px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${props => props.theme.colors.highlight};
    transition: width 0.4s ease;
    z-index: 2;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
  }
  
  &:hover {
    &::before {
      opacity: 1;
    }
    
    &::after {
      width: 100%;
    }
    
    img {
      transform: scale(1.05);
    }
  }
`;

const TestDriveSection = styled.section`
  padding: 0 5% 80px;
`;

const TestDriveContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const TestDriveContent = styled.div`
  flex: 1;
`;

const TestDriveTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 20px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 1px;
    background-color: ${props => props.theme.colors.highlight};
  }
`;

const TestDriveText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 25px;
`;

const TestDriveImage = styled.div`
  flex: 1;
  height: 400px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 300px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.secondary};
  font-size: 0.9rem;
  font-weight: 400;
  padding: 15px 40px;
  border: 1px solid ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: ${props => props.theme.colors.highlight};
    transition: height 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: -1;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.highlight};
    
    &::after {
      height: 100%;
    }
  }
`;

const ExperiencePage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <PageContainer>
      <PageTitle>The Lexus Experience</PageTitle>
      
      <IntroText>
        At Lexus, we believe luxury goes beyond the vehicle itself. It's about creating memorable experiences, forging emotional connections, and ensuring every interaction exceeds expectations. Discover what makes the Lexus experience truly exceptional.
      </IntroText>
      
      <ExperienceGrid>
        <ExperienceCard>
          <ExperienceIcon>✦</ExperienceIcon>
          <ExperienceTitle>Takumi Craftsmanship</ExperienceTitle>
          <ExperienceText>Every Lexus is built with meticulous attention to detail by our master craftsmen, ensuring unparalleled quality in every element of your vehicle. The Takumi masters have dedicated their lives to perfecting their craft, with skills honed over decades of practice.</ExperienceText>
        </ExperienceCard>
        
        <ExperienceCard>
          <ExperienceIcon>✦</ExperienceIcon>
          <ExperienceTitle>Innovative Technology</ExperienceTitle>
          <ExperienceText>Pioneering advancements that enhance your driving experience while maintaining intuitive control, setting new standards in automotive innovation. From hybrid powertrains to advanced safety systems, our technology is designed to anticipate and meet your needs.</ExperienceText>
        </ExperienceCard>
        
        <ExperienceCard>
          <ExperienceIcon>✦</ExperienceIcon>
          <ExperienceTitle>Omotenashi Service</ExperienceTitle>
          <ExperienceText>Experience our unique approach to hospitality, anticipating your needs before you even express them. True luxury is in the details of our service. Omotenashi represents our commitment to treating every customer as an honored guest in our home.</ExperienceText>
        </ExperienceCard>
        
        <ExperienceCard>
          <ExperienceIcon>✦</ExperienceIcon>
          <ExperienceTitle>Performance Heritage</ExperienceTitle>
          <ExperienceText>From the legendary LFA supercar to our F Sport models, performance is in our DNA. Every Lexus delivers a driving experience that combines exhilaration with refinement, created through extensive testing at the most demanding racetracks around the world.</ExperienceText>
        </ExperienceCard>
        
        <ExperienceCard>
          <ExperienceIcon>✦</ExperienceIcon>
          <ExperienceTitle>Design Philosophy</ExperienceTitle>
          <ExperienceText>Our distinctive design language combines bold, avant-garde elements with timeless elegance. Inspired by Japanese aesthetics and craftsmanship, Lexus vehicles make a powerful visual statement while maintaining a sense of sophistication and harmony.</ExperienceText>
        </ExperienceCard>
        
        <ExperienceCard>
          <ExperienceIcon>✦</ExperienceIcon>
          <ExperienceTitle>Ownership Benefits</ExperienceTitle>
          <ExperienceText>Lexus ownership extends beyond the vehicle itself with comprehensive warranty coverage, complimentary maintenance services, roadside assistance, and exclusive events designed to enhance your relationship with your vehicle and our brand.</ExperienceText>
        </ExperienceCard>
      </ExperienceGrid>
      
      <ShowroomSection>
        <ShowroomContent>
          <ShowroomTitle>Visit Our Showrooms</ShowroomTitle>
          <ShowroomText>
            Our showrooms are designed to be more than just retail spaces. They are immersive environments where you can experience the Lexus brand through all your senses. From the architectural design to the personalized service, every element reflects our commitment to exceptional hospitality.
          </ShowroomText>
          <Button onClick={() => window.open('https://www.google.com/maps/search/lexus+showroom', '_blank')}>Find a Showroom</Button>
          
          <ShowroomGallery>
            <GalleryImage>
              <img src="/images/show3.jpg" alt="Lexus Showroom" />
            </GalleryImage>
            <GalleryImage>
              <img src="/images/show1.jpg" alt="Lexus Event" />
            </GalleryImage>
            <GalleryImage>
              <img src="/images/show2.jpg" alt="Lexus Experience" />
            </GalleryImage>
          </ShowroomGallery>
        </ShowroomContent>
      </ShowroomSection>
      
      <TestDriveSection>
        <TestDriveContainer>
          <TestDriveContent>
            <TestDriveTitle>Experience the Drive</TestDriveTitle>
            <TestDriveText>
              Words and images can only convey so much. To truly understand what makes a Lexus exceptional, you need to experience it firsthand. We invite you to schedule a personalized test drive, where you can feel the perfect balance of power and refinement that defines the Lexus driving experience.
            </TestDriveText>
            <TestDriveText>
              Our product specialists will guide you through the vehicle's features and technologies, ensuring you discover all the ways your Lexus can enhance your driving life. Whether you're interested in the exhilarating performance of an F Sport model or the effortless efficiency of our hybrid lineup, we'll tailor the experience to your preferences.
            </TestDriveText>
            <Button onClick={() => navigate('/testdrive')}>Schedule a Test Drive</Button>
          </TestDriveContent>
          <TestDriveImage>
            <img src="/images/lex_rcf.png" alt="Lexus Test Drive" />
          </TestDriveImage>
        </TestDriveContainer>
      </TestDriveSection>
    </PageContainer>
  );
};

export default ExperiencePage; 