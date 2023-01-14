import React from 'react'
import "./DetailsHeader.css"
import { BsFillHddStackFill, BsCreditCard2BackFill, BsCreditCard2Front , BsFillTelephoneFill, BsCalendar2DateFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
// import { FaAddressBook } from "react-icons/fa";
import { FcAddressBook } from "react-icons/fc";
import { TbGenderNeutrois } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";



function Detail() {
  return (
    <div className='details'>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Account No.: </h3>
            </div>
            <div className='detailData'>
                <BsFillHddStackFill />
                <p>836968943</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Account Type.: </h3>
            </div>
            <div className='detailData'>
                <BsCreditCard2BackFill />
                <p>836968943</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Account Login ID: </h3>
            </div>
            <div className='detailData'>
                <BsCreditCard2Front />
                <p>836968943</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Email: </h3>
            </div>
            <div className='detailData'>
                <MdEmail />
                <p>836968943</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Country: </h3>
            </div>
            <div className='detailData'>
                <TfiWorld />
                <p>836968943</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Mobile: </h3>
            </div>
            <div className='detailData'>
                <BsFillTelephoneFill />
                <p>836968943</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Address: </h3>
            </div>
            <div className='detailData'>
                <FcAddressBook />
                <p>836968943</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Occupation: </h3>
            </div>
            <div className='detailData'>
                <GrUserWorker />
                <p>836968943</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Date Of Birth: </h3>
            </div>
            <div className='detailData'>
                <BsCalendar2DateFill />
                <p>836968943</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Gender: </h3>
            </div>
            <div className='detailData'>
                <TbGenderNeutrois />
                <p>836968943</p>
            </div>
        </div>
    </div>
  )
}

export default Detail