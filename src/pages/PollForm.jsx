import React, {useState} from 'react';
import PollCreate from "./PollCreate";
import PollPageDays from "./PollPageDays"
import PollPageTimes from './PollPageTimes';
import PollPage from "./PollPage"

export default function PollForm() {
    const [page, setPage] = useState(0);
    const [eventData, setEventData] = useState({
        creatorname : "",
        creatoremail : "",
        eventname : "",
        polldescription : "", 
        sharesults : false
    
});
    const [eventQuestions, setEventQuestions] = useState({});

        

    const PageDisplay = () => {
        if (page === 0) {
          return <PollPage eventData={eventData} setEventData={setEventData} eventQuestions ={eventQuestions} setEventQuestions={setEventQuestions} />;
        } else if (page === 1) {
          return <PollPageDays eventData={eventData} setEventData={setEventData} eventQuestions ={eventQuestions} setEventQuestions={setEventQuestions} />;
        } else if (page === 2){
          return <PollPageTimes eventData={eventData} setEventData={setEventData} eventQuestions ={eventQuestions} setEventQuestions={setEventQuestions}  />;
        } else {
          return <PollCreate eventData={eventData} setEventData={setEventData} eventQuestions ={eventQuestions} setEventQuestions={setEventQuestions} />;  
        }
        
      };



  

  return (
    <>
    <div className="pollForm">
        {PageDisplay()}

    </div>
     <div className="button-container">
     <button
       disabled={page == 0}
       onClick={() => {
         setPage((currPage) => currPage - 1);
       }}
     >
       Back
     </button>
     <button
       onClick={() => {
         if (page === 3) {
            
         } else {
           setPage((currPage) => currPage + 1);
         }
       }}
     >
       {page > 2 ? "Create poll" : "Next"}
     </button>
   </div>

  </>
  )
}
