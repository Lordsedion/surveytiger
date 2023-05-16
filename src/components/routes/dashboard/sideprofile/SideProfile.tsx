import React from 'react'
import pic from '../../../../images/pic.jpg'
import {CiMoneyBill} from 'react-icons/ci'
import {MdUpdate} from 'react-icons/md'
import {AiOutlineFileDone} from 'react-icons/ai'
import './sideprofile.css'

interface recentInput {
  actionType:string,
  actionValue:string
}


const RecentAction = (input:recentInput)=> {
  return (
    <div className="r-12-ccmp items-center">
      {
        input.actionType === 'credit' && (
          <>
           <div className="r-ac-11-lft ">
            <p className='text-green-500'><CiMoneyBill/></p>
        </div>
        <div className="r-ac-11-rgt">
            <div className="p-ex-fname">
              <p>You deposited ${input.actionValue}</p>
            </div>
        </div>
          </>
        )
      }
      {
        input.actionType === 'debit' && (
          <>
           <div className="r-ac-11-lft ">
            <p className='text-red-700'><CiMoneyBill/></p>
        </div>
        <div className="r-ac-11-rgt">
            <div className="p-ex-fname">
              <p>You withdrew ${input.actionValue}</p>
            </div>
        </div>
          </>
        )
      }
      {
        input.actionType === 'complete' && (
          <>
           <div className="r-ac-11-lft ">
              <p className='color-primary'><AiOutlineFileDone/></p>
          </div>
        <div className="r-ac-11-rgt">
            <div className="p-ex-fname">
              <p>You completed {input.actionValue} survey</p>
            </div>
        </div>
          </>
        )
      }
      {
        input.actionType === 'create' && (
          <>
           <div className="r-ac-11-lft ">
            <p className='color-primary'><AiOutlineFileDone/></p>
        </div>
        <div className="r-ac-11-rgt">
            <div className="p-ex-fname">
              <p>You created {input.actionValue} survey</p>
            </div>
        </div>
          </>
        )
      }
      {
        input.actionType ==='publish' && (
          <>
           <div className="r-ac-11-lft ">
           <p className='color-primary'><AiOutlineFileDone/></p>
        </div>
        <div className="r-ac-11-rgt">
            <div className="p-ex-fname">
              <p>You published {input.actionValue} survey</p>
            </div>
        </div>
          </>
        )
      }
      {
        input.actionType ==='update' && (
          <>
           <div className="r-ac-11-lft">
           <p className='color-primary'><MdUpdate/></p>
        </div>
        <div className="r-ac-11-rgt">
            <div className="p-ex-fname">
              <p>You updated your {input.actionValue}</p>
            </div>
        </div>
          </>
        )
      }
      </div>
  )
}

const SideProfile = () => {
  return (
   <div className="sideprofile-ctn">
        <div className="top-img-ctn">
          <div className="top-img-ctn-pic-c">
             <img src={pic} alt="Javascript" />
          </div>
          <p className="prof-fname"><b>Joshua Okechukwu</b> </p>
          <p className="prof-uname text-gray-400">@Lordseidon</p>
        </div>
       <div className="rpof-rec-acts-b">
        <h4><b>Recent actions</b></h4>
          <div className="rec-act-sub-comp">
            <div className="r-a-c-s-c-cmp">
              <RecentAction actionType='credit' actionValue='100'/>
              <RecentAction actionType='debit' actionValue='10'/>
              <RecentAction actionType='credit' actionValue='100'/>
              <RecentAction actionType='credit' actionValue='100'/>
              <RecentAction actionType='credit' actionValue='100'/>
              <RecentAction actionType='update' actionValue='username'/>
              <RecentAction actionType='complete' actionValue='Phil'/>
              <RecentAction actionType='create' actionValue='Genius'/>
            </div>
          </div>
          <button>View more</button>
       </div>
   </div>
  )
}

export default SideProfile