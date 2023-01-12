/* This example requires Tailwind CSS v2.0+ */
import { UsersIcon } from '@heroicons/react/outline'
import { FcBarChart } from "react-icons/fc";

import './About.css'
function About() {
  return (
    <div className="relative bg-white">
      
      <div className="hidden lg:block h-56 bg-blue-600 sm:h-72 lg:absolute lg:right-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Support team"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:ml-0 lg:w-2/5">
          <div>
            <div className="eastDale">
                <h2 className="card_title ">EastDale Finance</h2>
                <div className="line"/>
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <UsersIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Deliver what our customers want every time.  We Know How Important Keeping Your Money Safe Is To You. That&apos;s why we exist. EastDale Finance
          </h2>
          <p className="mt-6 text-lg text-gray-500">
          EastDale Finance has grown from a credit union called Brent Shrine Credit Union which was first 
          formed in 1979 to serve people living in the US or working in or outside the London Borough of Brent. We changed our 
          name to EastDale Finance and extended our common bond nationally to encompass the British South Asian 
          diaspora. Since then our common bond has extended a number of times to include members and supporters of a very wide 
          range of organisations and associations across the UK. Recently we have
           extended membership to supporters of the financial education charity: Financial Education and Awareness.
          </p>
          <div className="mt-8 overflow-hidden flex flex-wrap items-center justify-center flex-col">
            <dl className="-mx-8 -mt-8 flex flex-wrap items-center justify-center">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Advisors</dt>
                <dd className="order-1 text-3xl sm:text-4xl font-extrabold text-blue-900 sm:text-3xl">230+</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Loan Processed</dt>
                <dd className="order-1 text-3xl sm:text-4xl font-extrabold text-blue-900 sm:text-3xl">840+</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Locations</dt>
                <dd className="order-1 text-3xl sm:text-4xl font-extrabold text-blue-900 sm:text-3xl">100+</dd>
              </div>
            </dl>

            <div className='mt-10'>
                <a href='/contact' className='font-bold text-blue-700 flex items-center justify-center'>
                    <FcBarChart className='text-blue-700'/> &nbsp; Get Your Free Financial Analysis 
                </a>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:block lg:hidden h-56 bg-blue-600 sm:h-72 lg:right-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Support team"
        />
      </div>

    </div>
  )
}


export default About