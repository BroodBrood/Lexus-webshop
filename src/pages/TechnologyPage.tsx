import React, { useState } from 'react';
import styled from 'styled-components';

// Tech Data
interface TechnologyDetail {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  category: string;
}

const technologies: TechnologyDetail[] = [
  {
    id: 'hybrid',
    title: 'Lexus Hybrid Drive',
    description: 'Our pioneering hybrid technology represents the perfect fusion of performance and efficiency. The self-charging hybrid system seamlessly switches between electric motor and petrol engine, or combines both sources for optimal power and ultra-smooth acceleration.',
    features: [
      'Regenerative braking recovers energy that would otherwise be lost',
      'EV mode allows for zero-emission driving at lower speeds',
      'Intelligent power management optimizes efficiency in real-time',
      'No plugging in required - the system recharges itself while driving'
    ],
    image: '/images/lexus_nx.png',
    category: 'Powertrains'
  },
  {
    id: 'direct4',
    title: 'DIRECT4 All-Wheel Drive',
    description: 'This revolutionary electric all-wheel drive technology delivers unprecedented driving dynamics. By instantaneously adjusting the torque distribution between front and rear axles, DIRECT4 provides optimal traction and responsiveness in all driving conditions.',
    features: [
      'Seamless torque distribution from 0-100% to front or rear wheels',
      'Response time of milliseconds for immediate adaptation',
      'Predictive control based on driver input and road conditions',
      'Enhanced cornering performance with reduced understeer'
    ],
    image: '/images/lexus_rz.png',
    category: 'Powertrains'
  },
  {
    id: 'safety',
    title: 'Lexus Safety System+',
    description: 'Our comprehensive suite of active safety technologies works continuously to support awareness, decision-making and vehicle operation. Using sophisticated sensors and cameras, the system can detect potential dangers and help prevent accidents.',
    features: [
      'Pre-Collision System with pedestrian and cyclist detection',
      'Dynamic Radar Cruise Control maintains safe following distance',
      'Lane Tracing Assist keeps your vehicle centered in its lane',
      'Road Sign Assist recognizes traffic signs and provides alerts'
    ],
    image: '/images/lexus_rx.png',
    category: 'Safety'
  },
  {
    id: 'audio',
    title: 'Mark Levinson® Premium Audio',
    description: 'Our partnership with audiophile specialists Mark Levinson® has resulted in custom-designed sound systems that transform each Lexus into a private concert hall. Every component is precisely tuned to the acoustic properties of each cabin.',
    features: [
      'Quantum Logic Surround delivers multi-dimensional sound staging',
      'Clari-Fi™ technology restores audio quality lost in digital compression',
      'Up to 23 perfectly positioned speakers for immersive experience',
      'Green Edge™ technology provides powerful sound with minimal energy consumption'
    ],
    image: '/images/lfa_side.png',
    category: 'Entertainment'
  },
  {
    id: 'climate',
    title: 'Climate Concierge',
    description: 'The Lexus Climate Concierge takes a holistic approach to cabin comfort. It coordinates the automatic climate control, seat heating/ventilation, and steering wheel heating to create the perfect personal environment for each occupant.',
    features: [
      'Nanoe™ X technology purifies air and reduces odors',
      'Infrared sensors monitor occupant body temperature',
      'S-Flow intelligently directs airflow only to occupied seats',
      'Automatic humidity control prevents window fogging'
    ],
    image: '/images/lexus_ux.png',
    category: 'Comfort'
  },
  {
    id: 'suspension',
    title: 'Adaptive Variable Suspension',
    description: 'Our advanced suspension system continuously adjusts the damping force at each wheel in response to road conditions and driver inputs. This provides both exceptional ride comfort and precise handling performance.',
    features: [
      'Linear Solenoid system enables precise, continuous damping control',
      'Sport+ mode delivers enhanced body control and responsiveness',
      'Comfort mode prioritizes smooth ride quality over uneven surfaces',
      'High-speed actuators respond in milliseconds to changing conditions'
    ],
    image: '/images/lfa.png',
    category: 'Performance'
  }
];

