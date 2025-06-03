import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(155, 133, 121, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(155, 133, 121, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(155, 133, 121, 0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const PageContainer = styled.div`
  padding: 120px 5% 80px;
  min-height: 100vh;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 40px;
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

const ModelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ModelCard = styled.div<{ selected: boolean }>`
  position: relative;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  padding: 25px;
  background: linear-gradient(145deg, rgba(20, 20, 20, 0.7), rgba(10, 10, 10, 0.9));
  border: ${props => props.selected ? `2px solid ${props.theme.colors.highlight}` : '1px solid rgba(255, 255, 255, 0.1)'};
  box-shadow: ${props => props.selected ? '0 10px 25px rgba(0, 0, 0, 0.3)' : '0 5px 15px rgba(0, 0, 0, 0.2)'};
  cursor: pointer;
  transform: ${props => props.selected ? 'scale(1.02)' : 'scale(1)'};
  z-index: ${props => props.selected ? '10' : '1'};
  
  ${props => props.selected && css`
    animation: ${pulse} 1.5s infinite;
  `}
  
  &:hover {
    transform: ${props => props.selected ? 'scale(1.02)' : 'translateY(-5px)'};
    box-shadow: ${props => !props.selected && '0 8px 20px rgba(0, 0, 0, 0.25)'};
  }
`;

const ModelImage = styled.div`
  height: 240px;
  margin-bottom: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    transition: transform 0.6s ease;
  }
  
  ${ModelCard}:hover img {
    transform: scale(1.03);
  }
`;

const ModelName = styled.h3`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.secondary};
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  
  ${ModelCard}:hover & {
    color: ${props => props.theme.colors.highlight};
  }
`;

const ModelCategory = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.highlight};
  padding: 4px 12px;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  ${ModelCard}:hover & {
    transform: translateY(-2px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  animation: ${fadeIn} 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
`;

const SelectButton = styled.button`
  background-color: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 12px 25px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  &:after {
    content: '→';
    font-size: 1.2rem;
    margin-left: 10px;
    transition: transform 0.3s ease;
  }
  
  &:hover:after {
    transform: translateX(5px);
  }
`;

// Confirmation components
const ConfirmationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background: linear-gradient(145deg, rgba(20, 20, 20, 0.7), rgba(10, 10, 10, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
`;

const ConfirmationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ConfirmationImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
  
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const ConfirmationTextContainer = styled.div`
  flex: 1;
`;

const ConfirmationTitle = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.secondary};
`;

const ConfirmationSubtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.highlight};
`;

const ConfirmationDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 40px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const ActionButton = styled.button`
  background-color: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 15px 30px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  &:nth-child(2) {
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const CustomerSupportInfo = styled.div`
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const CustomerSupportText = styled.div`
  p {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 5px;
  }
  
  span {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${props => props.theme.colors.highlight};
  }
`;

const DealerInfo = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 15px;
    color: ${props => props.theme.colors.highlight};
  }
  
  p {
    font-size: 1rem;
    color: ${props => props.theme.colors.textSecondary};
  }
`;

interface ModelType {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
}

const TestDrivePage: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [confirmedModel, setConfirmedModel] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const models: ModelType[] = [
    { 
      id: 'lbx', 
      name: 'Lexus LBX', 
      category: 'Compact', 
      image: '/images/lex_lbx_side.png',
      description: 'Experience the perfect blend of compact luxury and urban agility. The LBX combines Lexus craftsmanship with nimble handling, making it ideal for navigating city streets with sophistication and style.'
    },
    { 
      id: 'ux', 
      name: 'Lexus UX', 
      category: 'Compact SUV', 
      image: '/images/lex_ux_side.png',
      description: 'The UX crossover delivers a bold design with intuitive technology. Experience the responsive hybrid powertrain and confident handling of this urban explorer, designed with your comfort and convenience in mind.'
    },
    { 
      id: 'rz', 
      name: 'Lexus RZ', 
      category: 'Electric', 
      image: '/images/lex_rz_side.png',
      description: 'Step into the future with the all-electric RZ. This premium electric SUV combines zero-emission driving with uncompromising Lexus luxury, delivering powerful acceleration, refined comfort, and innovative technology.'
    },
    { 
      id: 'nx', 
      name: 'Lexus NX', 
      category: 'SUV', 
      image: '/images/lex_nx_side.png',
      description: 'The NX blends striking design with intuitive technology and versatile performance. Experience refined comfort, advanced safety features, and efficient hybrid options in this sophisticated midsize luxury SUV.'
    },
    { 
      id: 'rx', 
      name: 'Lexus RX', 
      category: 'Premium SUV', 
      image: '/images/lex_rx_side.png',
      description: 'The iconic RX redefines luxury SUV expectations with its bold design, refined interior and smooth, powerful performance. Enjoy exceptional comfort, advanced technology and the option of efficient hybrid powertrains.'
    },
    { 
      id: 'es', 
      name: 'Lexus ES', 
      category: 'Sedan', 
      image: '/images/lex_es_side.png',
      description: 'The elegant ES sedan combines striking design with refined luxury. Experience the perfect balance of comfort and performance with its smooth ride, spacious interior, and advanced technology designed around your needs.'
    },
    { 
      id: 'ls', 
      name: 'Lexus LS', 
      category: 'Luxury Sedan', 
      image: '/images/lex_ls_side.png',
      description: 'The flagship LS sedan represents the pinnacle of Lexus luxury. Immerse yourself in the handcrafted details, innovative technology, and exceptional comfort while experiencing the powerful and refined driving dynamics.'
    },
  ];
  
  const handleSelectCar = (modelId: string) => {
    setConfirmedModel(modelId);
  };
  
  const handleContinue = () => {
    navigate('/experience');
  };
  
  const handleBack = () => {
    setConfirmedModel(null);
  };
  
  const selectedModelData = confirmedModel ? models.find(m => m.id === confirmedModel) : null;
  
  if (confirmedModel && selectedModelData) {
    return (
      <PageContainer>
        <ConfirmationContainer>
          <ConfirmationHeader>
            <ConfirmationImageContainer>
              <img src={selectedModelData.image} alt={selectedModelData.name} />
            </ConfirmationImageContainer>
            <ConfirmationTextContainer>
              <ConfirmationTitle>Test Drive</ConfirmationTitle>
              <ConfirmationSubtitle>{selectedModelData.name}</ConfirmationSubtitle>
              <ConfirmationDescription>
                Experience the luxury of Lexus with the {selectedModelData.name}. {selectedModelData.description}
              </ConfirmationDescription>
              <ActionButtons>
                <ActionButton onClick={handleContinue}>Confirm Test Drive</ActionButton>
                <ActionButton onClick={handleBack}>Back to Selection</ActionButton>
              </ActionButtons>
            </ConfirmationTextContainer>
          </ConfirmationHeader>
          
          <CustomerSupportInfo>
            <CustomerSupportText>
              <p>Have questions?</p>
              <span>Call 0800-0315</span>
            </CustomerSupportText>
            <DealerInfo>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
              </svg>
              <p>Always a dealer near you</p>
            </DealerInfo>
          </CustomerSupportInfo>
        </ConfirmationContainer>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <PageTitle>Which model would you like to test drive?</PageTitle>
      
      <IntroText>
        Experience the exceptional performance, craftsmanship, and innovation of Lexus firsthand. Select a model below to schedule your personalized test drive.
      </IntroText>
      
      <ModelsGrid>
        {models.map(model => (
          <ModelCard 
            key={model.id} 
            selected={selectedModel === model.id}
            onClick={() => setSelectedModel(model.id)}
          >
            <ModelImage>
              <img src={model.image} alt={model.name} />
            </ModelImage>
            <ModelCategory>{model.category}</ModelCategory>
            <ModelName>{model.name}</ModelName>
            
            {selectedModel === model.id && (
              <ButtonContainer>
                <SelectButton onClick={() => handleSelectCar(model.id)}>
                  CHOOSE THIS CAR
                </SelectButton>
              </ButtonContainer>
            )}
          </ModelCard>
        ))}
      </ModelsGrid>
    </PageContainer>
  );
};

export default TestDrivePage; 