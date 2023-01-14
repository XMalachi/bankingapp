import React from 'react'

import { StatData } from '../StatData'
function Stats() {
  
  // console.log(summaryStats, "The summary stats")
  return (
    
      <div className='md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full '>
        {
          StatData && StatData.map((stat) => (
            <div key={stat.id} className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>{stat.title}</p>
                <p className='text-3xl'>{stat.amount}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>{stat.sub}</small>
            </div>
          ))
        }
      </div>

  )
}

export default Stats