import React from 'react'
import { Link } from 'react-router-dom'
import "./DetailsHeader.css"

function Header() {
  return (
    <div className='detailsHeader'>
        <div className='customer flex items-center justify-center text-right'>
            <img 
                src='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29ycG9yYXRlc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'
                alt='The name'
                height={50}
                width={70}
                className="mr-6"
            />

            <div>
                <h2 className='text-2xl md:text-4xl '>FullName</h2>
                <small>Customer</small>
            </div>
        </div>

        <div className='statlinks'>
            <Link to='/customer/details'>Account Details</Link>
            <Link to='/customer/stats'>Account Stats</Link>
        </div>
    
    </div>
  )
}

export default Header