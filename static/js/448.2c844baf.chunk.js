"use strict";(self.webpackChunklexus_webshop=self.webpackChunklexus_webshop||[]).push([[448],{448:(e,i,t)=>{t.r(i),t.d(i,{default:()=>C});var o=t(43),r=t(464),n=t(579);const s=[{id:"hybrid",title:"Lexus Hybrid Drive",description:"Our pioneering hybrid technology represents the perfect fusion of performance and efficiency. The self-charging hybrid system seamlessly switches between electric motor and petrol engine, or combines both sources for optimal power and ultra-smooth acceleration.",features:["Regenerative braking recovers energy that would otherwise be lost","EV mode allows for zero-emission driving at lower speeds","Intelligent power management optimizes efficiency in real-time","No plugging in required - the system recharges itself while driving"],image:"/images/lexus_nx.png",category:"Powertrains"},{id:"direct4",title:"DIRECT4 All-Wheel Drive",description:"This revolutionary electric all-wheel drive technology delivers unprecedented driving dynamics. By instantaneously adjusting the torque distribution between front and rear axles, DIRECT4 provides optimal traction and responsiveness in all driving conditions.",features:["Seamless torque distribution from 0-100% to front or rear wheels","Response time of milliseconds for immediate adaptation","Predictive control based on driver input and road conditions","Enhanced cornering performance with reduced understeer"],image:"/images/lexus_rz.png",category:"Powertrains"},{id:"safety",title:"Lexus Safety System+",description:"Our comprehensive suite of active safety technologies works continuously to support awareness, decision-making and vehicle operation. Using sophisticated sensors and cameras, the system can detect potential dangers and help prevent accidents.",features:["Pre-Collision System with pedestrian and cyclist detection","Dynamic Radar Cruise Control maintains safe following distance","Lane Tracing Assist keeps your vehicle centered in its lane","Road Sign Assist recognizes traffic signs and provides alerts"],image:"/images/lexus_rx.png",category:"Safety"},{id:"audio",title:"Mark Levinson\xae Premium Audio",description:"Our partnership with audiophile specialists Mark Levinson\xae has resulted in custom-designed sound systems that transform each Lexus into a private concert hall. Every component is precisely tuned to the acoustic properties of each cabin.",features:["Quantum Logic Surround delivers multi-dimensional sound staging","Clari-Fi\u2122 technology restores audio quality lost in digital compression","Up to 23 perfectly positioned speakers for immersive experience","Green Edge\u2122 technology provides powerful sound with minimal energy consumption"],image:"/images/lfa_side.png",category:"Entertainment"},{id:"climate",title:"Climate Concierge",description:"The Lexus Climate Concierge takes a holistic approach to cabin comfort. It coordinates the automatic climate control, seat heating/ventilation, and steering wheel heating to create the perfect personal environment for each occupant.",features:["Nanoe\u2122 X technology purifies air and reduces odors","Infrared sensors monitor occupant body temperature","S-Flow intelligently directs airflow only to occupied seats","Automatic humidity control prevents window fogging"],image:"/images/lexus_ux.png",category:"Comfort"},{id:"suspension",title:"Adaptive Variable Suspension",description:"Our advanced suspension system continuously adjusts the damping force at each wheel in response to road conditions and driver inputs. This provides both exceptional ride comfort and precise handling performance.",features:["Linear Solenoid system enables precise, continuous damping control","Sport+ mode delivers enhanced body control and responsiveness","Comfort mode prioritizes smooth ride quality over uneven surfaces","High-speed actuators respond in milliseconds to changing conditions"],image:"/images/lfa.png",category:"Performance"}],a=r.Ay.div`
  padding: 120px 0 80px;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
`,c=r.Ay.header`
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
`,l=r.Ay.h1`
  font-size: 4.5rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.secondary};
  letter-spacing: 5px;
  margin-bottom: 30px;
  text-align: center;
`,d=r.Ay.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.textSecondary};
  max-width: 800px;
  text-align: center;
  padding: 0 5%;
`,h=r.Ay.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0 5%;
`,p=r.Ay.button`
  background-color: ${e=>e.active?e.theme.colors.highlight:"transparent"};
  color: ${e=>e.active?e.theme.colors.primary:e.theme.colors.secondary};
  font-size: 0.9rem;
  padding: 10px 25px;
  border: 1px solid ${e=>e.active?e.theme.colors.highlight:e.theme.colors.accent};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.theme.colors.highlight};
    color: ${e=>e.theme.colors.primary};
    border-color: ${e=>e.theme.colors.highlight};
  }
`,m=r.Ay.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
`,g=r.Ay.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 40px;
  margin-bottom: 100px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    gap: 30px;
  }
`,u=r.Ay.div`
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1200px) {
    grid-column: span 12;
  }
`,f=r.Ay.div`
  grid-column: span 4;
  
  @media (max-width: 1200px) {
    grid-column: span 12;
  }
`,x=r.Ay.div`
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
    background: linear-gradient(to top, ${e=>e.theme.colors.background}, transparent 50%);
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
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    height: 300px;
  }
`,y=r.Ay.div`
  padding: 20px 0;
`,v=r.Ay.h2`
  font-size: 3rem;
  font-weight: 300;
  color: ${e=>e.theme.colors.secondary};
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
    background-color: ${e=>e.theme.colors.highlight};
  }
`,b=r.Ay.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 40px;
`,w=r.Ay.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
`,A=r.Ay.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: ${e=>e.theme.colors.textSecondary};
  
  &::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: ${e=>e.theme.colors.highlight};
  }
`,k=r.Ay.h3`
  font-size: 1.8rem;
  font-weight: 300;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 30px;
`,j=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,$=r.Ay.div`
  padding: 20px;
  background-color: ${e=>e.active?"rgba(155, 133, 121, 0.1)":"rgba(10, 10, 10, 0.4)"};
  border: 1px solid ${e=>e.active?e.theme.colors.highlight:"rgba(255, 255, 255, 0.1)"};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(155, 133, 121, 0.1);
    border-color: ${e=>e.theme.colors.highlight};
  }
`,S=r.Ay.h4`
  font-size: 1.3rem;
  font-weight: 300;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 10px;
`,z=r.Ay.p`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.textSecondary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,C=()=>{const[e,i]=(0,o.useState)("All"),[t,r]=(0,o.useState)(s[0].id),C=["All",...Array.from(new Set(s.map((e=>e.category))))],L="All"===e?s:s.filter((i=>i.category===e)),T=s.find((e=>e.id===t))||s[0];return(0,n.jsxs)(a,{children:[(0,n.jsxs)(c,{children:[(0,n.jsx)(l,{children:"Innovative Technology"}),(0,n.jsx)(d,{children:"At Lexus, we believe that technology should enhance the driving experience, not complicate it. Our innovations are designed to anticipate your needs, elevate your comfort, and provide peace of mind."})]}),(0,n.jsx)(h,{children:C.map((t=>(0,n.jsx)(p,{active:e===t,onClick:()=>i(t),children:t},t)))}),(0,n.jsx)(m,{children:(0,n.jsxs)(g,{children:[(0,n.jsxs)(u,{children:[(0,n.jsx)(x,{children:(0,n.jsx)("img",{src:T.image,alt:T.title})}),(0,n.jsxs)(y,{children:[(0,n.jsx)(v,{children:T.title}),(0,n.jsx)(b,{children:T.description}),(0,n.jsx)(w,{children:T.features.map(((e,i)=>(0,n.jsx)(A,{children:e},i)))})]})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)(k,{children:"Explore Our Technologies"}),(0,n.jsx)(j,{children:L.map((e=>(0,n.jsxs)($,{active:e.id===t,onClick:()=>r(e.id),children:[(0,n.jsx)(S,{children:e.title}),(0,n.jsx)(z,{children:e.description})]},e.id)))})]})]})})]})}}}]);
//# sourceMappingURL=448.2c844baf.chunk.js.map