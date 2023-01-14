import React, {useState} from 'react'
import "./BankingSidebar.css"

import {BsFillCaretDownFill, BsFillRecordCircleFill} from "react-icons/bs"

function BankingSidebar() {
    const [transferOptions, showTransferOptions] = useState(false)
    const [cardOptions, showCardOptions] = useState(false)
    const [loanOptions, showLoanOptions] = useState(false)

    const setShowTransferOptions = () => {
        showTransferOptions(prev => !prev)
    }
    const setShowCardOptions = () => {
        showCardOptions(prev => !prev)
    }
    const setShowLoanOptions = () => {
        showLoanOptions(prev => !prev)
    }
  return (
    <div className='text-white bg-blue-900'>
        <div className="area"></div><nav className="main-menu">
            <ul>
                <li className='mb-5 mt-0 h-20 flex flex-col items-center justify-start'>
                    <a href="/customer" className='h-full mt-0'>
                        <i className="fa fa-user fa-2x"></i>
                        <span className="nav-text text-blue-200">
                           <p>Customer Name</p>
                           <small>Customer</small>
                        </span>
                    </a>
                  
                </li>

                <div className='my-4'>
                    <h4 className='font-semibold uppercase truncate  ml-5 mb-5'>Account</h4>
                    <li className="has-subnav">
                        <a href="/customer">
                            <i className="fa fa-th fa-2x"></i>
                            
                            <span className="nav-text">
                                Account Summary
                            </span>
                        </a>
                        
                    </li>
                    <li className="has-subnav focus:bg-slate-100">
                        <a href="/customer/details">
                        <i className="fa fa-credit-card fa-2x"></i>
                            <span className="nav-text">
                                Account Details
                            </span>
                        </a>
                        
                    </li>
                </div>
                
                
                <div className='my-4'>
                    <h4 className='font-semibold uppercase truncate  ml-5 mb-5'>Transactions</h4>
                    <li className="has-subnav">
                        <a href="/customer">
                        <i className="fa fa-clipboard fa-2x"></i>
                            <span className="nav-text">
                                Inquire Transactions
                            </span>
                        </a>
                    
                    </li>
                    <li onClick={setShowTransferOptions}>
                        <div>
                            <i className="fa fa-exchange fa-2x"></i>
                            <span className="nav-text">
                                Fund Transfer <BsFillCaretDownFill className='inline' />
                                {transferOptions && 
                                    <ul className='absolute z-50 bg-slate-50 rounded-xl text-blue-900'>
                                        <a href='/customer/transfer' className='option'><BsFillRecordCircleFill />&nbsp;&nbsp;<p>Fund Transfer</p></a>
                                        <a href='/customer/viewtransfer' className='option'><BsFillRecordCircleFill />&nbsp;&nbsp;<p>View Transfers</p></a>
                                    </ul>
                                
                                }
                                
                            </span>
                        </div>
                    </li>

                </div>
                
                <div className='my-4'>
                    <h4 className='font-semibold uppercase truncate  ml-5 mb-5'>Services</h4>
                    <li onClick={setShowCardOptions}>
                        <div>
                            <i className="fa fa-book fa-2x"></i>
                            <span className="nav-text">
                                Enroll For Card <BsFillCaretDownFill className='inline' />
                                {cardOptions && 
                                    <ul className='absolute z-50 bg-slate-50 rounded-xl text-blue-900'>
                                        <a href='/customer/card-enroll' className='option'><BsFillRecordCircleFill />&nbsp;&nbsp;<p>Enroll For Card</p></a>
                                        <a href='viewCard' className='option'><BsFillRecordCircleFill />&nbsp;&nbsp;<p>View Card</p></a>
                                    </ul>
                                
                                }
                            </span>
                        </div>
                    </li>
                    <li onClick={setShowLoanOptions}>
                    <div>
                        <i className="fa fa-shield fa-2x"></i>
                            <span className="nav-text">
                                Apply For Loan<BsFillCaretDownFill className='inline' />
                                {loanOptions && 
                                    <ul className='absolute z-50 bg-slate-50 rounded-xl text-blue-900'>
                                        <a href='/cardenrol' className='option'><BsFillRecordCircleFill />&nbsp;&nbsp;<p>Apply For Loan</p></a>
                                        <a href='viewCard' className='option'><BsFillRecordCircleFill />&nbsp;&nbsp;<p>Show Loans</p></a>
                                    </ul>
                                
                                }
                            </span>
                        </div>
                    </li>
                </div>
                
                
            </ul>

            <ul className="logout">
                <li>
                   <a href="/">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
    </div>
  )
}

export default BankingSidebar