import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills'>
        <p>SKILLS</p>
        <h1>Skills I have</h1>
        <div className='skills_info'>
            <div className='skills_card'>
                <h1>01</h1>
                <span className='skills_card_react'><i class="fa-brands fa-react skills_card_icon_react"></i> REACT JS</span>
            </div>
            <div className='skills_card'>
                <h1>02</h1>
                <span className='skills_card_react'><i class="fa-brands fa-node skills_card_icon_node"></i> NODE JS</span>
            </div>
            <div className='skills_card'>
                <h1>03</h1>
                <span className='skills_card_react'><i class="fa-solid fa-e skills_card_icon_express">JS</i> EXPRESS JS</span>
            </div>
            <div className='skills_card'>
                <h1>04</h1>
                <span className='skills_card_react'><i class="fa-solid fa-database skills_card_icon_mongodb"></i> MONGODB</span>
            </div>
            <div className='skills_card'>
                <h1>05</h1>
                <span className='skills_card_react'><i class="fa-brands fa-html5 skills_card_icon_css"></i> CSS</span>
            </div>
            <div className='skills_card'>
                <h1>06</h1>
                <span className='skills_card_react'><i class="fa-brands fa-html5 skills_card_icon_html"></i> HTML</span>
            </div>
        </div>
    </div>
  )
}

export default Skills