import Link from 'next/link';
import Router from 'next/router';
import ProductCard from '../src/components/ProductCard';
import styled from 'styled-components';
import { useState } from 'react';
import AddProfile from '../src/components/AddProfile';

const StyledWraper = styled.div`
    .products {
        display: grid;

        grid-template-columns: repeat(8, 1fr);
        grid-columns-gap: 10px;
    }

    padding: 20px;

    h4 {
        margin-bottom: 4px;
    }
`


const defaultProducts = [
    {
        imageUrl: 'https://fontoplumo.nl/shop/6508-large_default/montblanc-george-gershwin-donation-pen-special-edition-ballpoint-pen.jpg',
        title: 'Pen1',
        description: 'This is Pen1',
        remain: 10,
        price: 20
    },
    {
        imageUrl: 'https://fontoplumo.nl/shop/6508-large_default/montblanc-george-gershwin-donation-pen-special-edition-ballpoint-pen.jpg',
        title: 'Pen2',
        description: 'This is Pen2',
        remain: 20,
        price: 40
    },
    {
        imageUrl: 'https://fontoplumo.nl/shop/6508-large_default/montblanc-george-gershwin-donation-pen-special-edition-ballpoint-pen.jpg',
        title: 'Pen3',
        description: 'This is Pen3',
        remain: 30,
        price: 60
    },
    {
        imageUrl: 'https://fontoplumo.nl/shop/6508-large_default/montblanc-george-gershwin-donation-pen-special-edition-ballpoint-pen.jpg',
        title: 'Pen1',
        description: 'This is Pen1',
        remain: 10,
        price: 20
    },
    {
        imageUrl: 'https://fontoplumo.nl/shop/6508-large_default/montblanc-george-gershwin-donation-pen-special-edition-ballpoint-pen.jpg',
        title: 'Pen2',
        description: 'This is Pen2',
        remain: 20,
        price: 40
    },
    {
        imageUrl: 'https://fontoplumo.nl/shop/6508-large_default/montblanc-george-gershwin-donation-pen-special-edition-ballpoint-pen.jpg',
        title: 'Pen3',
        description: 'This is Pen3',
        remain: 30,
        price: 60
    }
]

const Homepage = () => {

    const [products, setProducts] = useState(defaultProducts);
    const handleBuy = (index) => {
        if (products[index].remain > 0) {
            products[index].remain--;
            setProducts([...products]);
        }
    }

    const handleCreate = (data) => {
        products.push(data);
        setProducts([...products]);
    }

    return (
        <StyledWraper>
            <h2>Register</h2>

            <AddProfile handleCreate={handleCreate}/>
            <div className='products'>
                {
                    products.map((item, index) => {
                        return (
                            <ProductCard
                                key={index}
                                product={item}
                                handleBuy={() => { handleBuy(index) }}
                            />
                        )
                    })
                }
            </div>

        </StyledWraper>
    )
}

export default Homepage;