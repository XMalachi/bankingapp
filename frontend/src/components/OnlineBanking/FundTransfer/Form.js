import React from "react"


function TransferForm({form, confirm, checkConfirm, confirmTransfer}) {
    

    return (
        <>
            {form && 
                (
                    <form className="space-y-8 divide-y divide-gray-200 p-10">
                        <div className="space-y-8 divide-y divide-gray-200">

                        <div className="pt-8">
                            <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Beneficiary's Account Detials</h3>
                            
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                {/* <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First name
                                </label> */}
                                <div className="mt-1">
                                <input
                                    type="Number"
                                    name="account-number"
                                    id="account-number"
                                    autoComplete="given-number"
                                    placeholder="Beneficiary Account Number"
                                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                                />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                {/* <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Last name
                                </label> */}
                                <div className="mt-1">
                                <input
                                    type="text"
                                    name="bank-name"
                                    id="bank-name"
                                    autoComplete="given-name"
                                    placeholder="Beneficiary BankName"
                                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                                />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                                </label> */}
                                <div className="mt-1">
                                <input
                                    type="Number"
                                    name="amount"
                                    id="amount"
                                    autoComplete="given-amount"
                                    placeholder="Amount"
                                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                                />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                {/* <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country
                                </label> */}
                                <div className="mt-1">
                                <input
                                    id="swift"
                                    name="swift"
                                    autoComplete="swift"
                                    placeholder="Swift"
                                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                                />
                                </div>
                            </div>

                            
                        </div>
                    </div>
  
          
                        </div>
                
                                <div className="pt-5">
                                <div className="flex justify-end">
                                    
                                    <button
                                    onClick={checkConfirm}
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-3 px-10 border border-transparent shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                                    >
                                    Confirm
                                    </button>
                                </div>
                                </div>
                    </form>
                )
            }

            {
                confirm && (
                    <div className="confirm flex itams-center justify-center flex-col md:p-6 md:px-10">
                        <h2 className="confirm-title text-2xl md:text-4xl text-center leading-10 text-indigo-600">Fund Transfer Initiated!</h2>
                        <p className="leading-8 md:leading-10 text-lg">
                        Dear Esteemed Customer, you have initiated an Inter-Bank Transfer Transaction. If you wish to continue with this action, kindly click on the "Start Transaction".
                        For further enquiries on this process, please contact the Customer Support Agent (support@eastdale.com) for help.
                        </p>
                            <div className="pt-5">
                                <div className="flex justify-end">
                                    
                                    <button
                                    onClick={confirmTransfer}
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-3 px-10 border border-transparent shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                                    >
                                    Send
                                    </button>
                                </div>
                            </div>
                    </div>
                )
            }
        </>
      
    )
  }
  

  export default TransferForm