import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../styling/PollPageDays.css';
import Question from '../components/Question';

const DaySelector = ({ onChange, disabledOptions=[] }) => {
  const [selected, setSelected] = useState("");
  return (
    <select onChange={(e) => {
      onChange(e.target.value, []);
      setSelected(e.target.value);
    }
      
    }>
      {disabledOptions.includes("sunday") && selected !== "sunday" ? null : (
        <option value="sunday">Sunday</option>
      )}
      {disabledOptions.includes("monday") && selected !== "monday" ? null : (
        <option value="monday">Monday</option>
      )}
      {disabledOptions.includes("tuesday") && selected !== "tuesday" ? null : (
        <option value="tuesday">Tuesday</option>
      )}
      {disabledOptions.includes("wednesday") &&
      selected !== "wednesday" ? null : (
        <option value="wednesday">Wednesday</option>
      )}
      {disabledOptions.includes("thursday") &&
      selected !== "thursday" ? null : (
        <option value="thursday">Thursday</option>
      )}
      {disabledOptions.includes("friday") && selected !== "friday" ? null : (
        <option value="friday">Friday</option>
      )}
      {disabledOptions.includes("saturday") &&
      selected !== "saturday" ? null : (
        <option value="saturday">Saturday</option>
      )}
    </select>
  )
}
export default function PollPageDays ({ eventQuestions, onChange })  { 
    const disabledOptions = eventQuestions.map(({ day }) => day)
    const allowMoreQuestions = eventQuestions.length < 7;
  
    return (
      <>
        {eventQuestions.map((item, idx) => (
          <DaySelector key={idx} {...item} onChange={onChange} disabledOptions={disabledOptions}/>
        ))}
        {allowMoreQuestions ? <DaySelector onChange={onChange} disabledOptions={disabledOptions}/> : null}
      </>
    );
  };


























//   // how do i identify the which one im in, i have a counter in the for loop.  
//   function handleChange(e){
//     const questionsDict = eventQuestions
//     const checker = true
//     questionsDict[`question1`] = this.value;
//     setEventQuestions(questionsDict)
//   }
//   //react hook form

  
//   return (

//     <div className="poll-page">
//                   {/* TODO: Add "allow multiple answers", JS functionality */}
                 
//       <div className="polldays-title">Enter days to suggest for your event!</div>
//       <div className="polldays-modal">
  
//         <div className="modal-content">
//     <form  
//     >
//       <h2>Options:</h2>
//       <label htmlFor="timeZone">Add Day*</label><br />
//       <select id="days" name="question1" placeholder="Select" value={eventQuestions.question1}
//       onChange={(e) => {
//         this.setEventQuestions({ ...eventQuestions, question1: e.target.value });
// }}
//       >
//         <option value="Friday">Friday</option>
//         <option value="Saturday">Saturday</option>
//         <option value="Sunday">Sunday</option>
//         <option value="Monday">Monday</option>
//         <option value="Tuesday">Tuesday</option>
//         <option value="Wedensday">Wednesday</option>
//         <option value="Thursday">Thursday</option>
//       </select>
//     </form>
//     {/* {Object.keys(eventQuestions).length > 1 &&
//         <>
//         {eventQuestions.map((i) => < Question currentNumber={i+1} eventQuestions={eventQuestions} setEventQuestions={setEventQuestions} eventDays={eventDays} setEventDays={setEventDays}/>)}
//         </>
// } */}
//         </div>
//       </div>
//     </div>
//   );
// };


