"use strict";(self.webpackChunklexus_webshop=self.webpackChunklexus_webshop||[]).push([[122],{122:(e,o,r)=>{r.r(o),r.d(o,{default:()=>S});var t=r(43),i=r(464),n=r(579);const s=i.Ay.div`
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
`,a=i.Ay.div`
  display: flex;
  gap: 80px;
  max-width: 1200px;
  margin: 0 auto 100px;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`,h=i.Ay.div`
  flex: 1;
`,c=i.Ay.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 40px;
`,d=i.Ay.div`
  margin-bottom: 30px;
`,m=i.Ay.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.highlight};
  margin-bottom: 10px;
`,x=i.Ay.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${e=>e.theme.colors.textSecondary};
`,p=i.Ay.div`
  display: flex;
  gap: 15px;
  margin-top: 40px;
`,g=i.Ay.div`
  width: 40px;
  height: 40px;
  border: 1px solid ${e=>e.theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${e=>e.theme.colors.secondary};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.highlight};
    border-color: ${e=>e.theme.colors.highlight};
    color: ${e=>e.theme.colors.primary};
  }
`,u=i.Ay.div`
  flex: 1;
  background-color: rgba(10, 10, 10, 0.4);
  padding: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,b=i.Ay.h2`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 30px;
  color: ${e=>e.theme.colors.secondary};
`,f=i.Ay.div`
  margin-bottom: 25px;
`,y=i.Ay.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${e=>e.theme.colors.textSecondary};
`,j=i.Ay.input`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  color: ${e=>e.theme.colors.secondary};
  font-family: ${e=>e.theme.fonts.primary};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.highlight};
  }
`,v=i.Ay.select`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  color: ${e=>e.theme.colors.secondary};
  font-family: ${e=>e.theme.fonts.primary};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.highlight};
  }
  
  option {
    background-color: ${e=>e.theme.colors.primary};
  }
`,w=i.Ay.textarea`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  color: ${e=>e.theme.colors.secondary};
  font-family: ${e=>e.theme.fonts.primary};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.highlight};
  }
`,$=i.Ay.button`
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
  cursor: pointer;
  
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
`,A=i.Ay.div`
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
    background: linear-gradient(to top, ${e=>e.theme.colors.background}, transparent);
    pointer-events: none;
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`,k=i.Ay.div`
  background-color: rgba(155, 133, 121, 0.2);
  border: 1px solid ${e=>e.theme.colors.highlight};
  padding: 20px;
  margin-top: 30px;
  text-align: center;
`,z=i.Ay.p`
  font-size: 1.1rem;
  color: ${e=>e.theme.colors.secondary};
`,S=()=>{const[e,o]=(0,t.useState)({name:"",email:"",phone:"",interest:"",message:""}),[r,i]=(0,t.useState)(!1),S=e=>{const{name:r,value:t}=e.target;o((e=>({...e,[r]:t})))};return(0,n.jsxs)(s,{children:[(0,n.jsx)(l,{children:"Contact Us"}),(0,n.jsxs)(a,{children:[(0,n.jsxs)(h,{children:[(0,n.jsx)(c,{children:"We're here to answer any questions you may have about our vehicles, services, or the Lexus experience. Please feel free to get in touch, and our team will respond as soon as possible."}),(0,n.jsxs)(d,{children:[(0,n.jsx)(m,{children:"Visit our showroom"}),(0,n.jsx)(x,{children:"Lexus Experience Center"}),(0,n.jsx)(x,{children:"123 Luxury Avenue"}),(0,n.jsx)(x,{children:"Amsterdam, 1012 AB"})]}),(0,n.jsxs)(d,{children:[(0,n.jsx)(m,{children:"Opening hours"}),(0,n.jsx)(x,{children:"Monday - Friday: 9:00 AM - 7:00 PM"}),(0,n.jsx)(x,{children:"Saturday: 10:00 AM - 6:00 PM"}),(0,n.jsx)(x,{children:"Sunday: 12:00 PM - 5:00 PM"})]}),(0,n.jsxs)(d,{children:[(0,n.jsx)(m,{children:"Contact information"}),(0,n.jsx)(x,{children:"Phone: +31 20 123 4567"}),(0,n.jsx)(x,{children:"Email: info@lexus-netherlands.com"})]}),(0,n.jsxs)(p,{children:[(0,n.jsx)(g,{children:"f"}),(0,n.jsx)(g,{children:"t"}),(0,n.jsx)(g,{children:"in"}),(0,n.jsx)(g,{children:"ig"})]})]}),(0,n.jsxs)(u,{children:[(0,n.jsx)(b,{children:"Send us a message"}),(0,n.jsxs)("form",{onSubmit:r=>{r.preventDefault(),console.log("Form submitted:",e),i(!0),o({name:"",email:"",phone:"",interest:"",message:""})},children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(y,{htmlFor:"name",children:"Name"}),(0,n.jsx)(j,{type:"text",id:"name",name:"name",value:e.name,onChange:S,required:!0})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)(y,{htmlFor:"email",children:"Email"}),(0,n.jsx)(j,{type:"email",id:"email",name:"email",value:e.email,onChange:S,required:!0})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)(y,{htmlFor:"phone",children:"Phone"}),(0,n.jsx)(j,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:S})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)(y,{htmlFor:"interest",children:"I'm interested in"}),(0,n.jsxs)(v,{id:"interest",name:"interest",value:e.interest,onChange:S,required:!0,children:[(0,n.jsx)("option",{value:"",children:"Select an option"}),(0,n.jsx)("option",{value:"test-drive",children:"Test Drive"}),(0,n.jsx)("option",{value:"purchase",children:"Vehicle Purchase"}),(0,n.jsx)("option",{value:"service",children:"Service Appointment"}),(0,n.jsx)("option",{value:"parts",children:"Parts and Accessories"}),(0,n.jsx)("option",{value:"other",children:"Other"})]})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)(y,{htmlFor:"message",children:"Message"}),(0,n.jsx)(w,{id:"message",name:"message",value:e.message,onChange:S,required:!0})]}),(0,n.jsx)($,{type:"submit",children:"Submit"}),r&&(0,n.jsx)(k,{children:(0,n.jsx)(z,{children:"Thank you for your message. Our team will contact you shortly."})})]})]})]}),(0,n.jsx)(A,{children:(0,n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77859.94284893151!2d4.767564442536843!3d52.3702157153386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1sen!2snl!4v1648040543732!5m2!1sen!2snl",allowFullScreen:!0,loading:"lazy",title:"Lexus Dealership Location"})})]})}}}]);
//# sourceMappingURL=122.900aef0c.chunk.js.map