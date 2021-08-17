import React from 'react'

function About() {
    return (
        <>
               <section class="about">
                    <div class="row">
                        <div class="about-left">
                            <h2>Fintech is all about excellence in the world of business</h2>
                            <img src="images/about.jpg" alt=""/>
                        </div>
                        <div class="about-middle">
                            <h2>Our History</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum officiis quis omnis, cum culpa nisi!
                            </p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum officiis quis omm officiis quis
                                omnis, cum culpa nisi!</p>
                            <a href="" class="btn">Read More</a>
                        </div>
                        <div class="about-right">
                            <h2>Vision & Mission</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum officiis quis omnis, cum culpa nisi!
                            </p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum officiis quis omm officiis quis
                                omnis, cum culpa nisi!</p>
                            <a href="" class="btn">Read More</a>
                        </div>
                    </div>
              </section>

              <section class="about2">
                <div class="row">
                    <div class="about2-left">
                        <h2>What we can do for you</h2>
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquid?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quisquam, est, saepe molestias aut
                            deleniti dicta et enim consequatur explicabo at nulla reiciendis corporis culpa minus nam alias, id
                            repellat dolores quod!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, odit?</p>

                    </div>
                    <div class="about2-right">
                        <div class="row">
                            <div class="card">
                                <box-icon type="logo" name="apple" color="#4CAF50" size="60px"></box-icon>
                                <h2>IOS Development</h2>
                            </div>
                            <div class="card">
                                <box-icon type="logo" name="android" color="#4CAF50" size="60px"></box-icon>
                                <h2>Android Development</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="card">
                                <box-icon name="data" color="#4CAF50" size="60px"></box-icon>
                                <h2>Database Management</h2>
                            </div>
                            <div class="card">
                                <box-icon name="line-chart-down" color="#4CAF50" size="60px"></box-icon>
                                <h2>Data Visualizations</h2>
                            </div>
                        </div>
                 </div>
             </div>
          </section>
        </>
    )
}

export default About
