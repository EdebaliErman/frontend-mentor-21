import React from 'react'
import { useState } from 'react'
import "../Style/Card.css"
import { icon } from '../icons/icon-arrow'

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

    const handleSubmit = (e) => {
        e.preventDefault()
        const y = inTime.getUTCFullYear() - resultTime.year
        const m = inTime.getUTCMonth() - isYear.getUTCMonth() + 1
        const d = inTime.getUTCDate() - isYear.getUTCDate() + 1
        console.log(isYear.getUTCFullYear())
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
            if (error.day === false && error.month === false && error.year === false) {
                if (resultTime.day !== undefined || resultTime.month !== undefined || resultTime.year !== undefined){
                    setStartTime((prev) => ({ ...prev, year: y, month: m, day: d }));
                }
            } else {
                console.log(error)
            }
        } else if (startTime.day === undefined || startTime.month === undefined || startTime.year === undefined) {
            setUnError((prev) => ({ ...prev, year: true, month: true, day: true }));
        }


    }

    const handleChange = (e) => {
        const { name, value } = e.target


        if (name === 'day' && (value < 1 || value > 31)) {
            if (value.length === 0) {
                setUnError((prev) => ({ ...prev, day: true }));
                setError((prev) => ({ ...prev, day: false }));
            }
            else {
                setUnError((prev) => ({ ...prev, day: false }));
                setError((prev) => ({ ...prev, day: true }));
            }
        } else if (name === 'month' && (value < 1 || value > 12)) {
            if (value.length === 0) {
                setUnError((prev) => ({ ...prev, month: true }));
                setError((prev) => ({ ...prev, month: false }));
            }
            else {
                setUnError((prev) => ({ ...prev, month: false }));
                setError((prev) => ({ ...prev, month: true }));
            }
        } else if (name === 'year' && (value > inTime.getUTCFullYear() || value < 0 || value === "")) {
            if (value === "") {
                setUnError((prev) => ({ ...prev, year: true }));
                setError((prev) => ({ ...prev, year: false }));
            }
            else {
                setUnError((prev) => ({ ...prev, year: false }));
                setError((prev) => ({ ...prev, year: true }));
            }
        }
        else {
            setError((prev) => ({ ...prev, [name]: false }));
            setUnError((prev) => ({ ...prev, [name]: false }));
            setResultTime((prev) => ({ ...prev, [name]: Number(value) }));
        }

        console.log(unError.day)


    }

    return (
        <div className='Card'>
            <form onSubmit={handleSubmit}>
                <div className='box'>
                    <div className={error.day || unError.day ? "errorBox" : "inputBox"}>
                        <label>day</label>
                        <input
                            type='text'
                            placeholder='DD'
                            name="day"
                            onChange={handleChange} />
                        <h4 className='errortext'>{error.day ? "Must be a valid day" : ""}</h4>
                        <h4 className='errortext'>{unError.day ? "This field is required" : ""}</h4>

                    </div>
                    <div className={error.month || unError.month ? "errorBox" : "inputBox"}>
                        <label>Month</label>
                        <input
                            type='text'
                            name="month"
                            placeholder='MM'
                            onChange={handleChange} />
                        <h4 className='errortext'>{error.month ? "Must be a valid month" : ""}</h4>
                        <h4 className='errorUntext'>{unError.month ? "This field is required" : ""}</h4>
                    </div>
                    <div className={error.year || unError.year ? "errorBox" : "inputBox"}>
                        <label>year</label>
                        <input
                            type='text'
                            name="year"
                            placeholder='YYYY'
                            onChange={handleChange} />
                        <h4 className='errorUntext'>{unError.year ? "This field is required" : ""}</h4>
                        <h4 className='errortext'>{error.year ? "Must be a valid year" : ""}</h4>
                    </div>
                </div>
                <div className='button-box'><hr /><button>{icon}</button></div>
            </form>
            <footer>
                <div>{startTime.year === undefined ? <span>--</span> : <span>{startTime.year}</span>} year</div>
                <div>{startTime.month === undefined ? <span>--</span> : <span>{startTime.month}</span>} month</div>
                <div>{startTime.day === undefined ? <span>--</span> : <span>{startTime.day === 0 ? startTime.day + 1 : startTime.day * -1}</span>} day</div>
            </footer>
        </div>
    )
}

export default Card
