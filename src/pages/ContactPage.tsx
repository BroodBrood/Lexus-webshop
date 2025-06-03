import React, { useState } from 'react';
import styled from 'styled-components';

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

const ContactContainer = styled.div`
  display: flex;
  gap: 80px;
  max-width: 1200px;
  margin: 0 auto 100px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 40px;
`;

const InfoItem = styled.div`
  margin-bottom: 30px;
`;

const InfoLabel = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${props => props.theme.colors.highlight};
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.textSecondary};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 40px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid ${props => props.theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${props => props.theme.colors.secondary};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.highlight};
    border-color: ${props => props.theme.colors.highlight};
    color: ${props => props.theme.colors.primary};
  }
`;

const ContactForm = styled.div`
  flex: 1;
  background-color: rgba(10, 10, 10, 0.4);
  padding: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.secondary};
`;

const InputGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.textSecondary};
`;

const Input = styled.input`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.highlight};
  }
`;

const Select = styled.select`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.highlight};
  }
  
  option {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.highlight};
  }
`;

const SubmitButton = styled.button`
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
  cursor: pointer;
  
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

const MapSection = styled.div`
  height: 500px;
  margin-bottom: 80px;
  position: relative;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, ${props => props.theme.colors.background}, transparent);
    pointer-events: none;
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ThankYouMessage = styled.div`
  background-color: rgba(155, 133, 121, 0.2);
  border: 1px solid ${props => props.theme.colors.highlight};
  padding: 20px;
  margin-top: 30px;
  text-align: center;
`;

const ThankYouText = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.secondary};
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
  };
  
  return (
    <PageContainer>
      <PageTitle>Contact Us</PageTitle>
      
      <ContactContainer>
        <ContactInfo>
          <IntroText>
            We're here to answer any questions you may have about our vehicles, services, or the Lexus experience. Please feel free to get in touch, and our team will respond as soon as possible.
          </IntroText>
          
          <InfoItem>
            <InfoLabel>Visit our showroom</InfoLabel>
            <InfoText>Lexus Experience Center</InfoText>
            <InfoText>123 Luxury Avenue</InfoText>
            <InfoText>Amsterdam, 1012 AB</InfoText>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>Opening hours</InfoLabel>
            <InfoText>Monday - Friday: 9:00 AM - 7:00 PM</InfoText>
            <InfoText>Saturday: 10:00 AM - 6:00 PM</InfoText>
            <InfoText>Sunday: 12:00 PM - 5:00 PM</InfoText>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>Contact information</InfoLabel>
            <InfoText>Phone: +31 20 123 4567</InfoText>
            <InfoText>Email: info@lexus-netherlands.com</InfoText>
          </InfoItem>
          
          <SocialLinks>
            <SocialIcon>f</SocialIcon>
            <SocialIcon>t</SocialIcon>
            <SocialIcon>in</SocialIcon>
            <SocialIcon>ig</SocialIcon>
          </SocialLinks>
        </ContactInfo>
        
        <ContactForm>
          <FormTitle>Send us a message</FormTitle>
          
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="phone">Phone</Label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="interest">I'm interested in</Label>
              <Select 
                id="interest" 
                name="interest" 
                value={formData.interest} 
                onChange={handleChange} 
                required
              >
                <option value="">Select an option</option>
                <option value="test-drive">Test Drive</option>
                <option value="purchase">Vehicle Purchase</option>
                <option value="service">Service Appointment</option>
                <option value="parts">Parts and Accessories</option>
                <option value="other">Other</option>
              </Select>
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </InputGroup>
            
            <SubmitButton type="submit">Submit</SubmitButton>
            
            {submitted && (
              <ThankYouMessage>
                <ThankYouText>Thank you for your message. Our team will contact you shortly.</ThankYouText>
              </ThankYouMessage>
            )}
          </form>
        </ContactForm>
      </ContactContainer>
      
      <MapSection>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77859.94284893151!2d4.767564442536843!3d52.3702157153386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1sen!2snl!4v1648040543732!5m2!1sen!2snl" 
          allowFullScreen 
          loading="lazy" 
          title="Lexus Dealership Location"
        ></iframe>
      </MapSection>
    </PageContainer>
  );
};

export default ContactPage; 