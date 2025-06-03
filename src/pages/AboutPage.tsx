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

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  max-width: 1200px;
  margin: 0 auto 100px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 60px;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  height: 500px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    height: 400px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 300px;
  }
`;

const AboutContent = styled.div`
  flex: 1;
`;

const AboutHeading = styled.h2`
  font-size: 3.5rem;
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 30px;
  line-height: 1.2;
  letter-spacing: -1px;
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
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.8rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 25px;
`;

const Button = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.secondary};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 15px 40px;
  border: 1px solid ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${props => props.theme.colors.highlight};
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.highlight};
    
    &:before {
      width: 100%;
    }
  }
`;

const HistorySection = styled.div`
  padding: 0 5% 80px;
`;

const HistoryHeading = styled.h2`
  font-size: 2.8rem;
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 40px;
  text-align: center;
`;

const Timeline = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    background-color: ${props => props.theme.colors.accent};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    &:after {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  
  &:nth-child(odd) {
    left: 0;
  }
  
  &:nth-child(even) {
    left: 50%;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    background-color: ${props => props.theme.colors.highlight};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  
  &:nth-child(even):after {
    left: -10px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    
    &:nth-child(even) {
      left: 0;
    }
    
    &:after {
      left: 21px;
      right: auto;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 30px;
  background-color: ${props => props.theme.colors.primary};
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.highlight};
  }
`;

const TimelineYear = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  color: ${props => props.theme.colors.highlight};
  margin-bottom: 15px;
`;

const TimelineText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
`;

const HeroTechSection = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const YoutubeIframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  pointer-events: none;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
`;

const TechHeadline = styled.h2`
  font-size: 4.5rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: 10px;
  z-index: 1;
`;

const TechDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.secondary};
  max-width: 700px;
  text-align: center;
  margin-bottom: 50px;
  z-index: 1;
`;

const ExploreButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.secondary};
  font-size: 1rem;
  font-weight: 400;
  padding: 15px 60px;
  border: 1px solid ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 5px;
  transition: all 0.4s ease;
  position: relative;
  cursor: pointer;
  z-index: 1;
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
  }
`;

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <PageContainer>
      <PageTitle>About Lexus</PageTitle>
      
      <AboutContainer>
        <AboutImage>
          <img src="/images/lfa_side.png" alt="Lexus Craftsmanship" />
        </AboutImage>
        <AboutContent>
          <AboutHeading>Redefining Luxury Automobiles</AboutHeading>
          <AboutText>Lexus was founded on a bold vision: to create vehicles that combine exceptional design, innovative technology, and unparalleled craftsmanship. Since our inception, we have continuously redefined what luxury means in the automotive world.</AboutText>
          <AboutText>Our dedication to the Japanese philosophy of "Omotenashi" - anticipatory hospitality - guides everything we do. From the initial design to the ownership experience, we strive to exceed expectations and create moments of delight for our customers.</AboutText>
          <AboutText>Every Lexus vehicle represents a harmonious balance between artistic expression and engineering precision, resulting in automobiles that engage all the senses and create emotional connections with their owners.</AboutText>
        </AboutContent>
      </AboutContainer>
      
      <HistorySection>
        <HistoryHeading>Our Journey Through Time</HistoryHeading>
        <Timeline>
          <TimelineItem>
            <TimelineContent>
              <TimelineYear>1983</TimelineYear>
              <TimelineText>Chairman Eiji Toyoda challenges the company to build "the world's best car", launching the top-secret F1 project that would eventually lead to Lexus.</TimelineText>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineContent>
              <TimelineYear>1989</TimelineYear>
              <TimelineText>The Lexus brand officially launches with the debut of the LS 400 at the Detroit Auto Show, setting new standards for luxury, quality, and refinement.</TimelineText>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineContent>
              <TimelineYear>1998</TimelineYear>
              <TimelineText>Lexus introduces the RX 300, creating the luxury crossover segment and forever changing the luxury automotive landscape.</TimelineText>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineContent>
              <TimelineYear>2005</TimelineYear>
              <TimelineText>Lexus becomes the first luxury brand to focus on hybrid technology with the introduction of the RX 400h, combining performance with environmental responsibility.</TimelineText>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineContent>
              <TimelineYear>2010</TimelineYear>
              <TimelineText>The LFA supercar debuts, showcasing Lexus' engineering prowess and setting new standards for performance and craftsmanship in the automotive world.</TimelineText>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineContent>
              <TimelineYear>2022</TimelineYear>
              <TimelineText>Lexus unveils its vision for an electrified future with the introduction of the RZ, the brand's first dedicated battery electric vehicle.</TimelineText>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </HistorySection>
      
      <HeroTechSection>
        <VideoContainer>
          <YoutubeIframe 
            src="https://www.youtube.com/embed/cmE_zVtsuCQ?autoplay=1&mute=1&controls=0&loop=1&playlist=cmE_zVtsuCQ&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1" 
            title="Lexus Technology" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </VideoContainer>
        <VideoOverlay />
        <TechHeadline>Technology</TechHeadline>
        <TechDescription>
          From bespoke component design and engineering to full series production. We are the leader in high-performance EV technology.
        </TechDescription>
        <ExploreButton onClick={() => navigate('/technology')}>Explore</ExploreButton>
      </HeroTechSection>
    </PageContainer>
  );
};

export default AboutPage; 