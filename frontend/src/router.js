import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
// import AccountDetails from './components/OnlineBanking/AccountDetails/AccountDetails'
// import AccountStats from './components/OnlineBanking/AccountDetails/AccountStats'
import BankingLayout from "./components/OnlineBanking/Layout/Layout"
import Homescreen from './components/Screens/Homescreen'
import AccountDetailsScreen from './components/Screens/OnlineBankingScreens/AccountDetailsScreen'
import AccountStatsScreen from './components/Screens/OnlineBankingScreens/AccountStatsScreen'
import EnrollScreen from './components/Screens/OnlineBankingScreens/EnrollScreen'
import FundTransferScreen from './components/Screens/OnlineBankingScreens/FundTransferScreen'
import SummaryScreen from './components/Screens/OnlineBankingScreens/SummaryScreen'
import ViewTransfersScreen from './components/Screens/OnlineBankingScreens/ViewTransfersScreen'



function Router() {
  
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout><Homescreen /></Layout>} />
            <Route path='/customer' element={<BankingLayout><SummaryScreen /></BankingLayout>} />
            
            
        </Routes>

        {/* acccountt details  routes */}
        <Routes>
            <Route path='/customer/details' element={<BankingLayout><AccountDetailsScreen /></BankingLayout>} />
            <Route path='/customer/stats' element={<BankingLayout><AccountStatsScreen /></BankingLayout>} />
            
            <Route path='/customer/transfer' element={<BankingLayout><FundTransferScreen /></BankingLayout>} />
            <Route path='/customer/viewtransfer' element={<BankingLayout><ViewTransfersScreen /></BankingLayout>} />
            
            <Route path='/customer/card-enroll' element={<BankingLayout><EnrollScreen /></BankingLayout>} />
            
            
        </Routes>

    </div>
  )
}

export default Router