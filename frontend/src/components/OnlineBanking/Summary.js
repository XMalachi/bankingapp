import React, { useEffect, useState } from 'react'
import TransactionsTable from '../OnlineBanking/Tables/TransactionsTable'
import { StatData } from './StatData'
function Summary() {
  const [summaryStats, setSummaryStats] = useState([])

  const truncateData = () => {
    setSummaryStats(StatData.slice(0,4))
  }
  useEffect(()=> {
    truncateData()
  }, [])
  // console.log(summaryStats, "The summary stats")
  return (
    <div>
      <h2 className='text-3xl'>Dashboard</h2>

      <div className='md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full '>
        {
          summaryStats && summaryStats.map((stat) => (
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

      <TransactionsTable />
    </div>
  )
}

export default Summary