"use strict";(self.webpackChunklexus_webshop=self.webpackChunklexus_webshop||[]).push([[74],{74:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});i(43);var o=i(464),r=i(462),n=i(579);const s=o.Ay.div`
  padding: 120px 5% 80px;
  min-height: 100vh;
`,a=o.Ay.h1`
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 80px;
  color: ${e=>e.theme.colors.secondary};
  position: relative;
  letter-spacing: -1px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 60px;
    height: 1px;
    background-color: ${e=>e.theme.colors.highlight};
  }
`,h=o.Ay.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 60px;
  max-width: 900px;
`,l=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 80px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,c=o.Ay.div`
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  position: relative;
  transition: all 0.5s ease;
  padding: 30px 25px;
  border-left: 1px solid ${e=>e.theme.colors.highlight};
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
`,d=o.Ay.div`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${e=>e.theme.colors.highlight};
  margin-bottom: 20px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 1px;
    background-color: ${e=>e.theme.colors.highlight};
    transition: width 0.4s ease;
  }
  
  ${c}:hover &::after {
    width: 50px;
  }
`,p=o.Ay.h3`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 15px;
  color: ${e=>e.theme.colors.secondary};
  letter-spacing: 0.5px;
`,m=o.Ay.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: ${e=>e.theme.colors.textSecondary};
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
  
  ${c}:hover &::after {
    width: 100%;
  }
`,x=o.Ay.section`
  padding: 80px 0;
  background: linear-gradient(to right, rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.7)), url('/images/lex_show.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin-bottom: 100px;
`,g=o.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`,u=o.Ay.h2`
  font-size: 3rem;
  font-weight: 300;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 30px;
`,b=o.Ay.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,f=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,y=o.Ay.div`
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
    background-color: ${e=>e.theme.colors.highlight};
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
`,v=o.Ay.section`
  padding: 0 5% 80px;
`,w=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`,j=o.Ay.div`
  flex: 1;
`,k=o.Ay.h2`
  font-size: 2.8rem;
  font-weight: 300;
  color: ${e=>e.theme.colors.secondary};
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
    background-color: ${e=>e.theme.colors.highlight};
  }
`,$=o.Ay.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 25px;
`,A=o.Ay.div`
  flex: 1;
  height: 400px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    height: 300px;
  }
`,z=o.Ay.button`
  background-color: transparent;
  color: ${e=>e.theme.colors.secondary};
  font-size: 0.9rem;
  font-weight: 400;
  padding: 15px 40px;
  border: 1px solid ${e=>e.theme.colors.secondary};
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
    background-color: ${e=>e.theme.colors.highlight};
    transition: height 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: -1;
  }
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
    border-color: ${e=>e.theme.colors.highlight};
    
    &::after {
      height: 100%;
    }
  }
`,L=()=>{const e=(0,r.Zp)();return(0,n.jsxs)(s,{children:[(0,n.jsx)(a,{children:"The Lexus Experience"}),(0,n.jsx)(h,{children:"At Lexus, we believe luxury goes beyond the vehicle itself. It's about creating memorable experiences, forging emotional connections, and ensuring every interaction exceeds expectations. Discover what makes the Lexus experience truly exceptional."}),(0,n.jsxs)(l,{children:[(0,n.jsxs)(c,{children:[(0,n.jsx)(d,{children:"\u2726"}),(0,n.jsx)(p,{children:"Takumi Craftsmanship"}),(0,n.jsx)(m,{children:"Every Lexus is built with meticulous attention to detail by our master craftsmen, ensuring unparalleled quality in every element of your vehicle. The Takumi masters have dedicated their lives to perfecting their craft, with skills honed over decades of practice."})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(d,{children:"\u2726"}),(0,n.jsx)(p,{children:"Innovative Technology"}),(0,n.jsx)(m,{children:"Pioneering advancements that enhance your driving experience while maintaining intuitive control, setting new standards in automotive innovation. From hybrid powertrains to advanced safety systems, our technology is designed to anticipate and meet your needs."})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(d,{children:"\u2726"}),(0,n.jsx)(p,{children:"Omotenashi Service"}),(0,n.jsx)(m,{children:"Experience our unique approach to hospitality, anticipating your needs before you even express them. True luxury is in the details of our service. Omotenashi represents our commitment to treating every customer as an honored guest in our home."})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(d,{children:"\u2726"}),(0,n.jsx)(p,{children:"Performance Heritage"}),(0,n.jsx)(m,{children:"From the legendary LFA supercar to our F Sport models, performance is in our DNA. Every Lexus delivers a driving experience that combines exhilaration with refinement, created through extensive testing at the most demanding racetracks around the world."})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(d,{children:"\u2726"}),(0,n.jsx)(p,{children:"Design Philosophy"}),(0,n.jsx)(m,{children:"Our distinctive design language combines bold, avant-garde elements with timeless elegance. Inspired by Japanese aesthetics and craftsmanship, Lexus vehicles make a powerful visual statement while maintaining a sense of sophistication and harmony."})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(d,{children:"\u2726"}),(0,n.jsx)(p,{children:"Ownership Benefits"}),(0,n.jsx)(m,{children:"Lexus ownership extends beyond the vehicle itself with comprehensive warranty coverage, complimentary maintenance services, roadside assistance, and exclusive events designed to enhance your relationship with your vehicle and our brand."})]})]}),(0,n.jsx)(x,{children:(0,n.jsxs)(g,{children:[(0,n.jsx)(u,{children:"Visit Our Showrooms"}),(0,n.jsx)(b,{children:"Our showrooms are designed to be more than just retail spaces. They are immersive environments where you can experience the Lexus brand through all your senses. From the architectural design to the personalized service, every element reflects our commitment to exceptional hospitality."}),(0,n.jsx)(z,{onClick:()=>window.open("https://www.google.com/maps/search/lexus+showroom","_blank"),children:"Find a Showroom"}),(0,n.jsxs)(f,{children:[(0,n.jsx)(y,{children:(0,n.jsx)("img",{src:"/images/show3.jpg",alt:"Lexus Showroom"})}),(0,n.jsx)(y,{children:(0,n.jsx)("img",{src:"/images/show1.jpg",alt:"Lexus Event"})}),(0,n.jsx)(y,{children:(0,n.jsx)("img",{src:"/images/show2.jpg",alt:"Lexus Experience"})})]})]})}),(0,n.jsx)(v,{children:(0,n.jsxs)(w,{children:[(0,n.jsxs)(j,{children:[(0,n.jsx)(k,{children:"Experience the Drive"}),(0,n.jsx)($,{children:"Words and images can only convey so much. To truly understand what makes a Lexus exceptional, you need to experience it firsthand. We invite you to schedule a personalized test drive, where you can feel the perfect balance of power and refinement that defines the Lexus driving experience."}),(0,n.jsx)($,{children:"Our product specialists will guide you through the vehicle's features and technologies, ensuring you discover all the ways your Lexus can enhance your driving life. Whether you're interested in the exhilarating performance of an F Sport model or the effortless efficiency of our hybrid lineup, we'll tailor the experience to your preferences."}),(0,n.jsx)(z,{onClick:()=>e("/testdrive"),children:"Schedule a Test Drive"})]}),(0,n.jsx)(A,{children:(0,n.jsx)("img",{src:"/images/lex_rcf.png",alt:"Lexus Test Drive"})})]})})]})}}}]);
//# sourceMappingURL=74.44c2f997.chunk.js.map