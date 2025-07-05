import React from 'react';
import { Link } from 'react-router-dom';
import chillHoodie from '../assets/images/chill-hoodie.webp';
import chillGuyHoodieBlack from '../assets/images/chill-guy-hoodie-black.webp';
import chillGuyHoodieGrey from '../assets/images/chill-guy-hoodie-grey.webp';
import chillPillTee from '../assets/images/chill-pill-tee.webp';
import chillGuyTee from '../assets/images/chill-guy-tee.webp';

const Products = () => {
    const products = [
        {
            id: 'chill-hoodie',
            name: 'Chill Hoodie',
            price: '£39.99',
            image: chillHoodie,
            description: 'Ultimate comfort meets style'
        },
        {
            id: 'chill-guy-hoodie-black',
            name: 'Chill Guy Hoodie Black',
            price: '£45.00',
            image: chillGuyHoodieBlack,
            description: 'The only hoodie you need this year'
        },
        {
            id: 'chill-guy-hoodie-grey',
            name: 'Chill Guy Hoodie Grey',
            price: '£45.00',
            image: chillGuyHoodieGrey,
            description: 'The only hoodie you need this year'
        },
        {
            id: 'chill-pill-tee',
            name: 'The Chill Pill Tee',
            price: '£25.00',
            image: chillPillTee,
            description: 'Feeling stressed? This tee will chill you out'
        },
        {
            id: 'chill-guy-tee',
            name: 'The Chill Guy Tee',
            price: '£28.00',
            image: chillGuyTee,
            description: 'More chill than ice, more chill than anything'
        }
    ];

    return (
        <div className="section">
            <h1 className="section-title">All Products</h1>
            <div className="products-grid">
                {products.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h3 className="product-title">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">{product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Products;