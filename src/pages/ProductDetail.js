import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import chillHoodie from '../assets/images/chill-hoodie.webp';
import chillGuyHoodieBlack from '../assets/images/chill-guy-hoodie-black.webp';
import chillGuyHoodieGrey from '../assets/images/chill-guy-hoodie-grey.webp';
import chillPillTee from '../assets/images/chill-pill-tee.webp';
import chillGuyTee from '../assets/images/chill-guy-tee.webp';

const ProductDetail = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [showDetails, setShowDetails] = useState(false);
    const [showShipping, setShowShipping] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    // Enhanced product data with additional images for slideshow
    const products = {
        'chill-hoodie': {
            name: 'Chill Hoodie',
            price: '£39.99',
            images: [chillHoodie],
            description: 'Ultimate comfort meets style in our premium chill hoodie.',
            features: [
                'Premium quality fabric blend',
                'Spacious kangaroo pouch pocket',
                'Adjustable drawstring hood',
                'Comfortable relaxed fit',
                'Durable construction'
            ],
            care: [
                'Machine wash: cold (max 30°C or 90°F)',
                'Tumble dry: medium',
                'Non-chlorine: bleach as needed'
            ],
            details: '100% cotton. Heavyweight cotton fleece with a relaxed, cropped fit. Features front pouch pockets, full metal zip with ring pull, and ribbed cuffs and hem. Bold black graphic on chest with stars, crescent logos, and registered mark symbol.',
            composition: '100% cotton',
            modelInfo: 'Model (man) wearing size M - 187 cm.'
        },
        'chill-guy-hoodie-black': {
            name: 'Chill Guy Hoodie Black',
            price: '£45.00',
            images: [chillGuyHoodieBlack],
            description: 'The only hoodie you need this year... So you have to come and get another next year, see you January 1st ;)',
            features: [
                'Spacious kangaroo pouch pocket to keep hands warm',
                'Adjustable drawstring hood for added comfort',
                'Made from 50% cotton and 50% polyester for a cozy feel',
                'DTF sleeve prints available for unique customization',
                'Ethically sourced US cotton with low environmental impact'
            ],
            care: [
                'Machine wash: cold (max 30°C or 90°F)',
                'Tumble dry: medium',
                'Non-chlorine: bleach as needed'
            ],
            details: '50% cotton, 50% polyester blend. Classic fit hoodie with drawstring hood and kangaroo pouch pocket. Soft interior fleece lining for comfort.',
            composition: '50% cotton, 50% polyester',
            modelInfo: 'Model wearing size M - 180 cm.'
        },
        'chill-guy-hoodie-grey': {
            name: 'Chill Guy Hoodie Grey',
            price: '£45.00',
            images: [chillGuyHoodieGrey],
            description: 'The only hoodie you need this year... So you have to come and get another next year, see you January 1st ;)',
            features: [
                'Spacious kangaroo pouch pocket to keep hands warm',
                'Adjustable drawstring hood for added comfort',
                'Made from 50% cotton and 50% polyester for a cozy feel',
                'DTF sleeve prints available for unique customization',
                'Ethically sourced US cotton with low environmental impact'
            ],
            care: [
                'Machine wash: cold (max 30°C or 90°F)',
                'Tumble dry: medium',
                'Non-chlorine: bleach as needed'
            ],
            details: '50% cotton, 50% polyester blend. Classic fit hoodie with drawstring hood and kangaroo pouch pocket. Soft interior fleece lining for comfort.',
            composition: '50% cotton, 50% polyester',
            modelInfo: 'Model wearing size M - 180 cm.'
        },
        'chill-pill-tee': {
            name: 'The Chill Pill Tee',
            price: '£25.00',
            images: [chillPillTee],
            description: 'Feeling stressed? This tee will chill you out.',
            features: [
                'Shoulder tape for enhanced durability',
                'Seamless tubular design reduces fabric waste',
                'Ribbed collar retains its shape',
                'Soft, sustainable cotton fabric',
                'Ethically produced with US-grown cotton'
            ],
            care: [
                'Machine wash: warm (max 40°C or 105°F)',
                'Non-chlorine: bleach as needed',
                'Tumble dry: medium'
            ],
            details: '100% US cotton. Classic crew neck t-shirt with ribbed collar and seamless design. Soft hand feel with excellent durability.',
            composition: '100% cotton',
            modelInfo: 'Model wearing size M - 180 cm.'
        },
        'chill-guy-tee': {
            name: 'The Chill Guy Tee',
            price: '£28.00',
            images: [chillGuyTee],
            description: 'This guy is more chill than ice, more chill than palmer, more chill than anything u can think of that\'s cold, really....you get he\'s just chill AF.',
            features: [
                'Shoulder tape for enhanced durability',
                'Seamless design reduces fabric waste',
                'Elastic ribbed collar retains shape',
                'Soft and strong fabric ideal for printing',
                'Ethically sourced 100% US cotton'
            ],
            care: [
                'Machine wash: warm (max 40°C or 105°F)',
                'Non-chlorine: bleach as needed',
                'Tumble dry: medium'
            ],
            details: '100% US cotton. Premium weight t-shirt with reinforced seaming and shoulder tape for enhanced durability.',
            composition: '100% cotton',
            modelInfo: 'Model wearing size M - 180 cm.'
        }
    };

    const product = products[id];

    // Trigger animations on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Handle image load
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    // Enhanced add to cart with loading state
    const handleAddToCart = async () => {
        if (!selectedSize) {
            // Shake animation for size selection
            const sizeSection = document.querySelector('.size-selection');
            if (sizeSection) {
                sizeSection.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                    sizeSection.style.animation = '';
                }, 500);
            }
            alert('Please select a size');
            return;
        }

        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);

        // Success animation
        const button = document.querySelector('.add-to-cart');
        if (button) {
            const originalText = button.textContent;
            button.textContent = '✓ Added!';
            button.style.backgroundColor = '#10b981';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '#000000';
            }, 2000);
        }
    };

    // Smooth toggle animations
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const toggleShipping = () => {
        setShowShipping(!showShipping);
    };

    if (!product) {
        return (
            <div className="section" style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                animation: 'fadeIn 0.8s ease-out'
            }}>
                <h2>Product not found</h2>
                <p style={{ color: '#666', marginTop: '1rem' }}>The product you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <div className="product-detail">
            <div className="product-detail-content">
                {/* Enhanced Product Image */}
                <div style={{
                    position: 'relative',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                    {!imageLoaded && (
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '600px',
                            backgroundColor: '#f8f8f8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2
                        }}>
                            <div className="loading"></div>
                        </div>
                    )}
                    <img
                        ref={imageRef}
                        src={product.images[0]}
                        alt={product.name}
                        className="product-detail-image"
                        onLoad={handleImageLoad}
                        style={{
                            opacity: imageLoaded ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out'
                        }}
                    />

                    {/* Image zoom indicator */}
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '12px',
                        opacity: imageLoaded ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out 0.3s'
                    }}>
                        🔍 Hover to zoom
                    </div>
                </div>

                {/* Enhanced Product Info */}
                <div
                    className="product-detail-info"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                    }}
                >
                    <h1 style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                    }}>
                        {product.name}
                    </h1>

                    <p
                        className="price"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                        }}
                    >
                        {product.price}
                    </p>

                    {/* Enhanced Size Selection */}
                    <div
                        className="size-selection"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
                        }}
                    >
                        <h3>Size</h3>
                        <div className="size-options">
                            {sizes.map((size, index) => (
                                <div
                                    key={size}
                                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                    style={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                                        transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.1}s`
                                    }}
                                >
                                    <span>{size}</span>
                                </div>
                            ))}
                        </div>
                        {product.modelInfo && (
                            <p style={{
                                fontSize: '12px',
                                color: '#999',
                                marginTop: '0.5rem',
                                opacity: isVisible ? 1 : 0,
                                transition: 'opacity 0.8s ease-out 1s'
                            }}>
                                {product.modelInfo}
                            </p>
                        )}
                    </div>

                    {/* Enhanced Add to Cart Button */}
                    <button
                        className="add-to-cart"
                        onClick={handleAddToCart}
                        disabled={isLoading}
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.7s',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {isLoading ? (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                <div className="loading" style={{ width: '16px', height: '16px', borderWidth: '2px' }}></div>
                                Adding to Cart...
                            </div>
                        ) : (
                            'Add to Cart'
                        )}
                    </button>

                    {/* Enhanced Product Details Toggles */}
                    <div
                        className="product-details-toggle"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
                        }}
                    >
                        <div className="details-section">
                            <div
                                className="details-header"
                                onClick={toggleDetails}
                                style={{
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <span>Details</span>
                                <span style={{
                                    transform: showDetails ? 'rotate(45deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}>
                                    {showDetails ? '−' : '+'}
                                </span>
                            </div>
                            <div style={{
                                maxHeight: showDetails ? '500px' : '0',
                                opacity: showDetails ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                paddingBottom: showDetails ? '1rem' : '0'
                            }}>
                                <div className="details-content">
                                    <p style={{ marginBottom: '1rem' }}>{product.description}</p>
                                    <p style={{ marginBottom: '1rem' }}>{product.details}</p>
                                    <p><strong>Composition:</strong> {product.composition}</p>

                                    <div style={{ marginTop: '1.5rem' }}>
                                        <h4 style={{
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            marginBottom: '0.5rem',
                                            textTransform: 'uppercase'
                                        }}>
                                            Product Features
                                        </h4>
                                        <ul className="features-list">
                                            {product.features.map((feature, index) => (
                                                <li
                                                    key={index}
                                                    style={{
                                                        opacity: showDetails ? 1 : 0,
                                                        transform: showDetails ? 'translateX(0)' : 'translateX(-20px)',
                                                        transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
                                                    }}
                                                >
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="details-section">
                            <div
                                className="details-header"
                                onClick={toggleShipping}
                                style={{
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <span>Shipping & Care</span>
                                <span style={{
                                    transform: showShipping ? 'rotate(45deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}>
                                    {showShipping ? '−' : '+'}
                                </span>
                            </div>
                            <div style={{
                                maxHeight: showShipping ? '400px' : '0',
                                opacity: showShipping ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                paddingBottom: showShipping ? '1rem' : '0'
                            }}>
                                <div className="details-content">
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                        gap: '1rem',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <div style={{
                                            opacity: showShipping ? 1 : 0,
                                            transform: showShipping ? 'translateY(0)' : 'translateY(10px)',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
                                        }}>
                                            <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>🌍</span>
                                            <strong>Worldwide shipping</strong>
                                        </div>
                                        <div style={{
                                            opacity: showShipping ? 1 : 0,
                                            transform: showShipping ? 'translateY(0)' : 'translateY(10px)',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                                        }}>
                                            <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>↩️</span>
                                            <strong>Easy returns</strong>
                                        </div>
                                        <div style={{
                                            opacity: showShipping ? 1 : 0,
                                            transform: showShipping ? 'translateY(0)' : 'translateY(10px)',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                                        }}>
                                            <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>⭐</span>
                                            <strong>High quality</strong>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 style={{
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            marginBottom: '0.5rem',
                                            textTransform: 'uppercase',
                                            opacity: showShipping ? 1 : 0,
                                            transform: showShipping ? 'translateY(0)' : 'translateY(10px)',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                                        }}>
                                            Care Instructions
                                        </h4>
                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                            {product.care.map((instruction, index) => (
                                                <li
                                                    key={index}
                                                    style={{
                                                        fontSize: '14px',
                                                        color: '#666',
                                                        padding: '0.2rem 0',
                                                        opacity: showShipping ? 1 : 0,
                                                        transform: showShipping ? 'translateX(0)' : 'translateX(-20px)',
                                                        transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${0.5 + index * 0.1}s`
                                                    }}
                                                >
                                                    • {instruction}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div style={{
                        marginTop: '2rem',
                        padding: '1.5rem',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.9s'
                    }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                            gap: '1rem',
                            textAlign: 'center'
                        }}>
                            <div>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔒</div>
                                <p style={{ fontSize: '12px', fontWeight: '600' }}>Secure Payment</p>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📦</div>
                                <p style={{ fontSize: '12px', fontWeight: '600' }}>Free Shipping Over £50</p>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚡</div>
                                <p style={{ fontSize: '12px', fontWeight: '600' }}>Fast Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Recommendations Section */}
            <div style={{
                marginTop: '4rem',
                padding: '2rem 0',
                borderTop: '1px solid #e5e5e5',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s'
            }}>
                <h3 style={{
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    You Might Also Like
                </h3>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                    gap: '1rem',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    {/* Quick product suggestions */}
                    {Object.entries(products)
                        .filter(([productId]) => productId !== id)
                        .slice(0, 3)
                        .map(([productId, productData], index) => (
                            <div
                                key={productId}
                                style={{
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s ease',
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    transitionDelay: `${1.2 + index * 0.1}s`
                                }}
                                onClick={() => window.location.href = `/product/${productId}`}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <img
                                    src={productData.images[0]}
                                    alt={productData.name}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        marginBottom: '0.5rem'
                                    }}
                                />
                                <p style={{
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    marginBottom: '0.2rem'
                                }}>
                                    {productData.name}
                                </p>
                                <p style={{
                                    fontSize: '12px',
                                    color: '#666'
                                }}>
                                    {productData.price}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Floating Action Button for Mobile */}
            <div style={{
                position: 'fixed',
                bottom: '80px',
                right: '20px',
                zIndex: 1000,
                opacity: selectedSize && window.innerWidth <= 768 ? 1 : 0,
                transform: selectedSize && window.innerWidth <= 768 ? 'scale(1)' : 'scale(0)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: selectedSize && window.innerWidth <= 768 ? 'auto' : 'none'
            }}>
                <button
                    onClick={handleAddToCart}
                    disabled={isLoading}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: isLoading ? '#666666' : '#000000',
                        color: '#ffffff',
                        border: 'none',
                        fontSize: isLoading ? '14px' : '24px',
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                        if (!isLoading) {
                            e.target.style.transform = 'scale(1.1)';
                            e.target.style.backgroundColor = '#333333';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isLoading) {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.backgroundColor = '#000000';
                        }
                    }}
                >
                    {isLoading ? (
                        <div className="loading" style={{
                            width: '20px',
                            height: '20px',
                            borderWidth: '2px',
                            borderColor: '#ffffff transparent #ffffff transparent'
                        }}></div>
                    ) : '🛒'}
                </button>
            </div>

            {/* Product Details Bottom Bar for Mobile */}
            <div style={{
                position: 'fixed',
                bottom: '0',
                left: '0',
                right: '0',
                backgroundColor: '#ffffff',
                borderTop: '1px solid #e5e5e5',
                padding: '1rem',
                zIndex: 999,
                display: window.innerWidth <= 768 ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
                animation: 'slideInUp 0.3s ease-out'
            }}>
                <div>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        margin: 0
                    }}>
                        {product.name}
                    </p>
                    <p style={{
                        fontSize: '14px',
                        color: '#666',
                        margin: 0
                    }}>
                        {product.price}
                    </p>
                </div>
                <button
                    onClick={handleAddToCart}
                    disabled={isLoading || !selectedSize}
                    style={{
                        backgroundColor: selectedSize ? '#000000' : '#cccccc',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: selectedSize ? 'pointer' : 'not-allowed',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}
                >
                    {isLoading ? 'Adding...' : selectedSize ? 'Add to Cart' : 'Select Size'}
                </button>
            </div>

            {/* Quick View Modal Trigger */}
            <div style={{
                position: 'fixed',
                top: '50%',
                right: '20px',
                transform: 'translateY(-50%)',
                zIndex: 1000,
                opacity: imageLoaded ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out 1s'
            }}>
                <button
                    onClick={() => {
                        // Create modal overlay
                        const modal = document.createElement('div');
                        modal.style.cssText = `
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0,0,0,0.9);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 10000;
                            animation: fadeIn 0.3s ease-out;
                        `;

                        modal.innerHTML = `
                            <div style="position: relative; max-width: 90vw; max-height: 90vh;">
                                <img src="${product.images[0]}" alt="${product.name}" 
                                     style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;">
                                <button onclick="this.parentElement.parentElement.remove()" 
                                        style="position: absolute; top: -40px; right: 0; background: white; border: none; 
                                               width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-size: 16px;">×</button>
                            </div>
                        `;

                        modal.onclick = (e) => {
                            if (e.target === modal) modal.remove();
                        };

                        document.body.appendChild(modal);
                    }}
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        border: '1px solid #e5e5e5',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(0,0,0,0.8)';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(255,255,255,0.9)';
                        e.target.style.color = 'black';
                        e.target.style.transform = 'scale(1)';
                    }}
                    title="View full size image"
                >
                    🔍
                </button>
            </div>

            {/* Scroll Progress Indicator */}
            <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`,
                height: '3px',
                backgroundColor: '#000000',
                zIndex: 1001,
                transition: 'width 0.1s ease-out'
            }}></div>

            {/* Share Button */}
            <div style={{
                position: 'fixed',
                top: '120px',
                right: '20px',
                zIndex: 1000,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.5s'
            }}>
                <button
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({
                                title: product.name,
                                text: product.description,
                                url: window.location.href
                            });
                        } else {
                            navigator.clipboard.writeText(window.location.href);
                            alert('Link copied to clipboard!');
                        }
                    }}
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        border: '1px solid #e5e5e5',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(0,0,0,0.8)';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(255,255,255,0.9)';
                        e.target.style.color = 'black';
                        e.target.style.transform = 'scale(1)';
                    }}
                    title="Share this product"
                >
                    📤
                </button>
            </div>
        </div>
    );
};

// Add all necessary animations
const allKeyframes = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes slideInUp {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes glow {
    0%, 100% { box-shadow: 0 0 5px rgba(0,0,0,0.1); }
    50% { box-shadow: 0 0 20px rgba(0,0,0,0.3); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes bounceIn {
    0% {
        transform: scale(0.3);
        opacity: 0;
    }
    50% {
        transform: scale(1.05);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(0,0,0,.3);
    border-radius: 50%;
    border-top-color: #000;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
`;

// Inject all animations into head (only once)
if (typeof document !== 'undefined' && !document.getElementById('product-detail-styles')) {
    const style = document.createElement('style');
    style.id = 'product-detail-styles';
    style.textContent = allKeyframes;
    document.head.appendChild(style);
}

export default ProductDetail;