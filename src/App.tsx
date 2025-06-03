import React, { useEffect, lazy, Suspense, useCallback, memo } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { initPerformanceOptimizations } from './utils/optimization';
import PrefetchLink from './components/PrefetchLink';

// Lazy load page components
const ModelsPage = lazy(() => import('./pages/ModelsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'));
const TestDrivePage = lazy(() => import('./pages/TestDrivePage'));

// Loading component for Suspense
const LoadingScreen = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    color: '#FFFFFF',
    fontSize: '1.2rem',
    background: '#0A0A0A'
  }}>
    Loading...
  </div>
);

// ScrollToTop component to reset scroll position on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Lexus theme with house style colors
const theme = {
  colors: {
    primary: '#0A0A0A', // Dark black
    secondary: '#FFFFFF', // White
    accent: '#A1A1A1', // Silver/grey
    highlight: '#9B8579', // Metallic champagne color
    background: '#0F0F0F',
    text: '#FFFFFF',
    textSecondary: '#CCCCCC',
  },
  fonts: {
    primary: '"Lexend", sans-serif',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  }
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 100;
  background: rgba(15, 15, 15, 0.8);
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.secondary};
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled(PrefetchLink)`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.textSecondary};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  color: ${props => props.theme.colors.secondary};
  font-size: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const Hero = styled.section`
  height: 100vh;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10%;
  position: relative;
  overflow: hidden;
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  transform: scale(1.05);
  transition: transform 2s ease-out;
`;

const HeroText = styled.div`
  max-width: 600px;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeIn 1.2s forwards 0.5s;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.secondary};
  letter-spacing: -1px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.textSecondary};
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

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 60px;
  background-color: ${props => props.theme.colors.secondary};
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.highlight};
    animation: scrollDown 1.5s infinite;
    
    @keyframes scrollDown {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
  }
`;

const ScrollText = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.secondary};
`;

const ModelsSection = styled.section`
  padding: 150px 0 100px;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 300;
  text-align: left;
  margin-bottom: 80px;
  color: ${props => props.theme.colors.secondary};
  position: relative;
  padding-left: 5%;
  letter-spacing: -1px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 5%;
    width: 60px;
    height: 1px;
    background-color: ${props => props.theme.colors.highlight};
  }
`;

const ModelsContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-bottom: 40px;
  
  /* Hide scrollbar but allow scrolling */
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    overflow-x: visible;
  }
`;

const ModelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 100%;
  padding: 0 5%;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ModelCard = styled.div`
  background-color: ${props => props.theme.colors.primary};
  position: relative;
  transition: transform 0.5s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-15px);
  }
`;

const ModelImage = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.2s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ModelInfo = styled.div`
  padding: 35px 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: none;
  position: relative;
  min-height: 280px;
  display: flex;
  flex-direction: column;
`;

const ModelName = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.secondary};
`;

const ModelPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.theme.colors.highlight};
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

const ModelDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 30px;
  flex-grow: 1;
  display: block;
  overflow: visible;
`;

const ModelButton = styled(Button)`
  padding: 12px 30px;
  font-size: 0.8rem;
  margin-top: auto;
`;

const ModelTag = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 15px;
  background-color: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const AboutSection = styled.section`
  padding: 150px 0;
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5%;
  gap: 80px;
  
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

const ExperienceSection = styled.section`
  padding: 150px 0;
  position: relative;
  background: linear-gradient(to right, rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.7)), url('/images/lfa.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const ExperienceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 0 5%;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const ExperienceCard = styled.div`
  background-color: rgba(10, 10, 10, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 0;
  overflow: hidden;
  position: relative;
  transition: all 0.5s ease;
  flex: 1;
  padding: 60px 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-15px);
    border-color: ${props => props.theme.colors.highlight};
  }
