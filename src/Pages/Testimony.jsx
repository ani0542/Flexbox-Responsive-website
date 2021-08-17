import React from 'react'
import desk from "../assets/desk1.jpeg"
function Testimony() {
    return (
        <>
                 <section class="testimony">
        <div class="row">
            <div class="test">
                <div class="image">
                    <img src={desk} alt=""/>
                </div>
                <div class="test-content">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint error aperiam maiores nisi cupiditate, ullam quo qui necessitatibus odio!</p>
                    <h2>Jane Doe</h2>
                    <div class="icons">
                        <box-icon name='star' type='solid' color='whitesmoke'></box-icon>
                        <box-icon name='star' type='solid' color='whitesmoke'></box-icon>
                        <box-icon name='star' type='solid' color='whitesmoke'></box-icon>
                        <box-icon name='star' type='solid' color='whitesmoke'></box-icon>
                        <box-icon name='star-half' type='solid' color='whitesmoke'></box-icon>
                    </div>
                </div>
            </div>

            <div class="test">
                <div class="image">
                      <img src={desk} alt=""/>
                </div>
                <div class="test-content">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint error aperiam maiores nisi cupiditate, ullam quo qui necessitatibus odio!</p>
                    <h2>Lora Smith</h2>
                    <div class="icons">
                        <box-icon name='star' type='solid' color='whitesmoke'></box-icon>
                        <box-icon name='star' type='solid' color='whitesmoke'></box-icon>
                        <box-icon name='star' type='solid' color='whitesmoke'></box-icon>
                        <box-icon name='star' type='solid' color='whitesmoke'></box-icon>
                        <box-icon name='star-half' type='solid' color='whitesmoke'></box-icon>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Testimony