// Styled Components
const PageContainer = styled.div`
  padding: 120px 0 80px;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
`;

const PageHeader = styled.header`
  position: relative;
  height: 60vh;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.6)), url('/images/lfa.png');
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`;

const PageTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary};
  letter-spacing: 5px;
  margin-bottom: 30px;
  text-align: center;
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  max-width: 800px;
  text-align: center;
  padding: 0 5%;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0 5%;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background-color: ${props => props.active ? props.theme.colors.highlight : 'transparent'};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  font-size: 0.9rem;
  padding: 10px 25px;
  border: 1px solid ${props => props.active ? props.theme.colors.highlight : props.theme.colors.accent};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.highlight};
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.highlight};
  }
`;

const ContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 40px;
  margin-bottom: 100px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 30px;
  }
`;

const FeaturedTech = styled.div`
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1200px) {
    grid-column: span 12;
  }
`;

const TechSidebar = styled.div`
  grid-column: span 4;
  
  @media (max-width: 1200px) {
    grid-column: span 12;
  }
`;

const FeaturedImage = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin-bottom: 40px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, ${props => props.theme.colors.background}, transparent 50%);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 300px;
  }
`;

const FeaturedContent = styled.div`
  padding: 20px 0;
`;

const FeaturedTitle = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 20px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 1px;
    background-color: ${props => props.theme.colors.highlight};
  }
`;

const FeaturedDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 40px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
`;

const FeatureItem = styled.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};
  
  &::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.highlight};
  }
`;

const SidebarTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 30px;
`;

const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TechItem = styled.div<{ active: boolean }>`
  padding: 20px;
  background-color: ${props => props.active ? 'rgba(155, 133, 121, 0.1)' : 'rgba(10, 10, 10, 0.4)'};
  border: 1px solid ${props => props.active ? props.theme.colors.highlight : 'rgba(255, 255, 255, 0.1)'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(155, 133, 121, 0.1);
    border-color: ${props => props.theme.colors.highlight};
  }
`;

const TechItemTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 300;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 10px;
`;

const TechItemDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textSecondary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TechnologyPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeTech, setActiveTech] = useState<string>(technologies[0].id);
  
  // Get all unique categories
  const categories = ['All', ...Array.from(new Set(technologies.map(tech => tech.category)))];
  
  // Filter technologies based on selected category
  const filteredTech = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);
  
  // Get the currently selected technology details
  const selectedTech = technologies.find(tech => tech.id === activeTech) || technologies[0];
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Innovative Technology</PageTitle>
        <PageDescription>
          At Lexus, we believe that technology should enhance the driving experience, not complicate it. 
          Our innovations are designed to anticipate your needs, elevate your comfort, and provide peace of mind.
        </PageDescription>
      </PageHeader>
      
      <FilterContainer>
        {categories.map(category => (
          <FilterButton 
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>
      
      <ContentContainer>
        <TechGrid>
          <FeaturedTech>
            <FeaturedImage>
              <img src={selectedTech.image} alt={selectedTech.title} />
            </FeaturedImage>
            <FeaturedContent>
              <FeaturedTitle>{selectedTech.title}</FeaturedTitle>
              <FeaturedDescription>{selectedTech.description}</FeaturedDescription>
              <FeaturesList>
                {selectedTech.features.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </FeaturesList>
            </FeaturedContent>
          </FeaturedTech>
          
          <TechSidebar>
            <SidebarTitle>Explore Our Technologies</SidebarTitle>
            <TechList>
              {filteredTech.map(tech => (
                <TechItem 
                  key={tech.id}
                  active={tech.id === activeTech}
                  onClick={() => setActiveTech(tech.id)}
                >
                  <TechItemTitle>{tech.title}</TechItemTitle>
                  <TechItemDescription>{tech.description}</TechItemDescription>
                </TechItem>
              ))}
            </TechList>
          </TechSidebar>
        </TechGrid>
      </ContentContainer>
    </PageContainer>
  );
};

export default TechnologyPage; 