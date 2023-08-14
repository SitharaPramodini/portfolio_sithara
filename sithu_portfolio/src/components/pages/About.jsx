import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"
import Resume from './resume.pdf';

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <br></br>
                <Heading title='About Me' /><br></br>
                <p1>{val.desc}</p1><br></br><br></br>
                <p1>{val.desc1}</p1><br></br><br></br>
                
                {/* <a href={Resume} download>
                  <button className="primaryBtn">Download CV</button>
                </a> */}

                
                {/* <button>Download CV</button>
                <button className='primaryBtn'>Download CV</button> */}
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
