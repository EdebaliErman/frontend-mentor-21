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

    const [resultTime, setResultTime] = useState({
        year: undefined,
        month: undefined,
        day: 0
    })
    const [startTime, setStartTime] = useState({
        year: 0,
        month: 0,
        day: 0
    })



    const isYear = new Date(resultTime.year, resultTime.month, resultTime.day)
    const inTime = new Date()

    const handleSubmit = (e) => {
        e.preventDefault()

        const y = inTime.getUTCFullYear() - isYear.getUTCFullYear()
        const m = inTime.getUTCMonth() - isYear.getUTCMonth() + 1
        const d = inTime.getUTCDate() - isYear.getUTCDate() + 1
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
            if (error.day === false && error.month === false && error.year === false) {
                setStartTime((prev) => ({ ...prev, year: y, month: m, day: d }));
            } else {
                console.log(error)
            }
        }
    }
    console.log(error)

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === 'day' && (value < 1 || value > 31)) {
            setError((prev) => ({ ...prev, day: true }));
        } else if (name === 'month' && (value < 1 || value > 12)) {
            setError((prev) => ({ ...prev, month: true }));
        } else if (name === 'year' && isNaN(value) && value > inTime.getUTCFullYear()) {
            setError((prev) => ({ ...prev, year: true }));
        } else {
            setError((prev) => ({ ...prev, [name]: false }));
            setResultTime((prev) => ({ ...prev, [name]: Number(value) }));
        }

    }

    return (
        <div className='Card'>
            <form onSubmit={handleSubmit}>
                <div className='box'>
                    <div className={error.day ? "text-red-600" : "inputBox"}>
                        <label>day</label>
                        <input
                            type='text'
                            placeholder='DD'
                            name="day"
                            onChange={handleChange} />
                    </div>
                    <div className={error.month ? "text-red-600" : "inputBox"}>
                        <label>Month</label>
                        <input
                            type='text'
                            name="month"
                            placeholder='MM'
                            onChange={handleChange} />
                    </div>
                    <div className={error.year ? "text-red-600" : "inputBox"}>
                        <label>year</label>
                        <input
                            type='text'
                            name="year"
                            placeholder='YYYY'
                            onChange={handleChange} />
                    </div>
                </div>
                <div className='button-box'><hr /><button>{icon}</button></div>
            </form>
            <footer>
                <div>{startTime.year === 0 ? <span>--</span> : <span>{startTime.year}</span>} year</div>
                <div>{startTime.month === 0 ? <span>--</span> : <span>{startTime.month}</span>} month</div>
                <div>{startTime.day === 0 ? <span>--</span> : <span>{startTime.day === 0 ? startTime.day + 1 : startTime.day * -1}</span>} day</div>
            </footer>
        </div>
    )
}

export default Card
