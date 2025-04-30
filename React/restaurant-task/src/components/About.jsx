import React from 'react';

import '../styles/Style.css'

const About = () => {
  return (
    <div className="about-page">
      <header className="hero-section bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">The Food Factory</h1>
              <p className="lead">Where culinary innovation meets exceptional taste</p>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://dko.com.au/wp-content/uploads/2023/06/card-6@2x.jpg" 
                alt="Restaurant interior" 
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="our-story py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://media.istockphoto.com/id/1044191726/photo/chef-cooking-with-tiger-prawn-on-dark-background.jpg?s=612x612&w=0&k=20&c=JVR4rM_awSF195EuywYZnbL1qlconJmf5ZmnkIKTA9k=" 
                alt="Chef cooking" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Our Story</h2>
              <div className="divider my-4"></div>
              <p>
                Founded in 2015, The Food Factory began with a simple mission: to create a dining experience that celebrates diversity in cuisine while maintaining exceptional quality and taste.
              </p>
              <p>
                What started as a small burger joint has now expanded into a full-service restaurant offering everything from gourmet burgers and authentic pizzas to fresh seafood and delectable desserts.
              </p>
              <p>
                Our chefs bring years of culinary expertise from around the world, ensuring that each dish represents the perfect blend of traditional techniques and modern innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy bg-light py-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="section-title">Our Philosophy</h2>
              <div className="divider my-4 mx-auto"></div>
              <p className="lead">
                At The Food Factory, we believe that great food starts with quality ingredients, passionate chefs, and a welcoming atmosphere.
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="icon-box mb-3">
                    <i className="bi bi-award fs-1 text-primary"></i>
                  </div>
                  <h4>Quality Ingredients</h4>
                  <p>We source only the finest local and seasonal ingredients to ensure every dish exceeds expectations.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="icon-box mb-3">
                    <i className="bi bi-people fs-1 text-primary"></i>
                  </div>
                  <h4>Expert Chefs</h4>
                  <p>Our culinary team brings diverse expertise and a passion for creating memorable dining experiences.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="icon-box mb-3">
                    <i className="bi bi-heart fs-1 text-primary"></i>
                  </div>
                  <h4>Community Focus</h4>
                  <p>We're committed to supporting local farmers and giving back to the community that supports us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="specialties py-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="section-title">Our Specialties</h2>
              <div className="divider my-4 mx-auto"></div>
              <p className="lead">
                From gourmet burgers to authentic international cuisine, we offer a diverse menu to satisfy every palate.
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="specialty-card">
                <div className="specialty-img">
                  <img src="https://www.redefinemeat.com/uk/wp-content/uploads/sites/4/2024/08/Retail_Recipe_Photoshoot_Premium-Burgers_Plain-1-scaled-1.jpg" alt="Burgers" className="img-fluid food-img" />
                </div>
                <div className="specialty-info p-3">
                  <h4>Gourmet Burgers</h4>
                  <p>From our Classic Cheeseburger to specialty options like the Black Brisket Burger.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="specialty-card">
                <div className="specialty-img">
                  <img src="https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg" alt="Pizza" className="img-fluid food-img" />
                </div>
                <div className="specialty-info p-3">
                  <h4>Artisan Pizzas</h4>
                  <p>Hand-tossed pizzas with fresh toppings, from classic Margherita to Pepperoni.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="specialty-card">
                <div className="specialty-img">
                  <img src="https://images.services.kitchenstories.io/AClZarUb5d05wXfSDBVTB8Zn2NY=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R3022-final-photo-3.jpg" alt="Seafood" className="img-fluid food-img" />
                </div>
                <div className="specialty-info p-3">
                  <h4>Fresh Seafood</h4>
                  <p>Try our Grilled Salmon or Shrimp Scampi for a taste of the ocean.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="specialty-card">
                <div className="specialty-img">
                  <img src="https://www.thespruceeats.com/thmb/HM3X8w38eMVo0Lejx4GLvGHZ4dM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg" alt="Desserts" className="img-fluid food-img" />
                </div>
                <div className="specialty-info p-3">
                  <h4>Decadent Desserts</h4>
                  <p>Finish your meal with our Chocolate Lava Cake or New York Cheesecake.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2>Come Experience The Food Factory Difference</h2>
              <p className="lead mb-4">Join us for lunch or dinner and discover why we're a local favorite.</p>
              <a href="/contact" className="btn btn-success btn-lg">Make a Reservation</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;