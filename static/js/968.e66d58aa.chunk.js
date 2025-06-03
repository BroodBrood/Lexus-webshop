"use strict";(self.webpackChunklexus_webshop=self.webpackChunklexus_webshop||[]).push([[968],{968:(e,o,i)=>{i.r(o),i.d(o,{default:()=>w});var r=i(43),t=i(464),n=i(579);const s=t.Ay.div`
  padding: 120px 5% 80px;
  min-height: 100vh;
`,a=t.Ay.h1`
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
`,l=t.Ay.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  align-items: center;
`,c=t.Ay.span`
  font-size: 1rem;
  color: ${e=>e.theme.colors.textSecondary};
  margin-right: 10px;
`,p=t.Ay.button`
  background-color: ${e=>e.active?e.theme.colors.highlight:"transparent"};
  color: ${e=>e.active?e.theme.colors.primary:e.theme.colors.secondary};
  font-size: 0.9rem;
  padding: 10px 20px;
  border: 1px solid ${e=>e.active?e.theme.colors.highlight:e.theme.colors.accent};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.highlight};
    color: ${e=>e.theme.colors.primary};
    border-color: ${e=>e.theme.colors.highlight};
  }
`,h=t.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    gap: 20px;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,d=t.Ay.div`
  background-color: ${e=>e.theme.colors.primary};
  position: relative;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: translateY(-15px);
  }
`,m=t.Ay.div`
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
`,g=t.Ay.div`
  padding: 35px 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: none;
  position: relative;
`,x=t.Ay.h3`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 15px;
  color: ${e=>e.theme.colors.secondary};
`,u=t.Ay.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.highlight};
  margin-bottom: 20px;
  letter-spacing: 1px;
`,f=t.Ay.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 30px;
`,y=t.Ay.button`
  background-color: transparent;
  color: ${e=>e.theme.colors.secondary};
  font-size: 0.8rem;
  font-weight: 500;
  padding: 12px 30px;
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
`,b=t.Ay.span`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 15px;
  background-color: ${e=>e.theme.colors.highlight};
  color: ${e=>e.theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`,v=t.Ay.div`
  text-align: center;
  padding: 80px 0;
  width: 100%;
  color: ${e=>e.theme.colors.textSecondary};
  font-size: 1.2rem;
`,w=()=>{const e=[{id:"nx",name:"Lexus NX",price:"From \u20ac59,995",description:"A bold luxury crossover blending intuitive technology with sophisticated design and responsive performance.",category:"SUV",image:"/images/lexus_nx.png"},{id:"rx",name:"Lexus RX",price:"From \u20ac75,995",description:"Redefining luxury SUV performance with an inspiring blend of style, substance and innovative features.",category:"Premium",image:"/images/lexus_rx.png"},{id:"ux",name:"Lexus UX",price:"From \u20ac45,995",description:"The urban explorer with compact dimensions and a bold, distinctive presence that stands out in any environment.",category:"Compact",image:"/images/lexus_ux.png"},{id:"rz",name:"Lexus RZ",price:"From \u20ac82,995",description:"The future of electric luxury, combining sustainable innovation with signature Lexus craftsmanship for a refined driving experience.",category:"Electric",image:"/images/lexus_rz.png"},{id:"lfa",name:"Lexus LFA",price:"From \u20ac375,000",description:"A masterpiece of engineering and design, the LFA represents the pinnacle of Lexus performance and craftsmanship.",category:"Sports",image:"/images/lfa.png"}],[o,i]=(0,r.useState)("All"),t=["All",...Array.from(new Set(e.map((e=>e.category))))],w="All"===o?e:e.filter((e=>e.category===o));return(0,n.jsxs)(s,{children:[(0,n.jsx)(a,{children:"Lexus Models"}),(0,n.jsxs)(l,{children:[(0,n.jsx)(c,{children:"Filter by:"}),t.map((e=>(0,n.jsx)(p,{active:o===e,onClick:()=>i(e),children:e},e)))]}),w.length>0?(0,n.jsx)(h,{children:w.map((e=>(0,n.jsxs)(d,{children:[(0,n.jsxs)(m,{children:[(0,n.jsx)("img",{src:e.image,alt:e.name}),(0,n.jsx)(b,{children:e.category})]}),(0,n.jsxs)(g,{children:[(0,n.jsx)(x,{children:e.name}),(0,n.jsx)(u,{children:e.price}),(0,n.jsx)(f,{children:e.description}),(0,n.jsx)(y,{children:"View Details"})]})]},e.id)))}):(0,n.jsx)(v,{children:"No models found matching your criteria."})]})}}}]);
//# sourceMappingURL=968.e66d58aa.chunk.js.map