import React, { useState, useEffect } from 'react';
 import backImg from './images/back.jpg';
import cardImg from './images/card.jpg';
import digitalPrintingImg from './images/digital-printing.jpg';
import facebookImg from './images/facebook.png';
import instagramImg from './images/instagram.png';
import logoPng from './images/logo.png';
import viberImg from './images/viber.png';
import whatsappImg from './images/whatsapp.png';

export default function OutdoorNepal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      const sections = ['hero', 'services', 'about', 'gallery', 'location', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const services = [
  { icon: cardImg, title: "Business Cards", color: "#FF6B9D" },
  { icon: digitalPrintingImg, title: "Digital Printing", color: "#4ECDC4" },
   { icon: cardImg, title: "Business Cards", color: "#FF6B9D" },
  { icon: digitalPrintingImg, title: "Digital Printing", color: "#4ECDC4" },
   { icon: cardImg, title: "Business Cards", color: "#FF6B9D" },
  { icon: digitalPrintingImg, title: "Digital Printing", color: "#4ECDC4" },
   { icon: cardImg, title: "Business Cards", color: "#FF6B9D" },
  { icon: digitalPrintingImg, title: "Digital Printing", color: "#4ECDC4" },
   { icon: cardImg, title: "Business Cards", color: "#FF6B9D" },
  { icon: digitalPrintingImg, title: "Digital Printing", color: "#4ECDC4" },
   { icon: cardImg, title: "Business Cards", color: "#FF6B9D" },
  { icon: digitalPrintingImg, title: "Digital Printing", color: "#4ECDC4" },
];
const socials = [
  { icon: facebookImg, isImg: true, link: 'https://www.facebook.com/...' },
  { icon: instagramImg, isImg: true, link: 'https://www.instagram.com/...' },
  { icon: whatsappImg, isImg: true, link: 'https://wa.me/...' },
  { icon: viberImg, isImg: true, link: 'tel:+9779841503408' }
];


const icons = [
  <img 
    src={logoPng} 
    alt="Logo"
    style={{ width: "140px", height: "140px", objectFit: "contain" }}
  />,
  <img 
    src={logoPng} 
    alt="Logo"
    style={{ width: "140px", height: "140px", objectFit: "contain" }}
  />,
  <img 
    src={logoPng} 
    alt="Logo"
    style={{ width: "140px", height: "140px", objectFit: "contain" }}
  />
];


  const stats = [
    { number: '15+', label: 'Years', icon: '⏱️' },
    { number: '2000+', label: 'Projects', icon: '🎨' },
    { number: '500+', label: 'Clients', icon: '🤝' },
    { number: '100%', label: 'Satisfaction', icon: '⭐' }
  ];

  return (
    <div style={{ 
      margin: 0, 
      padding: 0, 
      fontFamily: "'Poppins', sans-serif",
      background: '#FAFBFC',
      color: '#2D3748',
      overflowX: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.05)',
        padding: '1.2rem 0'
      }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src={logoPng} alt="Outdoor Nepal Logo" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: '700', background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Outdoor Nepal Printing Press 
              </div>
              <div style={{ fontSize: '0.7rem', color: '#718096', fontWeight: '500' }}> Thamel, Kathmandu</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {['Home', 'Services', 'About', 'Gallery', 'Location', 'Contact'].map((item, idx) => (
              <a
                key={item}
                href="#"
                onClick={(e) => { e.preventDefault(); scrollToSection(['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx]); }}
                style={{
                  color: activeSection === ['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx] ? '#FF6B9D' : '#4A5568',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: window.innerWidth <= 968 ? 'none' : 'block',
                  position: 'relative'
                }}
                onMouseEnter={(e) => e.target.style.color = '#FF6B9D'}
                onMouseLeave={(e) => e.target.style.color = activeSection === ['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx] ? '#FF6B9D' : '#4A5568'}
              >
                {item}
              </a>
            ))}
            
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: window.innerWidth <= 968 ? 'flex' : 'none',
                flexDirection: 'column',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: '24px',
                  height: '3px',
                  background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)',
                  borderRadius: '3px',
                  transition: 'all 0.3s ease',
                  transform: menuOpen && i === 0 ? 'rotate(45deg) translateY(7px)' : menuOpen && i === 2 ? 'rotate(-45deg) translateY(-7px)' : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1
                }}></div>
              ))}
            </div>
          </div>
        </div>

        {menuOpen && (
          <div style={{
            background: 'white',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            animation: 'slideIn 0.3s ease'
          }}>
            {['Home', 'Services', 'About', 'Gallery', 'Location', 'Contact'].map((item, idx) => (
              <a
                key={item}
                href="#"
                onClick={(e) => { e.preventDefault(); scrollToSection(['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx]); }}
                style={{
                  display: 'block',
                  color: '#4A5568',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  padding: '1rem 0',
                  borderBottom: idx < 5 ? '1px solid #E2E8F0' : 'none'
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 107, 157, 0.2), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(78, 205, 196, 0.2), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>

        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 968 ? '1fr 1fr' : '1fr',
          gap: '4rem',
          alignItems: 'center',
          zIndex: 1
        }}>
          <div>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'lavender',
              borderRadius: '50px',
              color: 'Black',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Thamel's Best Printing Service
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Bring Your Ideas to Life
            </h1>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: 'white',
              marginBottom: '2.5rem',
              maxWidth: '550px'
            }}>
              Transform your vision into stunning prints. From business cards to large-format banners, we deliver excellence in every detail.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => scrollToSection('services')}
                style={{
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(255, 107, 157, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(255, 107, 157, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(255, 107, 157, 0.3)';
                }}
              >
                View Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                style={{
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
                  color: '#FF6B9D',
                  border: '2px solid #FF6B9D',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#FF6B9D';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#FF6B9D';
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              height: '500px',
              background: 'linear-gradient(135deg, #FF6B9D 0%, #4ECDC4 100%)',
            }}>
              Photo Here
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
     <section id="services" style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, #0A1A2F, #23272A)' }}>
  <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}>
    <div style={{
  width: '90%',
  height: '90%',
  objectFit: 'contain',
  marginBottom: '1rem',
  transition: 'transform 0.3s ease',
  color: '#4ECDC4',
}}>
      🚀 What We Offer
    </div>
    <h2 style={{
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '800',
      marginBottom: '1rem',
      color: '#F5F7FA',
    }}>Our Premium Services</h2>
    <p style={{
      fontSize: '1.1rem',
      color: '#F5F7FA',
      maxWidth: '600px',
      margin: '0 auto 4rem'
    }}>
      Professional printing solutions tailored to your needs
    </p>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    }}>
      {services.map((service, index) => (
        <div
          key={index}
          style={{
            background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
            borderRadius: '25px',
            padding: '2.5rem 1.5rem',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '2px solid #F7FAFC',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = `0 20px 40px ${service.color}40`;
            e.currentTarget.style.borderColor = service.color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = '#F7FAFC';
          }}
        >
          <img
            src={service.icon}
            alt={service.title}
            style={{
              marginTop: '1rem',
              width: '60%',
              height: '60%',
              objectFit: 'contain',
              marginBottom: '1rem',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />

          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: '700',
            color: '#F5F7FA',
            marginBottom: '0.5rem'
          }}>
            {service.title}
          </h3>
          <div style={{
            width: '60px',
            height: '4px',
            background: service.color,
            borderRadius: '2px',
            margin: '1rem auto 0'
          }}></div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)'
      }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 968 ? '1fr 1fr' : '1fr',
          gap: '5rem',
          alignItems: 'center'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
            borderRadius: '40px',
            padding: '4rem',
            textAlign: 'center',
            boxShadow: '0 30px 60px rgba(78, 205, 196, 0.3)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem'
            }}>
              {stats.map((stat, idx) => (
                <div key={idx} style={{
                  opacity: 0.95,
                  background: '#A39BB9',
                  borderRadius: '20px',
                  padding: '2rem 1rem',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#2D3748', marginBottom: '0.3rem' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#4A5568', fontWeight: '600' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(255, 107, 157, 0.1)',
              borderRadius: '50px',
              color: '#FF6B9D',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              💼 About Us
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: '#F5F7FA'
            }}>
              Your Trusted Printing Partner
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#4A5568',
              marginBottom: '1.5rem'
            }}>
              With over 15 years of excellence, Outdoor Nepal has been the go-to printing service in Thamel, Kathmandu. We combine cutting-edge technology with traditional craftsmanship.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#4A5568',
              marginBottom: '2rem'
            }}>
              From small business cards to large-scale banners, we handle every project with precision, care, and creativity. Our commitment to quality has earned us the trust of hundreds of satisfied clients.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              {['Quality First', 'Fast Delivery', '24/7 Support'].map((feature, idx) => (
                <div key={idx} style={{
                  padding: '0.8rem 1.5rem',
                  background: 'white',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#4A5568',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
                }}>
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)'
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(255, 230, 109, 0.2)',
            borderRadius: '50px',
            color: '#FF6B9D',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            🎨 Our Work
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: 'white'
          }}>Trusted by Leading Brands</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#718096',
            marginBottom: '4rem'
          }}>
            See the quality that sets us apart
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
           {icons.map((icon, idx) => (
  <div
    key={idx}
    style={{
      borderRadius: '25px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '6rem'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
      e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }}
  >
    {icon}
  </div>
))}

          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)'
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(78, 205, 196, 0.1)',
            borderRadius: '50px',
            color: '#4ECDC4',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            📍 Find Us
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: 'white'
          }}>Visit Our Store</h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'lavender',
            marginBottom: '3rem'
          }}>
            Located in the heart of Thamel, Kathmandu
          </p>

          <div style={{
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            height: '500px'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1818.3061968530792!2d85.3116012!3d27.7180766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190058faae9f%3A0x77a70bd63ce8e35c!2sOutdoor%20Nepal%20-%20Printing%20Service!5e1!3m2!1sen!2snp!4v1738248837472!5m2!1sen!2snp"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
        backgroundSize: '200% 200%',
        animation: 'gradient 5s ease infinite'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Let's Create Something Amazing
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: '3rem'
          }}>
            Ready to start your printing project? We're here to help!
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {[
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
  <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
  {socials.map((item, idx) => (
    <a 
      key={idx} 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      {item.isImg ? (
        <img 
          src={item.icon} 
          alt="social icon"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            objectFit: 'cover'
          }}
        />
      ) : (
        <span style={{ fontSize: '3rem' }}>{item.icon}</span>
      )}
    </a>
  ))}
