"use strict";(self.webpackChunklexus_webshop=self.webpackChunklexus_webshop||[]).push([[954],{954:(e,i,t)=>{t.r(i),t.d(i,{default:()=>T});var o=t(43),r=t(464),n=t(462),a=t(579);const s=r.i7`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,l=r.i7`
  0% {
    box-shadow: 0 0 0 0 rgba(155, 133, 121, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(155, 133, 121, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(155, 133, 121, 0);
  }
`,c=r.i7`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,d=r.Ay.div`
  padding: 120px 5% 80px;
  min-height: 100vh;
`,h=r.Ay.h1`
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 40px;
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
`,p=r.Ay.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 60px;
  max-width: 900px;
`,m=r.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,x=r.Ay.div`
  position: relative;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  padding: 25px;
  background: linear-gradient(145deg, rgba(20, 20, 20, 0.7), rgba(10, 10, 10, 0.9));
  border: ${e=>e.selected?`2px solid ${e.theme.colors.highlight}`:"1px solid rgba(255, 255, 255, 0.1)"};
  box-shadow: ${e=>e.selected?"0 10px 25px rgba(0, 0, 0, 0.3)":"0 5px 15px rgba(0, 0, 0, 0.2)"};
  cursor: pointer;
  transform: ${e=>e.selected?"scale(1.02)":"scale(1)"};
  z-index: ${e=>e.selected?"10":"1"};
  
  ${e=>e.selected&&r.AH`
    animation: ${l} 1.5s infinite;
  `}
  
  &:hover {
    transform: ${e=>e.selected?"scale(1.02)":"translateY(-5px)"};
    box-shadow: ${e=>!e.selected&&"0 8px 20px rgba(0, 0, 0, 0.25)"};
  }
`,g=r.Ay.div`
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
  
  ${x}:hover img {
    transform: scale(1.03);
  }
`,f=r.Ay.h3`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 10px;
  color: ${e=>e.theme.colors.secondary};
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  
  ${x}:hover & {
    color: ${e=>e.theme.colors.highlight};
  }
`,u=r.Ay.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.primary};
  background-color: ${e=>e.theme.colors.highlight};
  padding: 4px 12px;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  ${x}:hover & {
    transform: translateY(-2px);
  }
`,b=r.Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  animation: ${s} 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
`,y=r.Ay.button`
  background-color: ${e=>e.theme.colors.highlight};
  color: ${e=>e.theme.colors.primary};
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
    background-color: ${e=>e.theme.colors.secondary};
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
`,w=r.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background: linear-gradient(145deg, rgba(20, 20, 20, 0.7), rgba(10, 10, 10, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  animation: ${c} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
`,v=r.Ay.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 50px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 30px;
  }
`,$=r.Ay.div`
  flex: 1;
  max-width: 500px;
  
  img {
    width: 100%;
    object-fit: contain;
  }
`,j=r.Ay.div`
  flex: 1;
`,k=r.Ay.h2`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.secondary};
`,A=r.Ay.h3`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 30px;
  color: ${e=>e.theme.colors.highlight};
`,z=r.Ay.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 40px;
`,S=r.Ay.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`,C=r.Ay.button`
  background-color: ${e=>e.theme.colors.highlight};
  color: ${e=>e.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 15px 30px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  &:nth-child(2) {
    background-color: transparent;
    border: 1px solid ${e=>e.theme.colors.secondary};
    color: ${e=>e.theme.colors.secondary};
    
    &:hover {
      background-color: ${e=>e.theme.colors.secondary};
      color: ${e=>e.theme.colors.primary};
    }
  }
`,L=r.Ay.div`
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`,_=r.Ay.div`
  p {
    font-size: 1.1rem;
    color: ${e=>e.theme.colors.secondary};
    margin-bottom: 5px;
  }
  
  span {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${e=>e.theme.colors.highlight};
  }
`,E=r.Ay.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 15px;
    color: ${e=>e.theme.colors.highlight};
  }
  
  p {
    font-size: 1rem;
    color: ${e=>e.theme.colors.textSecondary};
  }
`,T=()=>{const[e,i]=(0,o.useState)(null),[t,r]=(0,o.useState)(null),s=(0,n.Zp)(),l=[{id:"lbx",name:"Lexus LBX",category:"Compact",image:"/images/lex_lbx_side.png",description:"Experience the perfect blend of compact luxury and urban agility. The LBX combines Lexus craftsmanship with nimble handling, making it ideal for navigating city streets with sophistication and style."},{id:"ux",name:"Lexus UX",category:"Compact SUV",image:"/images/lex_ux_side.png",description:"The UX crossover delivers a bold design with intuitive technology. Experience the responsive hybrid powertrain and confident handling of this urban explorer, designed with your comfort and convenience in mind."},{id:"rz",name:"Lexus RZ",category:"Electric",image:"/images/lex_rz_side.png",description:"Step into the future with the all-electric RZ. This premium electric SUV combines zero-emission driving with uncompromising Lexus luxury, delivering powerful acceleration, refined comfort, and innovative technology."},{id:"nx",name:"Lexus NX",category:"SUV",image:"/images/lex_nx_side.png",description:"The NX blends striking design with intuitive technology and versatile performance. Experience refined comfort, advanced safety features, and efficient hybrid options in this sophisticated midsize luxury SUV."},{id:"rx",name:"Lexus RX",category:"Premium SUV",image:"/images/lex_rx_side.png",description:"The iconic RX redefines luxury SUV expectations with its bold design, refined interior and smooth, powerful performance. Enjoy exceptional comfort, advanced technology and the option of efficient hybrid powertrains."},{id:"es",name:"Lexus ES",category:"Sedan",image:"/images/lex_es_side.png",description:"The elegant ES sedan combines striking design with refined luxury. Experience the perfect balance of comfort and performance with its smooth ride, spacious interior, and advanced technology designed around your needs."},{id:"ls",name:"Lexus LS",category:"Luxury Sedan",image:"/images/lex_ls_side.png",description:"The flagship LS sedan represents the pinnacle of Lexus luxury. Immerse yourself in the handcrafted details, innovative technology, and exceptional comfort while experiencing the powerful and refined driving dynamics."}],c=()=>{s("/experience")},T=()=>{r(null)},X=t?l.find((e=>e.id===t)):null;return t&&X?(0,a.jsx)(d,{children:(0,a.jsxs)(w,{children:[(0,a.jsxs)(v,{children:[(0,a.jsx)($,{children:(0,a.jsx)("img",{src:X.image,alt:X.name})}),(0,a.jsxs)(j,{children:[(0,a.jsx)(k,{children:"Test Drive"}),(0,a.jsx)(A,{children:X.name}),(0,a.jsxs)(z,{children:["Experience the luxury of Lexus with the ",X.name,". ",X.description]}),(0,a.jsxs)(S,{children:[(0,a.jsx)(C,{onClick:c,children:"Confirm Test Drive"}),(0,a.jsx)(C,{onClick:T,children:"Back to Selection"})]})]})]}),(0,a.jsxs)(L,{children:[(0,a.jsxs)(_,{children:[(0,a.jsx)("p",{children:"Have questions?"}),(0,a.jsx)("span",{children:"Call 0800-0315"})]}),(0,a.jsxs)(E,{children:[(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z",fill:"currentColor"})}),(0,a.jsx)("p",{children:"Always a dealer near you"})]})]})]})}):(0,a.jsxs)(d,{children:[(0,a.jsx)(h,{children:"Which model would you like to test drive?"}),(0,a.jsx)(p,{children:"Experience the exceptional performance, craftsmanship, and innovation of Lexus firsthand. Select a model below to schedule your personalized test drive."}),(0,a.jsx)(m,{children:l.map((t=>(0,a.jsxs)(x,{selected:e===t.id,onClick:()=>i(t.id),children:[(0,a.jsx)(g,{children:(0,a.jsx)("img",{src:t.image,alt:t.name})}),(0,a.jsx)(u,{children:t.category}),(0,a.jsx)(f,{children:t.name}),e===t.id&&(0,a.jsx)(b,{children:(0,a.jsx)(y,{onClick:()=>{return e=t.id,void r(e);var e},children:"CHOOSE THIS CAR"})})]},t.id)))})]})}}}]);
//# sourceMappingURL=954.6661969e.chunk.js.map