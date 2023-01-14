import React from "react"


function ConsultationForm() {
    return (
      <form className="space-y-8 divide-y divide-gray-200 p-10">
        <div className="space-y-8 divide-y divide-gray-200">
  
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-900">Use a permanent address where you can receive mail.</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                {/* <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First name
                </label> */}
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="First Name"
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
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Last Name"
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
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Email address"
                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                  />
                </div>
              </div>
  
              <div className="sm:col-span-6">
                {/* <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label> */}
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    placeholder="Country"
                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                  >
                    <option>Private Banking</option>
                    <option>Free Consultations</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>
  
              <div className="sm:col-span-6">
                {/* <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                  Street address
                </label> */}
                <div className="mt-1">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    placeholder="Phone"
                    autoComplete="street-address"
                    className="p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                  />
                </div>
              </div>
  
              <div className="sm:col-span-6">
                {/* <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label> */}
                <div className="mt-1">
                  <textarea
                    type="text"
                    rows={4}
                    
                    name="city"
                    id="city"
                    
                    placeholder="Special Request"
                    autoComplete="address-level2"
                    className="p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                  />
                </div>
              </div>
  
              {/* <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    placeholder="State / Province"
                    autoComplete="address-level1"
                    className="p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                  />
                </div>
              </div> */}
  
              {/* <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                  ZIP / Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    placeholder="ZIP / Postal code"
                    className="p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                  />
                </div>
              </div> */}
            </div>
          </div>
  
          
        </div>
  
        <div className="pt-5">
          <div className="flex justify-end">
            
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
            >
              Submit Now
            </button>
          </div>
        </div>
      </form>
    )
  }
  

  export default ConsultationForm