</div>

</div>

            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  lineHeight: 1,
                  color: '#FF6B9D'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#FF6B9D'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <form style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>
              Name
              <input type="text" placeholder="Your name" style={{
                width: '100%',
                padding: '0.8rem',
                marginTop: '0.3rem',
                borderRadius: '8px',
                border: 'none',
                outline: 'none'
              }} />
            </label>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>
              Email
              <input type="email" placeholder="Your email" style={{
                width: '100%',
                padding: '0.8rem',
                marginTop: '0.3rem',
                borderRadius: '8px',
                border: 'none',
                outline: 'none'
              }} />
            </label>
            <label style={{ display: 'block', marginBottom: '1rem', color: 'white' }}>
              Message
              <textarea placeholder="Your message" rows="5" style={{
                width: '100%',
                padding: '0.8rem',
                marginTop: '0.3rem',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                resize: 'vertical'
              }}></textarea>
            </label>
            <button type="submit" style={{
              width: '100%',
              padding: '1rem',
              background: 'white',
              color: '#FF6B9D',
              fontWeight: '600',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={e => {
                e.target.style.background = '#FF6B9D';
                e.target.style.color = 'white';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'white';
                e.target.style.color = '#FF6B9D';
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '3rem',
            right: '3rem',
            background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)',
            border: 'none',
            padding: '1rem',
            borderRadius: '50%',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(255, 107, 157, 0.6)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          ↑
        </button>
      )}
    </div>
  );
}
