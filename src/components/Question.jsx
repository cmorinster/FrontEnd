import React, {useState}from 'react'

export default function Question(currentNumber, eventQuestions, setEventQuestions, eventDays, setEventDays) {

  function handleChange(e, currentNumber){
    const questionsDict = eventQuestions
    const checker = true
    questionsDict[`question${currentNumber}`] = e.target.value
    setEventQuestions(questionsDict)
  }
//questions[question1[day: sunday][times:[3:00pm, 4:00pm, 8:00am]]


  return (
    <form>
      <h2>Options:</h2>
      <label htmlFor="timeZone">Add Day*</label><br />
      <select id="timeZone" name="questions" placeholder="Select" value={eventDays.eventQuestions[`Question${currentNumber}`]}
          onChange={e => handleChange(e, currentNumber)}>

        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wedensday">Wednesday</option>
        <option value="Thursday">Thursday</option>
      </select>
    </form>
  )
}
