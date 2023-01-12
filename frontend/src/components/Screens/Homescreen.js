import React from 'react'
import CTA from '../CTA/CTA'
import { countries } from '../../Data'
import About from '../About/About'
import Services from '../Services/Services'

function Homescreen() {
  return (
    <div>
        <CTA images={countries} />
        <div className='px-10 py-6 lg:px-20 '>
          <About />
          <Services />
        </div>
    </div>
  )
}

export default Homescreen