import React from 'react'
import Info from '../../components/Info'
import Stats from '../../components/Stats'
import { FaDownload } from 'react-icons/fa'
import CV from '../../assets/steve-Cv.pdf'
import {resume} from '../../data'
import './about.css'
import Skills from '../../components/Skills'
import Resume from '../../components/Resume'

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">About <span>Me</span></h2>
        <div className="about__container gird">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list gird">
              <Info />
            </ul>
            <a href={CV} download='' className='button'>Download CV <span className="button__icon"><FaDownload /></span></a>
          </div>
          <div className="stats gird">
            <Stats />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container gird">
          <Skills />
        </div>
      </section>
      <div className="separator"></div>
      <section className="resume">
        <h3 className="section__subtitle subtitle__center">Experience & Education</h3>

        <div className="resume__container gird">
          <div className="resume__data">
            {resume.map((val)=>{
              if(val.category === 'experience')
              return <Resume key={val.id}{...val}/>
            })}

          </div>
          <div className="resume__data">
            {resume.map((val)=>{
              if(val.category === 'education')
              return <Resume key={val.id}{...val}/>
            })}

          </div>
        </div>
      </section>


    </main>
  )
}

export default About
