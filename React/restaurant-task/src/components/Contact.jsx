// ContactUs.jsx
import React, { useState } from 'react';

import '../styles/Style.css'

const ContactUs = () => {
    
    return (
        <div className="contact-page">
            <header className="contact-hero bg-dark text-white py-5">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
                </div>
            </header>

            <section className="contact-info py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="contact-card h-100 p-4 border rounded shadow-sm">
                                <h3><i className="bi bi-geo-alt me-2"></i>Location</h3>
                                <p>123 Main Street<br />Amman, Jordan</p>
                                <iframe
                                title="Restaurant Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.6578123231184!2d35.90723197583222!3d31.97017872478082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1dd7bca79dd%3A0x9b0416f056ff0786!2sOrange%20Digital%20Village!5e0!3m2!1sen!2sjo!4v1745074275427!5m2!1sen!2sjo"
                                width="100%" 
                                height="200"
                                className="border-0 mt-3 rounded"
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="contact-card h-100 p-4 border rounded shadow-sm">
                                <h3><i className="bi bi-clock me-2"></i>Hours</h3>
                                <div className="hours-list">
                                    <div className="d-flex justify-content-between">
                                        <span>Monday - Thursday:</span>
                                        <span>11:00 AM - 10:00 PM</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Friday - Saturday:</span>
                                        <span>11:00 AM - 11:00 PM</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Sunday:</span>
                                        <span>12:00 PM - 9:00 PM</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4>Special Hours</h4>
                                    <p>Brunch: Saturday & Sunday 11:00 AM - 2:00 PM</p>
                                    <p>Happy Hour: Monday - Friday 4:00 PM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="contact-card h-100 p-4 border rounded shadow-sm">
                                <h3><i className="bi bi-telephone me-2"></i>Get in Touch</h3>
                                <ul className="list-unstyled contact-list">
                                    <li className="mb-3">
                                        <i className="bi bi-telephone-fill me-2"></i>
                                        <span>(+962) 777777777</span>
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-envelope-fill me-2"></i>
                                        <span>info@thefoodfactory.com</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chat-dots-fill me-2"></i>
                                        <span>For catering inquiries: catering@thefoodfactory.com</span>
                                    </li>
                                </ul>
                                <div className="social-media mt-4">
                                    <h4>Follow Us</h4>
                                    <div className="d-flex gap-3 mt-2">
                                        <a href="#" className="social-icon"><i className="bi bi-facebook fs-4"></i></a>
                                        <a href="#" className="social-icon"><i className="bi bi-instagram fs-4"></i></a>
                                        <a href="#" className="social-icon"><i className="bi bi-twitter-x fs-4"></i></a>
                                        <a href="#" className="social-icon"><i className="bi bi-yelp fs-4"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq py-5">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-lg-8">
                            <h2 className="section-title">Frequently Asked Questions</h2>
                            <div className="divider my-4 mx-auto"></div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Do you take reservations?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Yes, we recommend making reservations, especially for dinner and weekends. You can make a reservation through our website, by phone, or through popular reservation apps.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Do you offer vegetarian and vegan options?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Absolutely! We have several vegetarian options like our Vegetable Stir Fry and Mushroom Risotto. We can also modify many dishes to accommodate vegan preferences. Just let your server know about your dietary requirements.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Do you cater private events?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Yes, we offer catering services for both on-site and off-site events. We can customize a menu to suit your preferences and budget. Please contact our catering department at catering@thefoodfactory.com for more information.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Is parking available?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            We have a dedicated parking lot behind our restaurant. Additionally, there is street parking available and a public parking garage one block away.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Do you offer takeout or delivery?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Yes, our full menu is available for takeout. You can order online through our website or by phone. We also partner with several delivery services for your convenience.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;