import React from 'react'
import './interest.css'

interface meera {
    question: string,
    placehold:string
}
interface meera1 {
    title:string
}
const QuestionForm = (meera:meera) => {
    return (
        <div className="ovv-11 flex">
        <p>{meera.question}</p>
        <input type="text" placeholder={meera.placehold}/>
    </div>
    )
}

const InterestSection = (meera1:meera1)=> {
    return (
        <div className="mint-sec-items">
                <h4>{meera1.title}</h4>
                <div className="int-uery">
                    <form >
                        <div className="ov-int-query-d">
                           <QuestionForm question="What's your favorite color?" placehold='Color'/>
                           <QuestionForm question="What's your best food?" placehold='Best food'/>
                           <QuestionForm question="Are you a good artist?" placehold='Yes/No'/>
                           <QuestionForm question="Have you ever gone mountain climbing?" placehold='Yes No'/>
                           <QuestionForm question="Do you have interest in mathematics??" placehold='Yes/No'/>
                           <QuestionForm question="What will you estimate your IQ to be?" placehold='IQ estimate'/>
                        </div>
                    </form>
                </div>
            </div>
    )
}

const Interest = () => {
  return (
    <div className="user-interest-sec">
        <h4 className="u-i-s"><b>My Interests</b> </h4>
        <div className="min-secs-ctn">
            <InterestSection title='Personal Interests'/>
            <InterestSection title='Professional Interests'/>
        </div>
    </div>
  )
}

export default Interest