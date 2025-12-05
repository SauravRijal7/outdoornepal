import React, { useState, useEffect, useRef } from 'react';
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
import emailjs from '@emailjs/browser';

export default function OutdoorNepal() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [touchStart, setTouchStart] = useState(null);
const form = useRef();
 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    form.current,
    { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
  )
  .then(() => {
    alert("Message sent!");
    form.current.reset();
  })
  .catch((error) => {
    alert("Failed to send message");
    console.error(error);
    
  });
};
const handleTouchStart = (e) => {
  setTouchStart(e.touches[0].clientX);
};

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && menuOpen) setMenuOpen(false);
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      const sections = ['hero', 'services', 'about', 'gallery', 'location', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleTouchMove = (e) => {
      if (!touchStart) return;
      const touchEnd = e.touches[0].clientX;
      const diff = touchStart - touchEnd;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && menuOpen) {
          setMenuOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [touchStart, menuOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Account for fixed header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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

  // Mobile-optimized slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: !isMobile,
    centerMode: isMobile,
    centerPadding: isMobile ? "20px" : "0px",
    swipeToSlide: true,
    touchThreshold: 10,
    dots: false ,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
        }
      }
    ]
  };

  const icons = [
    <img 
      src={logoPng} 
      alt="Logo"
      style={{ width: "120px", height: "120px", objectFit: "contain" }}
    />,
    <img 
      src={logoPng} 
      alt="Logo"
      style={{ width: "120px", height: "120px", objectFit: "contain" }}
    />,
    <img 
      src={logoPng} 
      alt="Logo"
      style={{ width: "120px", height: "120px", objectFit: "contain" }}
    />
  ];

  return (
    <div style={{ 
      margin: 0, 
      padding: 0, 
      fontFamily: "'Poppins', sans-serif",
      background: '#FAFBFC',
      color: '#2D3748',
      overflowX: 'hidden',
      WebkitTapHighlightColor: 'transparent'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .mobile-touch-button {
          transition: all 0.2s ease;
        }
        
        .mobile-touch-button:active {
          transform: scale(0.95);
        }
        
        /* Improve mobile scrolling */
        .slick-slider {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>

      {/* Enhanced Mobile Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        padding: isMobile ? '0.8rem 0' : '1.2rem 0',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: isMobile ? '0 1rem' : '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div 
            onClick={() => scrollToSection('hero')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: isMobile ? '0.5rem' : '1rem',
              cursor: 'pointer'
            }}
            className="mobile-touch-button"
          >
            <img src={logoPng} alt="Outdoor Nepal Logo" style={{ 
              width: isMobile ? '35px' : '50px', 
              height: isMobile ? '35px' : '50px', 
              objectFit: 'contain' 
            }} />
            <div>
              <div style={{ 
                fontSize: isMobile ? '0.9rem' : '1.4rem', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}>
                Outdoor Nepal
              </div>
              <div style={{ 
                fontSize: isMobile ? '0.5rem' : '0.7rem', 
                color: '#718096', 
                fontWeight: '500' 
              }}>
                Thamel, Kathmandu
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
                    position: 'relative',
                    padding: '0.5rem 0'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#FF6B9D'}
                  onMouseLeave={(e) => e.target.style.color = activeSection === ['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx] ? '#FF6B9D' : '#E2E8F0'}
                >
                  {item}
                  {activeSection === ['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx] && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)',
                      borderRadius: '2px'
                    }}></div>
                  )}
                </a>
              ))}
            </div>
          )}

          {/* Enhanced Mobile Hamburger */}
          {isMobile && (
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                cursor: 'pointer',
                zIndex: 1001,
                padding: '8px',
                borderRadius: '8px',
                background: menuOpen ? 'rgba(255,255,255,0.1)' : 'transparent',
                transition: 'all 0.3s ease'
              }}
              className="mobile-touch-button"
            >
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: '22px',
                  height: '2px',
                  background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' : 
                            menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1
                }}></div>
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Mobile Menu */}
        {menuOpen && isMobile && (
          <div style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(10, 26, 47, 0.98), rgba(35, 39, 42, 0.98))',
            padding: '2rem 1.5rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            animation: 'slideInRight 0.3s ease',
            overflowY: 'auto',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 999
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
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
                    color: activeSection === ['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx] ? '#FF6B9D' : '#E2E8F0',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    padding: '1.2rem 1rem',
                    borderRadius: '12px',
                    background: activeSection === ['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx] ? 
                               'rgba(255, 107, 157, 0.1)' : 'transparent',
                    border: activeSection === ['hero', 'services', 'about', 'gallery', 'location', 'contact'][idx] ?
                           '1px solid rgba(255, 107, 157, 0.3)' : '1px solid transparent',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                  className="mobile-touch-button"
                >
                  {item}
                </a>
              ))}
              
              {/* Social links in mobile menu */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.1)'
              }}>
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    className="mobile-touch-button"
                  >
                    <img 
                      src={social.icon} 
                      alt="social icon"
                      style={{
                        width: '24px',
                        height: '24px',
                        objectFit: 'contain'
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section for Mobile */}
     {/* Hero Section */}
<section id="hero" style={{
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: isMobile ? '100px' : '80px',
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
    display: isMobile ? 'block' : 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '2rem' : '4rem',
    alignItems: 'center',
    zIndex: 1,
    width: '100%'
  }}>
    {/* Text Content - Left Side */}
    <div style={{ 
      textAlign: isMobile ? 'center' : 'left',
      order: isMobile ? 1 : 1
    }}>
      <div style={{
        display: 'inline-block',
        padding: '0.5rem 1.5rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50px',
        color: 'white',
        fontSize: isMobile ? '0.8rem' : '0.9rem',
        fontWeight: '600',
        marginBottom: '1.5rem',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        🏆 Thamel's Best Printing Service
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
        Bring Your Ideas{!isMobile && <br />} to Life
      </h1>
      <p style={{
        fontSize: isMobile ? '1rem' : '1.2rem',
        lineHeight: '1.8',
        color: 'rgba(255, 255, 255, 0.9)',
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

    {/* Image - Right Side (Desktop only) */}
    {!isMobile && (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        order: 2
      }}>
        <div style={{
          width: '100%',
          maxWidth: '500px',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(255, 107, 157, 0.3)',
          transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
          transition: 'transform 0.5s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1)';
        }}
        >
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
    {isMobile && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              <a
                href="tel:+9779841503408"
                style={{
                  padding: '0.8rem 1.2rem',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
                className="mobile-touch-button"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/9779841503408"
                style={{
                  padding: '0.8rem 1.2rem',
                  background: '#25D366',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                className="mobile-touch-button"
              >
                💬 WhatsApp
              </a>
            </div>
          )}
  </div>
</section>
{/* Enhanced Services Section */}
<section id="services" style={{ 
  padding: isMobile ? "4rem 1rem" : "6rem 2rem", 
  textAlign: "center", 
  background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
  position: 'relative',
  overflow: 'hidden'
}}>
  {/* Background Elements */}
  <div style={{
    position: 'absolute',
    top: '10%',
    right: '5%',
    width: isMobile ? '100px' : '200px',
    height: isMobile ? '100px' : '200px',
    background: 'radial-gradient(circle, rgba(255, 107, 157, 0.15), transparent)',
    borderRadius: '50%',
    filter: 'blur(40px)'
  }}></div>
  <div style={{
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    width: isMobile ? '120px' : '250px',
    height: isMobile ? '120px' : '250px',
    background: 'radial-gradient(circle, rgba(78, 205, 196, 0.15), transparent)',
    borderRadius: '50%',
    filter: 'blur(40px)'
  }}></div>

  <div style={{ 
    maxWidth: "1400px", 
    margin: "0 auto",
    position: 'relative',
    zIndex: 2
  }}>
    {/* Section Header */}
    <div style={{ 
      textAlign: 'center', 
      marginBottom: isMobile ? "2.5rem" : "4rem",
      padding: isMobile ? "0 1rem" : "0"
    }}>
      <div style={{
        display: 'inline-block',
        padding: '0.5rem 1.5rem',
        background: 'rgba(255, 107, 157, 0.1)',
        borderRadius: '25px',
        color: '#FF6B9D',
        fontSize: isMobile ? '0.8rem' : '0.9rem',
        fontWeight: '600',
        marginBottom: '1rem',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 107, 157, 0.2)'
      }}>
        🛠️ Our Services
      </div>
      <h2 style={{ 
        fontSize: isMobile ? "2rem" : "clamp(2.2rem, 4vw, 3rem)", 
        fontWeight: "800", 
        marginBottom: "1rem",
        background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Premium Printing Solutions
      </h2>
      <p style={{
        fontSize: isMobile ? "1rem" : "1.1rem",
        color: 'rgba(255,255,255,0.9)',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        From business cards to large format printing, we deliver exceptional quality for all your printing needs
      </p>
    </div>

    {/* Services Slider */}
    <div style={{ 
      padding: isMobile ? "0 0.5rem" : "0 2rem"
    }}>
      <Slider {...sliderSettings}>
        {services.map((service, index) => (
          <div key={index} style={{ 
            padding: isMobile ? "15px 10px" : "25px 20px",
            transition: 'all 0.3s ease'
          }}>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                backdropFilter: "blur(20px)",
                borderRadius: "25px",
                padding: isMobile ? "2rem 1rem" : "2.5rem 1.5rem",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.2),
                  0 2px 8px rgba(255, 255, 255, 0.05)
                `,
                height: isMobile ? "320px" : "380px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="mobile-touch-button"
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))';
                  e.currentTarget.style.boxShadow = `
                    0 20px 40px rgba(0, 0, 0, 0.3),
                    0 8px 25px ${service.color}40
                  `;
                  e.currentTarget.style.borderColor = service.color;
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))';
                  e.currentTarget.style.boxShadow = `
                    0 8px 32px rgba(0, 0, 0, 0.2),
                    0 2px 8px rgba(255, 255, 255, 0.05)
                  `;
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                }
              }}
            >
              {/* Service Number */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: service.color,
                color: 'white',
                width: isMobile ? '30px' : '35px',
                height: isMobile ? '30px' : '35px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                fontWeight: '700',
                boxShadow: `0 4px 15px ${service.color}80`
              }}>
                {index + 1}
              </div>

              {/* Service Icon */}
              <div
  style={{
    width: isMobile ? "270px" : "220px",
    height: isMobile ? "300px" : "240px", 
    borderRadius: "25px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `
      0 20px 40px ${service.color}50,
      inset 0 2px 15px rgba(255,255,255,0.3)
    `,
    marginBottom: "1rem",
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    border: `2px solid ${service.color}40`,
    position: 'relative',
    background: `linear-gradient(145deg, ${service.color}15, ${service.color}05)`
  }}
>
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${service.color}20, transparent)`,
    borderRadius: '25px',
    opacity: 0.6
  }}></div>
  
  <img
    src={service.icon}
    alt={service.title}
    style={{ 
      width: "92%", 
      height: "92%", 
      objectFit: "cover",
      borderRadius: '18px',
      transition: 'all 0.4s ease',
      position: 'relative',
      zIndex: 2,
      filter: 'brightness(1.05) contrast(1.1)'
    }}
    onMouseEnter={(e) => {
      if (!isMobile) {
        e.target.style.transform = 'scale(1.08)';
        e.target.style.filter = 'brightness(1.1) contrast(1.2)';
      }
    }}
    onMouseLeave={(e) => {
      if (!isMobile) {
        e.target.style.transform = 'scale(1)';
        e.target.style.filter = 'brightness(1.05) contrast(1.1)';
      }
    }}
  />
</div>

              {/* Service Content */}
              <div style={{ 
                textAlign: 'center',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h3
                  style={{
                    fontSize: isMobile ? "1.2rem" : "1.4rem",
                    fontWeight: "700",
                    color: "white",
                    margin: "0 0 1rem 0",
                    lineHeight: '1.3'
                  }}
                >
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p style={{
                  fontSize: isMobile ? "0.85rem" : "0.95rem",
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.5',
                  margin: '0',
                  display: isMobile ? 'none' : 'block'
                }}>
                  High-quality {service.title.toLowerCase()} with premium materials and fast turnaround.
                </p>
              </div>

              {/* CTA Button */}
              <button
                style={{
                  marginTop: '1rem',
                  padding: isMobile ? '0.7rem 1.5rem' : '0.8rem 2rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '25px',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = service.color;
                  e.target.style.borderColor = service.color;
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.transform = 'translateY(0)';
                }}
                onClick={() => scrollToSection('contact')}
              >
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    {/* Bottom CTA */}
    <div style={{
      marginTop: isMobile ? "3rem" : "4rem",
      textAlign: 'center'
    }}>
      <p style={{
        fontSize: isMobile ? "1rem" : "1.1rem",
        color: 'rgba(255,255,255,0.8)',
        marginBottom: "1.5rem"
      }}>
        Can't find what you're looking for?
      </p>
      <button
        onClick={() => scrollToSection('contact')}
        style={{
          padding: isMobile ? "1rem 2rem" : "1.2rem 2.5rem",
          background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          fontSize: isMobile ? "1rem" : "1.1rem",
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(255, 107, 157, 0.3)',
          transition: 'all 0.3s ease'
        }}
        className="mobile-touch-button"
      >
        💬 Custom Order Inquiry
      </button>
    </div>
  </div>
</section>

      {/* Enhanced Special Offers for Mobile */}
      <section style={{
        padding: isMobile ? '3rem 1rem' : '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '4rem' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.2rem',
              background: 'rgba(255, 107, 157, 0.1)',
              borderRadius: '25px',
              color: '#FF6B9D',
              fontSize: isMobile ? '0.75rem' : '0.9rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              🎉 Special Offers
            </div>
            <h2 style={{
              fontSize: isMobile ? '1.6rem' : 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: '#F5F7FA',
              marginBottom: '0.5rem'
            }}>
              Limited Time Deals
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '1rem' : '2rem',
            marginBottom: isMobile ? '2rem' : '4rem'
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
                  borderRadius: '20px',
                  padding: isMobile ? '1.5rem' : '2.5rem',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                }}
                className="mobile-touch-button"
              >
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: offer.color,
                  color: '#0A1A2F',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '15px',
                  fontSize: '0.7rem',
                  fontWeight: '700'
                }}>
                  {offer.badge}
                </div>

                <div style={{
                  fontSize: isMobile ? '2.5rem' : '3.5rem',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {offer.icon}
                </div>

                <h3 style={{
                  fontSize: isMobile ? '1.1rem' : '1.5rem',
                  fontWeight: '700',
                  color: '#F5F7FA',
                  marginBottom: '0.5rem',
                  textAlign: 'center'
                }}>
                  {offer.title}
                </h3>

                <div style={{
                  fontSize: isMobile ? '1.8rem' : '2.5rem',
                  fontWeight: '800',
                  background: `linear-gradient(135deg, ${offer.color}, ${offer.color}dd)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {offer.discount}
                </div>

                <p style={{
                  fontSize: isMobile ? '0.85rem' : '1rem',
                  color: '#E2E8F0',
                  lineHeight: '1.5',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  {offer.description}
                </p>

                <button
                  style={{
                    width: '100%',
                    padding: isMobile ? '0.8rem' : '0.9rem 1.5rem',
                    background: offer.color,
                    color: '#0A1A2F',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: isMobile ? '0.85rem' : '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  className="mobile-touch-button"
                  onClick={() => scrollToSection('contact')}
                >
                  Claim Offer
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section for Mobile */}
      <section id="about" style={{
        padding: isMobile ? '3rem 1rem' : '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)'
      }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.2rem',
            background: 'rgba(255, 107, 157, 0.1)',
            borderRadius: '25px',
            color: '#FF6B9D',
            fontSize: isMobile ? '0.75rem' : '0.9rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            💼 About Us
          </div>
          <h2 style={{
            fontSize: isMobile ? '1.6rem' : 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: '#F5F7FA'
          }}>
            Your Trusted Printing Partner
          </h2>
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            lineHeight: '1.6',
            color: '#E2E8F0',
            marginBottom: '1.5rem'
          }}>
            With over 18 years of excellence, Outdoor Nepal has been the go-to printing service in Thamel, Kathmandu. We combine cutting-edge technology with traditional craftsmanship.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '0.8rem' : '1rem',
            marginTop: '2rem'
          }}>
            {['Quality First', 'Fast Delivery', '24/7 Support', 'Best Price', 'Expert Team', 'Satisfaction Guaranteed'].map((feature, idx) => (
              <div key={idx} style={{
                padding: isMobile ? '0.8rem 0.5rem' : '1rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                fontSize: isMobile ? '0.75rem' : '0.9rem',
                fontWeight: '600',
                color: '#F5F7FA',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                ✓ {feature}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Enhanced Location Section for Mobile */}
      <section id="location" style={{
        padding: isMobile ? '3rem 1rem' : '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)'
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.2rem',
            background: 'rgba(78, 205, 196, 0.1)',
            borderRadius: '25px',
            color: '#4ECDC4',
            fontSize: isMobile ? '0.75rem' : '0.9rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            📍 Find Us
          </div>
          <h2 style={{
            fontSize: isMobile ? '1.6rem' : 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: 'white'
          }}>Visit Our Store</h2>
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: isMobile ? '1.5rem' : '3rem'
          }}>
            Located in the heart of Thamel, Kathmandu
          </p>

          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
            height: isMobile ? '300px' : '500px',
            marginBottom: isMobile ? '1.5rem' : '2rem'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1818.3061968530792!2d85.3116012!3d27.7180766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190058faae9f%3A0x77a70bd63ce8e35c!2sOutdoor%20Nepal%20-%20Printing%20Service!5e1!3m2!1sen!2snp!4v1738248837472!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Quick Directions for Mobile */}
          {isMobile && (
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="https://maps.google.com/?q=Outdoor+Nepal+Thamel+Kathmandu"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.8rem 1.2rem',
                  background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                className="mobile-touch-button"
              >
                🗺️ Get Directions
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Contact Section for Mobile */}
      <section id="contact" style={{
        padding: isMobile ? '3rem 1rem' : '6rem 2rem',
        background: 'linear-gradient(135deg, #0A1A2F, #23272A)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: isMobile ? '1.6rem' : 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Let's Create Something Amazing
          </h2>
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: isMobile ? '2rem' : '3rem'
          }}>
            Ready to start your printing project? We're here to help!
          </p>

          {/* Enhanced Social Links */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '0.8rem' : '1.5rem',
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
                  width: isMobile ? '55px' : '70px',
                  height: isMobile ? '55px' : '70px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
                className="mobile-touch-button"
              >
                <img 
                  src={social.icon} 
                  alt="social icon"
                  style={{
                    width: isMobile ? '24px' : '30px',
                    height: isMobile ? '24px' : '30px',
                    objectFit: 'contain'
                  }}
                />
              </a>
            ))}
          </div>

          {/* Enhanced Contact Form */}
           <form
      ref={form}
      onSubmit={sendEmail}
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        textAlign: "left",
      }}
    >
      {/* Name */}
      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "block",
            marginBottom: "0.5rem",
            color: "white",
            fontSize: isMobile ? "0.9rem" : "1rem",
            fontWeight: "600",
          }}
        >
          Name
        </label>

        <input
          type="text"
          name="user_name" // IMPORTANT for EmailJS
          placeholder="Your name"
          style={{
            width: "100%",
            padding: isMobile ? "0.9rem" : "1rem",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.2)",
            outline: "none",
            fontSize: isMobile ? "0.9rem" : "1rem",
            background: "rgba(255,255,255,0.1)",
            color: "white",
            transition: "all 0.3s ease",
          }}
          onFocus={(e) => {
            e.target.style.background = "rgba(255,255,255,0.15)";
            e.target.style.borderColor = "#FF6B9D";
          }}
          onBlur={(e) => {
            e.target.style.background = "rgba(255,255,255,0.1)";
            e.target.style.borderColor = "rgba(255,255,255,0.2)";
          }}
        />
      </div>

      {/* Email */}
      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "block",
            marginBottom: "0.5rem",
            color: "white",
            fontSize: isMobile ? "0.9rem" : "1rem",
            fontWeight: "600",
          }}
        >
          Email
        </label>

        <input
          type="email"
          name="user_email" // IMPORTANT for EmailJS
          placeholder="Your email"
          style={{
            width: "100%",
            padding: isMobile ? "0.9rem" : "1rem",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.2)",
            outline: "none",
            fontSize: isMobile ? "0.9rem" : "1rem",
            background: "rgba(255,255,255,0.1)",
            color: "white",
            transition: "all 0.3s ease",
          }}
          onFocus={(e) => {
            e.target.style.background = "rgba(255,255,255,0.15)";
            e.target.style.borderColor = "#FF6B9D";
          }}
          onBlur={(e) => {
            e.target.style.background = "rgba(255,255,255,0.1)";
            e.target.style.borderColor = "rgba(255,255,255,0.2)";
          }}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label
          style={{
            display: "block",
            marginBottom: "0.5rem",
            color: "white",
            fontSize: isMobile ? "0.9rem" : "1rem",
            fontWeight: "600",
          }}
        >
          Message
        </label>

        <textarea
          name="message" // IMPORTANT for EmailJS
          placeholder="Your message"
          rows={isMobile ? "4" : "5"}
          style={{
            width: "100%",
            padding: isMobile ? "0.9rem" : "1rem",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.2)",
            outline: "none",
            resize: "vertical",
            fontSize: isMobile ? "0.9rem" : "1rem",
            background: "rgba(255,255,255,0.1)",
            color: "white",
            transition: "all 0.3s ease",
            minHeight: "120px",
          }}
          onFocus={(e) => {
            e.target.style.background = "rgba(255,255,255,0.15)";
            e.target.style.borderColor = "#FF6B9D";
          }}
          onBlur={(e) => {
            e.target.style.background = "rgba(255,255,255,0.1)";
            e.target.style.borderColor = "rgba(255,255,255,0.2)";
          }}
        ></textarea>
      </div>

      {/* Button */}
      <button
        type="submit"
        style={{
          width: "100%",
          padding: isMobile ? "1rem" : "1.2rem",
          background: "linear-gradient(135deg, #FF6B9D, #4ECDC4)",
          color: "white",
          fontWeight: "600",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          fontSize: isMobile ? "0.9rem" : "1rem",
          boxShadow: "0 8px 25px rgba(255, 107, 157, 0.3)",
        }}
        className="mobile-touch-button"
      >
        Send Message
      </button>
    </form> <br></br>
{/* Footer Section */}
<footer style={{
  background: 'linear-gradient(135deg, #0A0E17, #1A1F2C)',
  padding: isMobile ? '2rem 1rem' : '3rem 2rem',
  borderTop: '1px solid rgba(255,255,255,0.1)',
  width: '100%',
  margin: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingLeft: 0,
  paddingRight: 0,
  position: 'absolute',
  left: 0,
  right: 0
}}>
  <div style={{
    width: '100%',
    maxWidth: '1300px',
    margin: '0 auto',
    padding: isMobile ? '0 1rem' : '0 2rem'
  }}>
    
    {/* Main Footer Content */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
      gap: isMobile ? '2rem' : '3rem',
      marginBottom: '2rem',
      textAlign: isMobile ? 'center' : 'left'
    }}>
      
      {/* Brand Info */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          marginBottom: '1rem',
          justifyContent: isMobile ? 'center' : 'flex-start'
        }}>
          <img src={logoPng} alt="Outdoor Nepal Logo" style={{ 
            width: '40px', 
            height: '40px', 
            objectFit: 'contain' 
          }} />
          <div style={{ 
            fontSize: '1.2rem', 
            fontWeight: '700', 
            background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>
            Outdoor Nepal
          </div>
        </div>
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          marginBottom: '1rem'
        }}>
          Your trusted printing partner in Thamel, Kathmandu. Delivering exceptional quality and service since 2005.
        </p>
        <div style={{
          display: 'flex',
          gap: '0.8rem',
          justifyContent: isMobile ? 'center' : 'flex-start'
        }}>
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
              className="mobile-touch-button"
            >
              <img 
                src={social.icon} 
                alt="social icon"
                style={{
                  width: '18px',
                  height: '18px',
                  objectFit: 'contain'
                }}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 style={{
          color: 'white',
          fontSize: '1.1rem',
          fontWeight: '600',
          marginBottom: '1.2rem',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          Quick Links
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.7rem'
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
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                textAlign: isMobile ? 'center' : 'left'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FF6B9D'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
              className="mobile-touch-button"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <h3 style={{
          color: 'white',
          fontSize: '1.1rem',
          fontWeight: '600',
          marginBottom: '1.2rem',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          Contact Info
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            <div style={{
              width: '30px',
              height: '30px',
              background: 'rgba(255,107,157,0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem'
            }}>
              📍
            </div>
            <div style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem'
            }}>
              Thamel, Kathmandu, Nepal
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            <div style={{
              width: '30px',
              height: '30px',
              background: 'rgba(78,205,196,0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem'
            }}>
              📞
            </div>
            <a 
              href="tel:+9779841503408"
              style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#4ECDC4'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >
              +977 9841503408
            </a>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            <div style={{
              width: '30px',
              height: '30px',
              background: 'rgba(253,203,110,0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem'
            }}>
              ⏰
            </div>
            <div style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem'
            }}>
              9:00 AM - 7:00 PM
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: '2rem',
      textAlign: 'center'
    }}>
      <p style={{
        color: 'rgba(255,255,255,0.6)',
        fontSize: '0.85rem',
        marginBottom: '0.5rem'
      }}>
        © {new Date().getFullYear()} Outdoor Nepal. All rights reserved.
      </p>
      <p style={{
        color: 'rgba(255,255,255,0.5)',
        fontSize: '0.8rem'
      }}>
      </p>
    </div>
  </div>
</footer>
          {/* Quick Contact Info for Mobile */}
          {isMobile && (
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{
                color: 'white',
                fontSize: '1rem',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                📞 Quick Contact
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                textAlign: 'center'
              }}>
                <a 
                  href="tel:+9779841503408"
                  style={{
                    color: '#4ECDC4',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  +977 9841503408
                </a>
                <div style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.85rem'
                }}>
                  Thamel, Kathmandu, Nepal
                </div>
                <div style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.85rem'
                }}>
                  Open: 9AM - 7PM (Everyday)
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: isMobile ? '1.5rem' : '3rem',
            right: isMobile ? '1rem' : '3rem',
            background: 'linear-gradient(135deg, #FF6B9D, #4ECDC4)',
            border: 'none',
            padding: isMobile ? '0.7rem' : '1rem',
            borderRadius: '50%',
            color: 'white',
            fontSize: isMobile ? '1rem' : '1.5rem',
            cursor: 'pointer',
            boxShadow: '0 5px 20px rgba(255, 107, 157, 0.5)',
            transition: 'all 0.3s ease',
            zIndex: 999,
            width: isMobile ? '45px' : '55px',
            height: isMobile ? '45px' : '55px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
          className="mobile-touch-button"
        >
          ↑
        </button>
      )}
    </div>
    
  );
  
}
