import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import chillGuyHoodieBlack from '../assets/images/chill-guy-hoodie-black.webp';
import chillPillTee from '../assets/images/chill-pill-tee.webp';
import chillGuyHoodieGrey from '../assets/images/chill-guy-hoodie-grey.webp';
import home1 from '../assets/images/Home-1.webp';
import home2 from '../assets/images/Home-2.webp';
import home3 from '../assets/images/Home-3.webp';
import home4 from '../assets/images/Home-4.webp';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const heroImages = [home1, home2, home3, home4];

    // Auto-advance slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [heroImages.length]);

    // Intersection Observer for fade-in animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.observe-fade');
        elements.forEach((el) => observer.observe(el));

        // Trigger hero content animation
        setIsVisible(true);

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div>
            {/* Hero Section with Slideshow */}
            <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Background Slideshow */}
                <div className="hero-slideshow">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
                    ))}
                </div>

                {/* Hero Content */}
                <div
                    className="hero-content"
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    <h1 style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                    }}>
                        CHILL CO.
                    </h1>
                    <p style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                    }}>
                    </p>
                    <Link
                        to="/products"
                        className="cta-button"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
                        }}
                    >
                        Shop Now
                    </Link>
                </div>

                {/* Slideshow Indicators */}
                <div style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '10px',
                    zIndex: 10
                }}>
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                border: '2px solid white',
                                backgroundColor: index === currentSlide ? 'white' : 'transparent',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                opacity: index === currentSlide ? 1 : 0.6
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                    style={{
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255,255,255,0.2)',
                        border: '2px solid white',
                        color: 'white',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                        zIndex: 10,
                        backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.3)';
                        e.target.style.transform = 'translateY(-50%) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.2)';
                        e.target.style.transform = 'translateY(-50%) scale(1)';
                    }}
                    aria-label="Previous slide"
                >
                    ←
                </button>
                <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
                    style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255,255,255,0.2)',
                        border: '2px solid white',
                        color: 'white',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                        zIndex: 10,
                        backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.3)';
                        e.target.style.transform = 'translateY(-50%) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.2)';
                        e.target.style.transform = 'translateY(-50%) scale(1)';
                    }}
                    aria-label="Next slide"
                >
                    →
                </button>
            </section>

            {/* Featured Products Section */}
            <section className="section">
                <h2 className="section-title observe-fade" style={{ opacity: 0 }}>
                    Featured Products
                </h2>
                <div className="products-grid">
                    <Link
                        to="/product/chill-guy-hoodie-black"
                        className="product-card observe-fade animate-delay-100"
                        style={{ opacity: 0 }}
                    >
                        <div style={{ overflow: 'hidden' }}>
                            <img
                                src={chillGuyHoodieBlack}
                                alt="Chill Guy Hoodie Black"
                                className="product-image"
                                style={{
                                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                }}
                            />
                        </div>
                        <div className="product-info">
                            <h3 className="product-title">Chill Guy Hoodie Black</h3>
                            <p className="product-description">The only hoodie you need this year</p>
                            <p className="product-price">£45.00</p>
                        </div>
                    </Link>

                    <Link
                        to="/product/chill-pill-tee"
                        className="product-card observe-fade animate-delay-200"
                        style={{ opacity: 0 }}
                    >
                        <div style={{ overflow: 'hidden' }}>
                            <img
                                src={chillPillTee}
                                alt="Chill Pill Tee"
                                className="product-image"
                                style={{
                                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                }}
                            />
                        </div>
                        <div className="product-info">
                            <h3 className="product-title">The Chill Pill Tee</h3>
                            <p className="product-description">Feeling stressed? This tee will chill you out</p>
                            <p className="product-price">£25.00</p>
                        </div>
                    </Link>

                    <Link
                        to="/product/chill-guy-hoodie-grey"
                        className="product-card observe-fade animate-delay-300"
                        style={{ opacity: 0 }}
                    >
                        <div style={{ overflow: 'hidden' }}>
                            <img
                                src={chillGuyHoodieGrey}
                                alt="Chill Guy Hoodie Grey"
                                className="product-image"
                                style={{
                                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                }}
                            />
                        </div>
                        <div className="product-info">
                            <h3 className="product-title">Chill Guy Hoodie Grey</h3>
                            <p className="product-description">The only hoodie you need this year</p>
                            <p className="product-price">£45.00</p>
                        </div>
                    </Link>
                </div>

                {/* Additional Modern Features */}
                <div
                    className="observe-fade"
                    style={{
                        opacity: 0,
                        textAlign: 'center',
                        marginTop: '4rem',
                        padding: '2rem',
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        borderRadius: '12px',
                        transform: 'translateY(30px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Why Choose Chill Co.?
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        <div style={{ padding: '1rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌱</div>
                            <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Sustainable</h4>
                            <p style={{ color: '#666', fontSize: '14px' }}>Ethically sourced materials with low environmental impact</p>
                        </div>
                        <div style={{ padding: '1rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✨</div>
                            <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Premium Quality</h4>
                            <p style={{ color: '#666', fontSize: '14px' }}>Superior fabric blends for ultimate comfort and durability</p>
                        </div>
                        <div style={{ padding: '1rem' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚚</div>
                            <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Fast Shipping</h4>
                            <p style={{ color: '#666', fontSize: '14px' }}>Worldwide delivery with easy returns policy</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;