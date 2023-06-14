import React from 'react'
import {DiStreamline} from 'react-icons/di'
import {FaArrowRight} from 'react-icons/fa'
import {FaGreaterThan} from 'react-icons/fa'
import './home.css'
import Interest from '../interest/Interest'

interface smallDivInput {
  count:number,
  info:string,
}

interface geneva {
  title:string,
  time: number,
  total:number,
  price:number
}

const SmallDivD= (Input:smallDivInput) => {
    return (
      <div className="dsh-home-child">
          <div className="n-1-th">
            <h3>${Input.count}</h3>
            <p className='text-3xl color-primary'><DiStreamline/></p>
          </div>
          <p className="fade--0 text-gray-400 px-3 py-2">{Input.info}</p>
          <button className='none'>View more <p className='text-xl'><FaArrowRight/></p></button>
      </div>
    )
}
const SmallDiv = (Input:smallDivInput) => {
    return (
      <div className="dsh-home-child">
          <div className="n-1-th">
            <h3>{Input.count}</h3>
            <p className='text-3xl color-primary'><DiStreamline/></p>
          </div>
          <p className="fade--0 text-gray-400 px-3 py-2">{Input.info}</p>
          <button className='none'>View more <p className='text-xl'><FaArrowRight/></p></button>
      </div>
    )
}

const SmallDivContainer = () => {
    return (
      <div className="dsh-home-boss">
          <SmallDivD count={78} info='Balance'/>
          <SmallDiv count={5} info='New surveys'/>
          <SmallDiv count={12} info='Notifications'/>
          <SmallDiv count={5} info='Created surveys'/>
      </div>
    )
}

const SubDashItem = (value:geneva)=> {
  return (
    <div className="subdash-item">
        <div className="subdash-item-hd-h3">
          <h4 className='my-1 font-medium'> {value.title} </h4>
        </div>
        <div className="d-df12">
          <p><small className='text-gray-600 my-2'>Estimated Time: {value.time} minutes</small></p>
          <p className='my-2'>Total Questions: <b>{value.total}</b> </p>
          <p className="pr-gr-earn">$<b>{value.price}</b></p>
        </div>
        <button className=' my-3 bg-primary white'>Start survey</button>
    </div>
  )
}

const SubDashboard = ()=> {
  return(
    <div className="sub-dashboard">
      <h4 className='violence'><b>Surveys for you</b></h4>
      <div className="flexman-ds">
        <SubDashItem title='Danger of Ai' time={30} total={50} price={1.2}/>
        <SubDashItem title='Perfect utopia' time={10} total={20} price={1.0}/>
        <SubDashItem title='Would you rather' time={60} total={50} price={2}/>
      </div>
        
    </div>
  )
}

const Home = () => {
  return (
      <div className='dashboard-home'>
          <SmallDivContainer/>
          <SubDashboard/>
          <Interest/>
      </div>
  )
}

export default Home