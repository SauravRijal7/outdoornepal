import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';
import backImg from './images/back.jpg';
import cardImg from './images/card.jpg';
import digitalPrintingImg from './images/digital-printing.jpg';
import facebookImg from './images/facebook.png';
import instagramImg from './images/instagram.png';
import logoPng from './images/logo.png';
import viberImg from './images/viber.png';
import whatsappImg from './images/whatsapp.png';
import designImg from './images/design.jpg';
import stampImg from './images/stamp.jpeg';
import citymapImg from './images/citymap.jpeg';
import medalImg from './images/medal.jpeg';
import idcardImg from './images/idcard.jpeg';
import marriageImg from './images/marriage.jpeg';
import letterheadImg from './images/letterhead.jpeg';
import menuImg from './images/menu.jpeg';
import bookingImg from './images/booking.jpeg';
import pocketmapImg from './images/pocketmap.jpeg';
import boardImg from './images/board.jpeg';
import bannerImg from './images/banner.jpeg';
import tokenImg from './images/token.jpeg';
import envelopeImg from './images/envelope.jpeg';


export default function OutdoorNepal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

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
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
     { icon: citymapImg, title: "City Map", color: "#FF6B9D" },
  { icon: medalImg, title: "Medal Printing", color: "#4ECDC4" },
  { icon: idcardImg, title: "ID Cards", color: "#A29BFE" },
  { icon: marriageImg, title: "Marriage Cards", color: "#FDCB6E" },
  { icon: letterheadImg, title: "Letterhead", color: "#00B894" },
  { icon: stampImg, title: "Stamps", color: "#D63031" },
  { icon: menuImg, title: "Menu Printing", color: "#6C5CE7" },
  { icon: bookingImg, title: "Booking Forms", color: "#E17055" },
  { icon: pocketmapImg, title: "Pocket Map", color: "#0984E3" },
  { icon: boardImg, title: "Sign Boards", color: "#74B9FF" },
  { icon: bannerImg, title: "Banners", color: "#FF7675" },
  { icon: tokenImg, title: "Token / Certificates", color: "#55EFC4" },
  { icon: envelopeImg, title: "Envelopes", color: "#D63031" },
  ];

  const socials = [
    { icon: facebookImg, isImg: true, link: 'https://www.facebook.com/profile.php?id=100067873513009' },
    { icon: instagramImg, isImg: true, link: 'https://www.instagram.com/bharat_outdoor/' },
    { icon: whatsappImg, isImg: true, link: 'https://wa.me/9779841503408' },
  ];
  
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      right: "-25px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      zIndex: 2,
      fontSize: "30px",
      color: "#333",
      background: "rgba(255,255,255,0.6)",
      padding: "10px",
      borderRadius: "50px",
      backdropFilter: "blur(10px)",
    }}
  >
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      left: "-25px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      zIndex: 2,
      fontSize: "30px",
      color: "#333",
      background: "rgba(255,255,255,0.6)",
      padding: "10px",
      borderRadius: "50px",
      backdropFilter: "blur(10px)",
    }}
  >
    ❮
  </div>
);
const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 600,
  slidesToShow: isMobile ? 1 : 3,
  slidesToScroll: 1,
  arrows: !isMobile,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerMode: false,
  centerPadding: "0px",
};

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
        
        * {
          box-sizing: border-box;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
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
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        padding: isMobile ? '1rem 0' : '1.2rem 0'
      }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: isMobile ? '0 1rem' : '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '1rem' }}>
            
            <div
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  style={{ cursor: "pointer" , display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '1rem' }}
>
  <img src={logoPng} alt="Outdoor Nepal Logo" style={{ 
              width: isMobile ? '40px' : '50px', 
              height: isMobile ? '40px' : '50px', 
              objectFit: 'contain' 
            }} />
               <div>
              <div style={{ 
                fontSize: isMobile ? '1rem' : '1.4rem', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}>
                Outdoor Nepal
              </div>
              <div style={{ 
                fontSize: isMobile ? '0.6rem' : '0.7rem', 
                color: '#718096', 
                fontWeight: '500' 
              }}>
                Thamel, Kathmandu
              </div>
            </div>
</div>
          </div>

          {/* Desktop Menu */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
              {['Home', 'Services', 'About', 'Gallery', 'Location', 'Contact'].map((item, idx) => (
                <a
                  key={item}
                  href="#"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    scrollToSection(['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx]); 
                  }}
                  style={{
                    color: activeSection === ['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx] ? '#FF6B9D' : '#E2E8F0',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#FF6B9D'}
                  onMouseLeave={(e) => e.target.style.color = activeSection === ['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx] ? '#FF6B9D' : '#E2E8F0'}
                >
                  {item}
                </a>
              ))}
            </div>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                cursor: 'pointer',
                zIndex: 1001
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
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
            padding: '1.5rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            animation: 'slideInRight 0.3s ease',
            maxHeight: 'calc(100vh - 70px)',
            overflowY: 'auto'
          }}>
            {['Home', 'Services', 'About', 'Gallery', 'Location', 'Contact'].map((item, idx) => (
              <a
                key={item}
                href="#"
                onClick={(e) => { 
                  e.preventDefault(); 
                  scrollToSection(['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx]); 
                }}
                style={{
                  display: 'block',
                  color: '#E2E8F0',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  padding: '1rem 0',
                  borderBottom: idx < 5 ? '1px solid rgba(226, 232, 240, 0.1)' : 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#FF6B9D'}
                onMouseLeave={(e) => e.target.style.color = '#E2E8F0'}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: isMobile ? '40px' : '80px',
        paddingBottom: isMobile ? '1rem' : '0',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: isMobile ? '200px' : '400px',
          height: isMobile ? '200px' : '400px',
          background: 'radial-gradient(circle, rgba(255, 107, 157, 0.2), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: isMobile ? '180px' : '350px',
          height: isMobile ? '180px' : '350px',
          background: 'radial-gradient(circle, rgba(78, 205, 196, 0.2), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>

        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: isMobile ? '0 1.5rem' : '0 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: isMobile ? '2rem' : '4rem',
          alignItems: 'center',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          
        }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'lavender',
              borderRadius: '50px',
              color: 'Black',
              fontSize: isMobile ? '0.8rem' : '0.9rem',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Thamel's Best Printing Service
            </div>
            <h1 style={{
              fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
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
              fontSize: isMobile ? '1rem' : '1.2rem',
              lineHeight: '1.8',
              color: 'white',
              marginBottom: '2.5rem',
              maxWidth: '550px',
              margin: isMobile ? '0 auto 2rem' : '0 0 2.5rem 0'
            }}>
              Transform your vision into stunning prints. From business cards to large-format banners, we deliver excellence in every detail.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              <button
                onClick={() => scrollToSection('services')}
                style={{
                  padding: isMobile ? '0.9rem 1.5rem' : '1rem 2rem',
                  background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: isMobile ? '0.9rem' : '1rem',
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
                  padding: isMobile ? '0.9rem 1.5rem' : '1rem 2rem',
                  background: 'transparent',
                  color: '#FF6B9D',
                  border: '2px solid #FF6B9D',
                  borderRadius: '50px',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#FF6B9D';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#FF6B9D';
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>

          {!isMobile && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(255, 107, 157, 0.3)'
              }}>
                <img 
                  src={designImg} 
                  alt="Design Workspace" 
                  style={{ 
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: "60px 0", textAlign: "center", background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
 }}>
  <h2 style={{ fontSize: "2.2rem", fontWeight: "700", marginBottom: "30px" }}>
    Our Services
  </h2>

  <div style={{ maxWidth: "1400px", margin: "0 auto", gap:"2px" }}>
    <Slider {...sliderSettings}>
      {services.map((service, index) => (
        <div key={index} style={{ padding: "40px" }}>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(15px)",
              borderRadius: "22px",
              padding: "10px",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              height: "360px",
              display: "flex",
              gap: "15px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transition: "0.3s ease",
            }}
          >
            <div
              style={{
                width: "318px",
                height: "400px",
                borderRadius: "20px",
                overflow: "hidden",
                background: service.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src={service.icon}
                alt={service.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <h3
              style={{
                marginTop: "15px",
                fontSize: "1.2rem",
                fontWeight: "700",
                color: "#333",
                textAlign: "center",
              }}
            >
              {service.title}
            </h3>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

             {/* Special Offers Section */}
      <section style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 107, 157, 0.15), transparent)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
        
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(255, 107, 157, 0.1)',
              borderRadius: '50px',
              color: '#FF6B9D',
              fontSize: isMobile ? '0.8rem' : '0.9rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              🎉 Special Offers
            </div>
            <h2 style={{
              fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: '#F5F7FA',
              marginBottom: '0.5rem'
            }}>
              Limited Time Deals
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.1rem',
              color: '#E2E8F0'
            }}>
              Don't miss out on these amazing offers!
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '1.5rem' : '2rem',
            marginBottom: isMobile ? '3rem' : '4rem'
          }}>
            {[
              {
                title: 'Bulk Order Discount',
                discount: '20% OFF',
                description: 'Order 500+ items and save big',
                icon: '📦',
                color: '#FF6B9D',
                badge: 'Popular'
              },
              {
                title: 'First Time Customer',
                discount: '15% OFF',
                description: 'Special welcome offer for new clients',
                icon: '🎁',
                color: '#4ECDC4',
                badge: 'New'
              },
              {
                title: 'This Month Special',
                discount: '10% OFF',
                description: 'On all business card orders',
                icon: '⚡',
                color: '#FFE66D',
                badge: 'Limited'
              }
            ].map((offer, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '25px',
                  padding: isMobile ? '2rem 1.5rem' : '2.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = offer.color;
                  e.currentTarget.style.boxShadow = `0 20px 40px ${offer.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: offer.color,
                  color: '#0A1A2F',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}>
                  {offer.badge}
                </div>

                <div style={{
                  fontSize: isMobile ? '3rem' : '3.5rem',
                  marginBottom: '1rem'
                }}>
                  {offer.icon}
                </div>

                <h3 style={{
                  fontSize: isMobile ? '1.3rem' : '1.5rem',
                  fontWeight: '700',
                  color: '#F5F7FA',
                  marginBottom: '0.5rem'
                }}>
                  {offer.title}
                </h3>

                <div style={{
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  fontWeight: '800',
                  background: `linear-gradient(135deg, ${offer.color}, ${offer.color}dd)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '1rem'
                }}>
                  {offer.discount}
                </div>

                <p style={{
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  color: '#E2E8F0',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {offer.description}
                </p>

                <button
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.5rem',
                    background: offer.color,
                    color: '#0A1A2F',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = `0 10px 25px ${offer.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                  onClick={() => scrollToSection('contact')}
                >
                  Claim Offer
                </button>
              </div>
            ))}
          </div>

          {/* Promotional Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
            borderRadius: '30px',
            padding: isMobile ? '2rem 1.5rem' : '3rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)',
              borderRadius: '50%'
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: '1rem'
              }}>
                🎊 Seasonal Promotions!
              </h3>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.2rem',
                color: 'rgba(255, 255, 255, 0.95)',
                marginBottom: '1.5rem',
                maxWidth: '700px',
                margin: '0 auto 1.5rem'
              }}>
            Offers Comming Soon !!
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontWeight: '600',
                color: 'white'
              }}>
                 <span style={{ fontWeight: '800' }}>Stay Tuned</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)'
      }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: isMobile ? '3rem' : '5rem',
          alignItems: 'center'
        }}>

          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(255, 107, 157, 0.1)',
              borderRadius: '50px',
              color: '#FF6B9D',
              fontSize: isMobile ? '0.8rem' : '0.9rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              💼 About Us
            </div>
            <h2 style={{
              fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: '#F5F7FA'
            }}>
              Your Trusted Printing Partner
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: '1.8',
              color: '#E2E8F0',
              marginBottom: '1.5rem'
            }}>
              With over 18 years of excellence, Outdoor Nepal has been the go-to printing service in Thamel, Kathmandu. We combine cutting-edge technology with traditional craftsmanship.
            </p>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: '1.8',
              color: '#E2E8F0',
              marginBottom: '2rem'
            }}>
              From small business cards to large-scale banners, we handle every project with precision, care, and creativity. Our commitment to quality has earned us the trust of hundreds of satisfied clients.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              {['Quality First', 'Fast Delivery', '24/7 Support'].map((feature, idx) => (
                <div key={idx} style={{
                  padding: '0.8rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50px',
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  fontWeight: '600',
                  color: '#F5F7FA',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
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
        padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)'
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(255, 230, 109, 0.2)',
            borderRadius: '50px',
            color: '#FF6B9D',
            fontSize: isMobile ? '0.8rem' : '0.9rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            🎨 Our Work
          </div>
          <h2 style={{
            fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: 'white'
          }}>Trusted by Leading Brands</h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: '#E2E8F0',
            marginBottom: isMobile ? '3rem' : '4rem'
          }}>
            See the quality that sets us apart
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            {icons.map((icon, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: '25px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  background: 'rgba(255, 255, 255, 0.05)',
                  height: isMobile ? '250px' : '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 107, 157, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
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
        padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)'
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(78, 205, 196, 0.1)',
            borderRadius: '50px',
            color: '#4ECDC4',
            fontSize: isMobile ? '0.8rem' : '0.9rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            📍 Find Us
          </div>
          <h2 style={{
            fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: 'white'
          }}>Visit Our Store</h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: 'lavender',
            marginBottom: isMobile ? '2rem' : '3rem'
          }}>
            Located in the heart of Thamel, Kathmandu
          </p>

          <div style={{
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
            height: isMobile ? '350px' : '500px'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1818.3061968530792!2d85.3116012!3d27.7180766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190058faae9f%3A0x77a70bd63ce8e35c!2sOutdoor%20Nepal%20-%20Printing%20Service!5e1!3m2!1sen!2snp!4v1738248837472!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
        backgroundSize: '200% 200%',
        animation: 'gradient 5s ease infinite'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Let's Create Something Amazing
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: isMobile ? '2rem' : '3rem'
          }}>
            Ready to start your printing project? We're here to help!
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '1rem' : '1.5rem',
            marginBottom: isMobile ? '2rem' : '3rem',
            flexWrap: 'wrap'
          }}>
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: isMobile ? '60px' : '70px',
                  height: isMobile ? '60px' : '70px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 107, 157, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                }}
              >
                <img 
                  src={social.icon} 
                  alt="social icon"
                  style={{
                    width: isMobile ? '35px' : '40px',
                    height: isMobile ? '35px' : '40px',
                    objectFit: 'contain'
                  }}
                />
              </a>
            ))}
          </div>

          <form style={{ 
            maxWidth: '500px', 
            margin: '0 auto', 
            textAlign: 'left',
            padding: isMobile ? '0' : '0 1rem'
          }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              color: 'white',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              Name
              <input 
                type="text" 
                placeholder="Your name" 
                style={{
                  width: '100%',
                  padding: isMobile ? '0.7rem' : '0.8rem',
                  marginTop: '0.3rem',
                  borderRadius: '8px',
                  border: 'none',
                  outline: 'none',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }} 
              />
            </label>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              color: 'white',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              Email
              <input 
                type="email" 
                placeholder="Your email" 
                style={{
                  width: '100%',
                  padding: isMobile ? '0.7rem' : '0.8rem',
                  marginTop: '0.3rem',
                  borderRadius: '8px',
                  border: 'none',
                  outline: 'none',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }} 
              />
            </label>
            <label style={{ 
              display: 'block', 
              marginBottom: '1rem', 
              color: 'white',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              Message
              <textarea 
                placeholder="Your message" 
                rows={isMobile ? "4" : "5"}
                style={{
                  width: '100%',
                  padding: isMobile ? '0.7rem' : '0.8rem',
                  marginTop: '0.3rem',
                  borderRadius: '8px',
                  border: 'none',
                  outline: 'none',
                  resize: 'vertical',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}
              ></textarea>
            </label>
            <button 
              type="submit" 
              style={{
                width: '100%',
                padding: isMobile ? '0.9rem' : '1rem',
                background: 'white',
                color: '#FF6B9D',
                fontWeight: '600',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: isMobile ? '0.9rem' : '1rem'
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
            bottom: isMobile ? '2rem' : '3rem',
            right: isMobile ? '1.5rem' : '3rem',
            background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)',
            border: 'none',
            padding: isMobile ? '0.8rem' : '1rem',
            borderRadius: '50%',
            color: 'white',
            fontSize: isMobile ? '1.2rem' : '1.5rem',
            cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(255, 107, 157, 0.6)',
            transition: 'all 0.3s ease',
            zIndex: 999,
            width: isMobile ? '45px' : '55px',
            height: isMobile ? '45px' : '55px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
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