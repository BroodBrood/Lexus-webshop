"use strict";(self.webpackChunklexus_webshop=self.webpackChunklexus_webshop||[]).push([[301],{301:(e,t,o)=>{o.r(t),o.d(t,{default:()=>L});o(43);var i=o(464),n=o(462),r=o(579);const s=i.Ay.div`
  padding: 120px 5% 80px;
  min-height: 100vh;
`,l=i.Ay.h1`
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
`,h=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 80px;
  max-width: 1200px;
  margin: 0 auto 100px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 60px;
  }
`,a=i.Ay.div`
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
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    width: 100%;
    height: 400px;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    height: 300px;
  }
`,c=i.Ay.div`
  flex: 1;
`,d=i.Ay.h2`
  font-size: 3.5rem;
  font-weight: 300;
  color: ${e=>e.theme.colors.secondary};
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
    background-color: ${e=>e.theme.colors.highlight};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 2.8rem;
  }
`,p=i.Ay.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 25px;
`,x=(i.Ay.button`
  background-color: transparent;
  color: ${e=>e.theme.colors.secondary};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 15px 40px;
  border: 1px solid ${e=>e.theme.colors.secondary};
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
    background-color: ${e=>e.theme.colors.highlight};
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
    border-color: ${e=>e.theme.colors.highlight};
    
    &:before {
      width: 100%;
    }
  }
`,i.Ay.div`
  padding: 0 5% 80px;
`),m=i.Ay.h2`
  font-size: 2.8rem;
  font-weight: 300;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 40px;
  text-align: center;
`,g=i.Ay.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    background-color: ${e=>e.theme.colors.accent};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    &:after {
      left: 31px;
    }
  }
`,u=i.Ay.div`
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
    background-color: ${e=>e.theme.colors.highlight};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  
  &:nth-child(even):after {
    left: -10px;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
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
`,f=i.Ay.div`
  padding: 30px;
  background-color: ${e=>e.theme.colors.primary};
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  
  &:hover {
    border-color: ${e=>e.theme.colors.highlight};
  }
`,b=i.Ay.h3`
  font-size: 1.8rem;
  font-weight: 300;
  color: ${e=>e.theme.colors.highlight};
  margin-bottom: 15px;
`,y=i.Ay.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.textSecondary};
`,w=i.Ay.section`
  position: relative;
  width: 100%;
  height: 600px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,v=i.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`,j=i.Ay.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  pointer-events: none;
`,$=i.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
`,A=i.Ay.h2`
  font-size: 4.5rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: 10px;
  z-index: 1;
`,k=i.Ay.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.secondary};
  max-width: 700px;
  text-align: center;
  margin-bottom: 50px;
  z-index: 1;
`,z=i.Ay.button`
  background-color: transparent;
  color: ${e=>e.theme.colors.secondary};
  font-size: 1rem;
  font-weight: 400;
  padding: 15px 60px;
  border: 1px solid ${e=>e.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 5px;
  transition: all 0.4s ease;
  position: relative;
  cursor: pointer;
  z-index: 1;
  
  &:hover {
    background-color: ${e=>e.theme.colors.secondary};
    color: ${e=>e.theme.colors.primary};
  }
`,L=()=>{const e=(0,n.Zp)();return(0,r.jsxs)(s,{children:[(0,r.jsx)(l,{children:"About Lexus"}),(0,r.jsxs)(h,{children:[(0,r.jsx)(a,{children:(0,r.jsx)("img",{src:"/images/lfa_side.png",alt:"Lexus Craftsmanship"})}),(0,r.jsxs)(c,{children:[(0,r.jsx)(d,{children:"Redefining Luxury Automobiles"}),(0,r.jsx)(p,{children:"Lexus was founded on a bold vision: to create vehicles that combine exceptional design, innovative technology, and unparalleled craftsmanship. Since our inception, we have continuously redefined what luxury means in the automotive world."}),(0,r.jsx)(p,{children:'Our dedication to the Japanese philosophy of "Omotenashi" - anticipatory hospitality - guides everything we do. From the initial design to the ownership experience, we strive to exceed expectations and create moments of delight for our customers.'}),(0,r.jsx)(p,{children:"Every Lexus vehicle represents a harmonious balance between artistic expression and engineering precision, resulting in automobiles that engage all the senses and create emotional connections with their owners."})]})]}),(0,r.jsxs)(x,{children:[(0,r.jsx)(m,{children:"Our Journey Through Time"}),(0,r.jsxs)(g,{children:[(0,r.jsx)(u,{children:(0,r.jsxs)(f,{children:[(0,r.jsx)(b,{children:"1983"}),(0,r.jsx)(y,{children:'Chairman Eiji Toyoda challenges the company to build "the world\'s best car", launching the top-secret F1 project that would eventually lead to Lexus.'})]})}),(0,r.jsx)(u,{children:(0,r.jsxs)(f,{children:[(0,r.jsx)(b,{children:"1989"}),(0,r.jsx)(y,{children:"The Lexus brand officially launches with the debut of the LS 400 at the Detroit Auto Show, setting new standards for luxury, quality, and refinement."})]})}),(0,r.jsx)(u,{children:(0,r.jsxs)(f,{children:[(0,r.jsx)(b,{children:"1998"}),(0,r.jsx)(y,{children:"Lexus introduces the RX 300, creating the luxury crossover segment and forever changing the luxury automotive landscape."})]})}),(0,r.jsx)(u,{children:(0,r.jsxs)(f,{children:[(0,r.jsx)(b,{children:"2005"}),(0,r.jsx)(y,{children:"Lexus becomes the first luxury brand to focus on hybrid technology with the introduction of the RX 400h, combining performance with environmental responsibility."})]})}),(0,r.jsx)(u,{children:(0,r.jsxs)(f,{children:[(0,r.jsx)(b,{children:"2010"}),(0,r.jsx)(y,{children:"The LFA supercar debuts, showcasing Lexus' engineering prowess and setting new standards for performance and craftsmanship in the automotive world."})]})}),(0,r.jsx)(u,{children:(0,r.jsxs)(f,{children:[(0,r.jsx)(b,{children:"2022"}),(0,r.jsx)(y,{children:"Lexus unveils its vision for an electrified future with the introduction of the RZ, the brand's first dedicated battery electric vehicle."})]})})]})]}),(0,r.jsxs)(w,{children:[(0,r.jsx)(v,{children:(0,r.jsx)(j,{src:"https://www.youtube.com/embed/cmE_zVtsuCQ?autoplay=1&mute=1&controls=0&loop=1&playlist=cmE_zVtsuCQ&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1",title:"Lexus Technology",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),(0,r.jsx)($,{}),(0,r.jsx)(A,{children:"Technology"}),(0,r.jsx)(k,{children:"From bespoke component design and engineering to full series production. We are the leader in high-performance EV technology."}),(0,r.jsx)(z,{onClick:()=>e("/technology"),children:"Explore"})]})]})}}}]);
//# sourceMappingURL=301.eea1570f.chunk.js.map