`;

const ExperienceIcon = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.highlight};
  margin-bottom: 30px;
  transform: translateY(0);
  transition: transform 0.5s ease;
  
  ${ExperienceCard}:hover & {
    transform: translateY(-10px);
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.secondary};
  position: relative;
  padding-bottom: 20px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 1px;
    background-color: ${props => props.theme.colors.highlight};
    transition: width 0.5s ease;
  }
  
  ${ExperienceCard}:hover &:after {
    width: 80px;
  }
`;

const ExperienceText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
`;

const CallToAction = styled.section`
  padding: 150px 0;
  text-align: center;
  background-color: ${props => props.theme.colors.primary};
  position: relative;
  overflow: hidden;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const CTATitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 30px;
  letter-spacing: -1px;
  line-height: 1.2;
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTABackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-image: url('/images/lexus_nx.png');
  background-size: cover;
  background-position: center;
  filter: blur(8px);
`;

const Footer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  padding: 80px 5% 40px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 60px;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const FooterHeading = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 1px;
    background-color: ${props => props.theme.colors.highlight};
  }
`;

const FooterLink = styled(PrefetchLink)`
  display: block;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 25px;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 30px;
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  opacity: 0.7;
`;

// Types for memoized components
interface HeaderProps {
  Logo: any;
  Nav: any;
  NavLink: any;
  MobileMenuButton: any;
}

interface FooterProps {
  Logo: any;
  FooterText: any;
  FooterContent: any;
  FooterColumn: any;
  FooterHeading: any;
  FooterLink: any;
  FooterDivider: any;
}

// Memoized components
const MemoizedHeader = memo<HeaderProps>(({ Logo, Nav, NavLink, MobileMenuButton }) => (
  <Header>
    <PrefetchLink to="/">
      <Logo>LEXUS</Logo>
    </PrefetchLink>
    <Nav>
      <NavLink to="/models">Models</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
    <MobileMenuButton>☰</MobileMenuButton>
  </Header>
));

const MemoizedFooter = memo<FooterProps>(({ Logo, FooterText, FooterContent, FooterColumn, FooterHeading, FooterLink, FooterDivider }) => (
  <Footer>
    <FooterContent>
      <FooterColumn>
        <PrefetchLink to="/">
          <Logo>LEXUS</Logo>
        </PrefetchLink>
        <FooterText style={{ marginTop: '20px', maxWidth: '300px' }}>
          Experience the pursuit of perfection with Lexus, where craftsmanship meets innovation.
        </FooterText>
      </FooterColumn>
      
      <FooterColumn>
        <FooterHeading>Models</FooterHeading>
        <FooterLink to="/models">NX</FooterLink>
        <FooterLink to="/models">RX</FooterLink>
        <FooterLink to="/models">UX</FooterLink>
        <FooterLink to="/models">RZ</FooterLink>
      </FooterColumn>
      
      <FooterColumn>
        <FooterHeading>Information</FooterHeading>
        <FooterLink to="/about">About Lexus</FooterLink>
        <FooterLink to="/experience">Lexus Experience</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
        <FooterLink to="/about">Our History</FooterLink>
      </FooterColumn>
      
      <FooterColumn>
        <FooterHeading>Connect</FooterHeading>
        <FooterLink to="/contact">Newsletter</FooterLink>
        <FooterLink to="/contact">Instagram</FooterLink>
        <FooterLink to="/contact">Facebook</FooterLink>
        <FooterLink to="/contact">Twitter</FooterLink>
      </FooterColumn>
    </FooterContent>
    
    <FooterDivider />
    <FooterText>© {new Date().getFullYear()} Lexus. All rights reserved.</FooterText>
  </Footer>
));

