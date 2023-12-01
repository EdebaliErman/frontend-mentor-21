import React from 'react'
import { useState } from 'react'
import "../../Style/Card.css"
import { icon } from '../../icons/icon-arrow'
import { handleChange, handleSubmit } from '../../Hook/hook'

function Card() {
    const [error, setError] = useState({
        year: false,
        month: false,
        day: false
    })
    const [unError, setUnError] = useState({
        year: false,
        month: false,
        day: false
    })
    const [resultTime, setResultTime] = useState({
        year: undefined,
        month: undefined,
        day: 0
    })
    const [startTime, setStartTime] = useState({
        year: undefined,
        month: undefined,
        day: undefined
    })



    const isYear = new Date(resultTime.year, resultTime.month, resultTime.day)
    const inTime = new Date()



    return (
        <div className='Card'>
            <form
                onSubmit={e => handleSubmit(
                        e,
                        error,
                        resultTime,
                        startTime,
                        setStartTime,
                        setUnError,
                        inTime,
                        isYear
                    )}>
                <div className='box'>
                    <div className={error.day || unError.day ? "errorBox" : "inputBox"}>
                        <label>day</label>
                        <input
                            type='text'
                            placeholder='DD'
                            name="day"
                            onChange={e=>handleChange(e,setUnError,setError,setResultTime,inTime)} />
                        <h4 className='errortext'>{error.day ? "Must be a valid day" : ""}</h4>
                        <h4 className='errortext'>{unError.day ? "This field is required" : ""}</h4>
                    </div>
                    <div className={error.month || unError.month ? "errorBox" : "inputBox"}>
                        <label>Month</label>
                        <input
                            type='text'
                            name="month"
                            placeholder='MM'
                            onChange={e=>handleChange(e,setUnError,setError,setResultTime,inTime)} />
                        <h4 className='errortext'>{error.month ? "Must be a valid month" : ""}</h4>
                        <h4 className='errorUntext'>{unError.month ? "This field is required" : ""}</h4>
                    </div>
                    <div className={error.year || unError.year ? "errorBox" : "inputBox"}>
                        <label>year</label>
                        <input
                            type='text'
                            name="year"
                            placeholder='YYYY'
                            onChange={e=>handleChange(e,setUnError,setError,setResultTime,inTime)} />
                        <h4 className='errorUntext'>{unError.year ? "This field is required" : ""}</h4>
                        <h4 className='errortext'>{error.year ? "Must be a valid year" : ""}</h4>
                    </div>
                </div>
                <div className='button-box'><hr /><button>{icon}</button></div>
            </form>
            <footer>
                <div>{startTime.year === undefined ? <span>--</span> : <span>{startTime.year}</span>} years</div>
                <div>{startTime.month === undefined ? <span>--</span> : <span>{startTime.month}</span>} months</div>
                <div>{startTime.day === undefined ? <span>--</span> : <span>{startTime.day === 0 ? startTime.day + 1 : startTime.day * -1}</span>} days</div>
            </footer>
        </div>
    )
}

export default Card
