import React from 'react'
import CTA from '../CTA/CTA'
import { countries } from '../../Data'

function Homescreen() {
  return (
    <div>
        <CTA images={countries} />
    </div>
  )
}

export default Homescreen