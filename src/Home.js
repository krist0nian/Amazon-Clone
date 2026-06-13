import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="" />

        <div className="home__row">
            <Product 
            title='The lean Startup: HOw Constant Innovation Creates Radically Successful Businesses. Paperback Edition' 
            price={29.99} 
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._SL1500_.jpg"
            rating={3} />
            <Product 
            title ="Kenwood Mix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
            price={239.99}
            rating={4}
            image="https://www.buysbest.co.uk/wp-content/uploads/2022/12/image380056860.jpg" />
        </div>

        <div className="home__row">
            <Product 
            title="Samsung Galaxy Fit Watch - SMR370NZKAXAR" 
            price={199.99} 
            image="https://image-us.samsung.com/SamsungUS/home/mobile/wearables/galaxy-fit/pdp/sm-r370nzsaxar/009-Gallery-Galaxy-Fit-Black.jpg?$product-details-jpg$"
            rating={3}/>
            <Product 
            title="Amazon Echo (3rd Generation) Smart Speaker with Alexa, Charcoal Fabric" 
            price={98.99} 
            image="https://i.pinimg.com/736x/53/fd/07/53fd074455f3835b1e9594174855cc37.jpg"
            rating={5} />
            <Product 
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
            price={599.99} 
            image="https://www.bhphotovideo.com/images/images2500x2500/apple_128gb_ipad_pro_wi_fi_1185490.jpg"
            rating={4} />
        </div>

        <div className="home__row">
            <Product
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
            price={1094.99} 
            image="https://m.media-amazon.com/images/I/6193kGlq9MS._AC_SL1500_.jpg"
            rating={3}/>
        </div>
    </div>
</div>
  );
}

export default Home
