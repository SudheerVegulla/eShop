import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div>
        <div className='home'>
            <div className='home__container'>
                <img src='e-commerce.png' alt='' className='home__image'/>
                <div className='home__row'>
                    <Product
                    id="12321"
                    title='Bennett™ Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Charcoal Black)'
                    price={11.96}
                    rating={5}
                    image='laptop bag.webp'/>
                    <Product
                     id="12322"
                     title='IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)'
                     price={13}
                     rating={4}
                     image='microwaveOven.jpg'/>
                </div>
                <div className='home__row'>
                    <Product
                      id="12323"
                      title='All the Light we Cannot See: The Breathtaking World Wide Bestseller'
                     price={4}
                     rating={4}
                     image='storybook.jpg'/>
                    <Product
                    id="12324"
                    title='Echo Studio - Smart speaker with high-fidelity audio, Dolby Atmos and Alexa (Black)'
                    price={32}
                    rating={4}
                    image='smartspeaker.jpg'/>
                    <Product
                    id='12325'
                    title='2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 512GB) - Space Grey (5th Generation)'
                    price={600}
                    rating={4}
                    image='ipad.jpg'/>
                </div>
                <div className='home__row'>
                    <Product
                    id='12326'
                    title='Samsung 34 inch (86.4 cm) LED Curved Computer Monitor - Full HD, Super Slim,VA Panel,HDR 10 - LC34G55TWWWXXL (Black)'
                    price={800}
                    rating={4}
                    image='gamingmonitor.jpg'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home