// Optimized image component
const OptimizedImage = memo(({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => (
  <img 
    src={src} 
    alt={alt} 
    loading="lazy" 
    decoding="async"
    {...props} 
  />
));

function App() {
  const navigate = useNavigate();
  
  // Initialize performance optimizations
  useEffect(() => {
    initPerformanceOptimizations();
  }, []);
  
  // Memoized navigation handlers
  const handleNavigateToModels = useCallback(() => navigate('/models'), [navigate]);
  const handleNavigateToAbout = useCallback(() => navigate('/about'), [navigate]);
  const handleNavigateToExperience = useCallback(() => navigate('/experience'), [navigate]);
  const handleNavigateToContact = useCallback(() => navigate('/contact'), [navigate]);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <ScrollToTop />
        <MemoizedHeader 
          Logo={Logo}
          Nav={Nav}
          NavLink={NavLink}
          MobileMenuButton={MobileMenuButton}
        />
        
        <Routes>
          <Route path="/models" element={
            <Suspense fallback={<LoadingScreen />}>
              <ModelsPage />
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<LoadingScreen />}>
              <AboutPage />
            </Suspense>
          } />
          <Route path="/technology" element={
            <Suspense fallback={<LoadingScreen />}>
              <TechnologyPage />
            </Suspense>
          } />
          <Route path="/experience" element={
            <Suspense fallback={<LoadingScreen />}>
              <ExperiencePage />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<LoadingScreen />}>
              <ContactPage />
            </Suspense>
          } />
          <Route path="/testdrive" element={
            <Suspense fallback={<LoadingScreen />}>
              <TestDrivePage />
            </Suspense>
          } />
          <Route path="/" element={
            <>
              <Hero>
                <HeroImage src="/images/lfa.png" alt="Lexus LFA" />
                <HeroText>
                  <HeroTitle>The Pursuit of Perfection</HeroTitle>
                  <HeroSubtitle>Experience automotive excellence where innovation meets artistry, and performance is elevated to an art form.</HeroSubtitle>
                  <Button onClick={handleNavigateToModels}>Discover More</Button>
                </HeroText>
                <ScrollIndicator>
                  <ScrollText>Scroll</ScrollText>
                  <ScrollLine></ScrollLine>
                </ScrollIndicator>
              </Hero>
              
              <ModelsSection id="models">
                <SectionTitle>Our Exclusive Collection</SectionTitle>
                <ModelsContainer>
                  <ModelsGrid>
                    <ModelCard>
                      <ModelImage>
                        <OptimizedImage src="/images/lexus_nx.png" alt="Lexus NX" />
                        <ModelTag>SUV</ModelTag>
                      </ModelImage>
                      <ModelInfo>
                        <ModelName>Lexus NX</ModelName>
                        <ModelPrice>From €59,995</ModelPrice>
                        <ModelDescription>A bold luxury crossover blending intuitive technology with sophisticated design and responsive performance.</ModelDescription>
                        <ModelButton onClick={handleNavigateToModels}>View Details</ModelButton>
                      </ModelInfo>
                    </ModelCard>
                    
                    <ModelCard>
                      <ModelImage>
                        <OptimizedImage src="/images/lexus_rx.png" alt="Lexus RX" />
                        <ModelTag>Premium</ModelTag>
                      </ModelImage>
                      <ModelInfo>
                        <ModelName>Lexus RX</ModelName>
                        <ModelPrice>From €75,995</ModelPrice>
                        <ModelDescription>Redefining luxury SUV performance with an inspiring blend of style, substance and innovative features.</ModelDescription>
                        <ModelButton onClick={handleNavigateToModels}>View Details</ModelButton>
                      </ModelInfo>
                    </ModelCard>
                    
                    <ModelCard>
                      <ModelImage>
                        <OptimizedImage src="/images/lexus_ux.png" alt="Lexus UX" />
                        <ModelTag>Compact</ModelTag>
                      </ModelImage>
                      <ModelInfo>
                        <ModelName>Lexus UX</ModelName>
                        <ModelPrice>From €45,995</ModelPrice>
                        <ModelDescription>The urban explorer with compact dimensions and a bold, distinctive presence that stands out in any environment.</ModelDescription>
                        <ModelButton onClick={handleNavigateToModels}>View Details</ModelButton>
                      </ModelInfo>
                    </ModelCard>
                    
                    <ModelCard>
                      <ModelImage>
                        <OptimizedImage src="/images/lexus_rz.png" alt="Lexus RZ" />
                        <ModelTag>Electric</ModelTag>
                      </ModelImage>
                      <ModelInfo>
                        <ModelName>Lexus RZ</ModelName>
                        <ModelPrice>From €82,995</ModelPrice>
                        <ModelDescription>The future of electric luxury, combining sustainable innovation with signature Lexus craftsmanship.</ModelDescription>
                        <ModelButton onClick={handleNavigateToModels}>View Details</ModelButton>
                      </ModelInfo>
                    </ModelCard>
                  </ModelsGrid>
                </ModelsContainer>
              </ModelsSection>
              
              <AboutSection id="about">
                <AboutContainer>
                  <AboutImage>
                    <OptimizedImage src="/images/lfa_side.png" alt="Lexus Craftsmanship" />
                  </AboutImage>
                  <AboutContent>
                    <AboutHeading>Redefining Luxury Automobiles</AboutHeading>
                    <AboutText>Lexus was founded on a bold vision: to create vehicles that combine exceptional design, innovative technology, and unparalleled craftsmanship. Since our inception, we have continuously redefined what luxury means in the automotive world.</AboutText>
                    <AboutText>Our dedication to the Japanese philosophy of "Omotenashi" - anticipatory hospitality - guides everything we do. From the initial design to the ownership experience, we strive to exceed expectations and create moments of delight for our customers.</AboutText>
                    <AboutText>Every Lexus vehicle represents a harmonious balance between artistic expression and engineering precision, resulting in automobiles that engage all the senses and create emotional connections with their owners.</AboutText>
                    <Button onClick={handleNavigateToAbout}>Our Heritage</Button>
                  </AboutContent>
                </AboutContainer>
              </AboutSection>
              
              <ExperienceSection id="experience">
                <SectionTitle>The Lexus Experience</SectionTitle>
                <ExperienceContainer>
                  <ExperienceCard>
                    <ExperienceIcon>✦</ExperienceIcon>
                    <ExperienceTitle>Takumi Craftsmanship</ExperienceTitle>
                    <ExperienceText>Every Lexus is built with meticulous attention to detail by our master craftsmen, ensuring unparalleled quality in every element of your vehicle.</ExperienceText>
                  </ExperienceCard>
                  
                  <ExperienceCard>
                    <ExperienceIcon>✦</ExperienceIcon>
                    <ExperienceTitle>Innovative Technology</ExperienceTitle>
                    <ExperienceText>Pioneering advancements that enhance your driving experience while maintaining intuitive control, setting new standards in automotive innovation.</ExperienceText>
                  </ExperienceCard>
                  
                  <ExperienceCard>
                    <ExperienceIcon>✦</ExperienceIcon>
                    <ExperienceTitle>Omotenashi Service</ExperienceTitle>
                    <ExperienceText>Experience our unique approach to hospitality, anticipating your needs before you even express them. True luxury is in the details of our service.</ExperienceText>
                  </ExperienceCard>
                </ExperienceContainer>
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                  <Button onClick={handleNavigateToExperience}>Learn More</Button>
                </div>
              </ExperienceSection>
              
              <CallToAction id="contact">
                <CTABackground />
                <CTAContent>
                  <CTATitle>Experience Lexus Excellence</CTATitle>
                  <CTAText>Schedule a personalized consultation or test drive with one of our Lexus specialists to discover the perfect vehicle for your lifestyle.</CTAText>
                  <Button onClick={handleNavigateToContact}>Contact Us</Button>
                </CTAContent>
              </CallToAction>
            </>
          } />
        </Routes>
        
        <MemoizedFooter 
          Logo={Logo}
          FooterText={FooterText}
          FooterContent={FooterContent}
          FooterColumn={FooterColumn}
          FooterHeading={FooterHeading}
          FooterLink={FooterLink}
          FooterDivider={FooterDivider}
        />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
