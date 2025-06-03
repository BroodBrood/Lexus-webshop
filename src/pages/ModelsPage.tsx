import React, { useState } from 'react';
import styled from 'styled-components';

// Types
interface CarModel {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

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

const FiltersContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  align-items: center;
`;

const FilterLabel = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-right: 10px;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background-color: ${props => props.active ? props.theme.colors.highlight : 'transparent'};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  font-size: 0.9rem;
  padding: 10px 20px;
  border: 1px solid ${props => props.active ? props.theme.colors.highlight : props.theme.colors.accent};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.highlight};
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.highlight};
  }
`;

const ModelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
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
  
  &:hover {
    transform: translateY(-15px);
  }
`;

const ModelImage = styled.div`
  width: 100%;
  height: 250px;
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
`;

const ModelButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.secondary};
  font-size: 0.8rem;
  font-weight: 500;
  padding: 12px 30px;
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

const NoResults = styled.div`
  text-align: center;
  padding: 80px 0;
  width: 100%;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.2rem;
`;

const ModelsPage: React.FC = () => {
  // Sample data
  const carModels: CarModel[] = [
    {
      id: 'nx',
      name: 'Lexus NX',
      price: 'From €59,995',
      description: 'A bold luxury crossover blending intuitive technology with sophisticated design and responsive performance.',
      category: 'SUV',
      image: '/images/lexus_nx.png'
    },
    {
      id: 'rx',
      name: 'Lexus RX',
      price: 'From €75,995',
      description: 'Redefining luxury SUV performance with an inspiring blend of style, substance and innovative features.',
      category: 'Premium',
      image: '/images/lexus_rx.png'
    },
    {
      id: 'ux',
      name: 'Lexus UX',
      price: 'From €45,995',
      description: 'The urban explorer with compact dimensions and a bold, distinctive presence that stands out in any environment.',
      category: 'Compact',
      image: '/images/lexus_ux.png'
    },
    {
      id: 'rz',
      name: 'Lexus RZ',
      price: 'From €82,995',
      description: 'The future of electric luxury, combining sustainable innovation with signature Lexus craftsmanship for a refined driving experience.',
      category: 'Electric',
      image: '/images/lexus_rz.png'
    },
    {
      id: 'lfa',
      name: 'Lexus LFA',
      price: 'From €375,000',
      description: 'A masterpiece of engineering and design, the LFA represents the pinnacle of Lexus performance and craftsmanship.',
      category: 'Sports',
      image: '/images/lfa.png'
    }
  ];

  // State for category filter
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  // Get all unique categories
  const categories = ['All', ...Array.from(new Set(carModels.map(model => model.category)))];
  
  // Filter car models based on selected category
  const filteredModels = activeFilter === 'All' 
    ? carModels 
    : carModels.filter(model => model.category === activeFilter);

  return (
    <PageContainer>
      <PageTitle>Lexus Models</PageTitle>
      
      <FiltersContainer>
        <FilterLabel>Filter by:</FilterLabel>
        {categories.map(category => (
          <FilterButton 
            key={category}
            active={activeFilter === category}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FiltersContainer>
      
      {filteredModels.length > 0 ? (
        <ModelsGrid>
          {filteredModels.map(model => (
            <ModelCard key={model.id}>
              <ModelImage>
                <img src={model.image} alt={model.name} />
                <ModelTag>{model.category}</ModelTag>
              </ModelImage>
              <ModelInfo>
                <ModelName>{model.name}</ModelName>
                <ModelPrice>{model.price}</ModelPrice>
                <ModelDescription>{model.description}</ModelDescription>
                <ModelButton>View Details</ModelButton>
              </ModelInfo>
            </ModelCard>
          ))}
        </ModelsGrid>
      ) : (
        <NoResults>No models found matching your criteria.</NoResults>
      )}
    </PageContainer>
  );
};

export default ModelsPage; 