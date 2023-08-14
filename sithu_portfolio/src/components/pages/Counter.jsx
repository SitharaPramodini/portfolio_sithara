import React from "react"
import { project } from "../data/dummydata"
import CountUp from "react-countup"
import { social } from "../data/dummydata"
import { Link } from "react-router-dom"

//yarn or npm add react-countup

export const Counter = () => {
  return (
    <>
      <div className='hero counter'>
        <div className='container grid3 grid4'>
        {social.map((item) => (
          <>
          <a href={item.url} >
              <i data-aos='zoom-in'  size="large" className="icon">{item.icon}</i>
          </a>
          </>
        ))}
        </div>
      </div>
    </>
  )
}
