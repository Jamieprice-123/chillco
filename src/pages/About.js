import React, { useState, useEffect, useRef } from 'react';
import aboutUs1 from '../assets/images/AboutUs-1.jpeg';
import aboutUs2 from '../assets/images/AboutUs-2.jpeg';
import aboutUs3 from '../assets/images/AboutUs-3.jpeg';

const About = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState({});
    const [scrollY, setScrollY] = useState(0);
    const sectionsRef = useRef([]);

    const aboutImages = [aboutUs1, aboutUs2, aboutUs3];

    // Image slideshow auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [aboutImages.length]);

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for fade-in animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.dataset.section]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const heroStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${aboutUs1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#ffffff',
        transform: `translateY(${scrollY * 0.5}px)`,
        transition: 'transform 0.1s ease-out'
    };

    return (
        <div>
            {/* Enhanced Hero Section with Parallax */}
            <section className="about-hero" style={heroStyle}>
                <div
                    className="hero-content"
                    style={{
                        animation: 'fadeInUp 1.2s ease-out',
                        transform: `translateY(${scrollY * -0.2}px)`
                    }}
                >
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                        animation: 'fadeInUp 1s ease-out'
                    }}>
                        About Chill Co.
                    </h1>
                    <p style={{
                        fontSize: '1.3rem',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                        animation: 'fadeInUp 1s ease-out 0.2s both'
                    }}>
                        Redefining streetwear with a chill attitude
                    </p>
                </div>

                {/* Floating Elements */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    animation: 'float 6s ease-in-out infinite',
                    backdropFilter: 'blur(10px)'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '30%',
                    left: '10%',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    animation: 'float 8s ease-in-out infinite reverse',
                    backdropFilter: 'blur(10px)'
                }} />
            </section>

            {/* Enhanced Content Section */}
            <section className="about-content">
                {/* Story Section */}
                <div
                    ref={el => sectionsRef.current[0] = el}
                    data-section="story"
                    style={{
                        opacity: isVisible.story ? 1 : 0,
                        transform: isVisible.story ? 'translateY(0)' : 'translateY(50px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    <h2 style={{
                        position: 'relative',
                        display: 'inline-block',
                        marginBottom: '3rem'
                    }}>
                        Our Story
                        <span style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: '0',
                            width: isVisible.story ? '100%' : '0%',
                            height: '3px',
                            backgroundColor: '#000000',
                            transition: 'width 1s ease-out 0.5s'
                        }} />
                    </h2>
                </div>

                {/* Animated Text Paragraphs */}
                <div
                    ref={el => sectionsRef.current[1] = el}
                    data-section="text1"
                    style={{
                        opacity: isVisible.text1 ? 1 : 0,
                        transform: isVisible.text1 ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                    }}
                >
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        marginBottom: '2rem',
                        color: '#333'
                    }}>
                        Founded with a simple mission: to create clothing that embodies the ultimate chill lifestyle.
                        At Chill Co., we believe that fashion should be comfortable, sustainable, and effortlessly cool.
                    </p>
                </div>

                <div
                    ref={el => sectionsRef.current[2] = el}
                    data-section="text2"
                    style={{
                        opacity: isVisible.text2 ? 1 : 0,
                        transform: isVisible.text2 ? 'translateX(0)' : 'translateX(50px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                    }}
                >
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        marginBottom: '2rem',
                        color: '#333'
                    }}>
                        Our journey began with a desire to fill the gap in the market for premium streetwear that
                        doesn't compromise on comfort or environmental responsibility. Every piece in our collection
                        is thoughtfully designed and ethically produced using sustainable materials.
                    </p>
                </div>

                <div
                    ref={el => sectionsRef.current[3] = el}
                    data-section="text3"
                    style={{
                        opacity: isVisible.text3 ? 1 : 0,
                        transform: isVisible.text3 ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
                    }}
                >
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        marginBottom: '3rem',
                        color: '#333'
                    }}>
                        From our signature hoodies to our iconic tees, each item tells a story of quality craftsmanship
                        and laid-back sophistication. We're not just a clothing brand – we're a lifestyle movement
                        that celebrates taking life at your own pace.
                    </p>
                </div>

                {/* Enhanced Image Gallery with Slideshow */}
                <div
                    ref={el => sectionsRef.current[4] = el}
                    data-section="gallery"
                    className="about-images"
                    style={{
                        opacity: isVisible.gallery ? 1 : 0,
                        transform: isVisible.gallery ? 'translateY(0)' : 'translateY(50px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s',
                        position: 'relative'
                    }}
                >
                    {/* Main Featured Image with Slideshow */}
                    <div style={{
                        gridColumn: window.innerWidth > 768 ? 'span 2' : 'span 1',
                        position: 'relative',
                        height: '400px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginBottom: '2rem'
                    }}>
                        {aboutImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`About Us ${index + 1}`}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: index === currentImageIndex ? 1 : 0,
                                    transition: 'opacity 1s ease-in-out',
                                    transform: index === currentImageIndex ? 'scale(1)' : 'scale(1.05)',
                                }}
                            />
                        ))}

                        {/* Image Indicators */}
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '8px'
                        }}>
                            {aboutImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        border: '2px solid white',
                                        backgroundColor: index === currentImageIndex ? 'white' : 'transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        opacity: index === currentImageIndex ? 1 : 0.7
                                    }}
                                />
                            ))}
                        </div>

                        {/* Image Overlay Text */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            background: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            padding: '1rem 1.5rem',
                            borderRadius: '8px',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600' }}>
                                Our Journey
                            </h3>
                            <p style={{ margin: '0.5rem 0 0', fontSize: '14px', opacity: 0.9 }}>
                                Behind the scenes at Chill Co.
                            </p>
                        </div>
                    </div>

                    {/* Individual Images */}
                    {aboutImages.map((image, index) => (
                        <div
                            key={index}
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                opacity: isVisible.gallery ? 1 : 0,
                                transform: isVisible.gallery ? 'scale(1)' : 'scale(0.9)',
                                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${1 + index * 0.2}s`
                            }}
                            onClick={() => setCurrentImageIndex(index)}
                        >
                            <img
                                src={image}
                                alt={`About Us ${index + 1}`}
                                className="about-image"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    filter: index === currentImageIndex ? 'brightness(1.1)' : 'brightness(0.9)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.05)';
                                    e.target.style.filter = 'brightness(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                    e.target.style.filter = index === currentImageIndex ? 'brightness(1.1)' : 'brightness(0.9)';
                                }}
                            />

                            {/* Image Number Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                width: '30px',
                                height: '30px',
                                background: 'rgba(255,255,255,0.9)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '12px',
                                fontWeight: '600',
                                color: '#000'
                            }}>
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Values Section */}
                <div
                    ref={el => sectionsRef.current[5] = el}
                    data-section="values"
                    style={{
                        marginTop: '4rem',
                        padding: '3rem 2rem',
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        borderRadius: '16px',
                        opacity: isVisible.values ? 1 : 0,
                        transform: isVisible.values ? 'translateY(0)' : 'translateY(50px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.2s'
                    }}
                >
                    <h3 style={{
                        textAlign: 'center',
                        fontSize: '2rem',
                        fontWeight: '600',
                        marginBottom: '2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Our Values
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        {[
                            { icon: '🌱', title: 'Sustainability', desc: 'Committed to ethical sourcing and environmental responsibility' },
                            { icon: '✨', title: 'Quality', desc: 'Premium materials and craftsmanship in every piece' },
                            { icon: '🤝', title: 'Community', desc: 'Building connections through shared values and lifestyle' },
                            { icon: '🎯', title: 'Authenticity', desc: 'Staying true to our roots and brand vision' }
                        ].map((value, index) => (
                            <div
                                key={index}
                                style={{
                                    textAlign: 'center',
                                    padding: '1.5rem',
                                    background: 'rgba(255,255,255,0.6)',
                                    borderRadius: '12px',
                                    opacity: isVisible.values ? 1 : 0,
                                    transform: isVisible.values ? 'translateY(0)' : 'translateY(30px)',
                                    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${1.4 + index * 0.1}s`,
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.8)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{value.icon}</div>
                                <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{value.title}</h4>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add floating animation keyframes */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
        </div>
    );
};

export default About;