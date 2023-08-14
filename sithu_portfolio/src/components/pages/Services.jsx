import React from "react"
import { Heading } from "../common/Heading"
import { services } from "../data/dummydata"

export const Services = () => {
  return (
    <>
      <section className='services'>
        <div className='container'>
          <Heading title='Services' />
          <div className='content grid3'>
            {services.map((item) => (
              <div className='box' data-aos='flip-left'>
                <img src={item.language} alt='' className='sImage'/>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
