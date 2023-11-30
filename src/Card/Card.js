import React from 'react'
import { useState } from 'react'

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

    const validateRegex = (name, value, regex) => {
        if (!regex.test(value)) {
            setError(prev => ({ ...prev, [name]: true }))
        }
        else {
            setError(prev => ({ ...prev, [name]: false }))
            setResultTime((prev) => ({ ...prev, [name]: Number(value) }));
        }
    }



    const isYear = new Date(resultTime.year, resultTime.month, resultTime.day)
    const inTime = new Date()

    const handleSubmit = (e) => {
        e.preventDefault()

        const y = inTime.getUTCFullYear() - isYear.getUTCFullYear()
        const m = inTime.getUTCMonth() - isYear.getUTCMonth() + 1
        const d = inTime.getUTCDate() - isYear.getUTCDate() + 1
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
            setStartTime((prev) => ({ ...prev, year: y, month: m, day: d }));
        }

    }
    console.log(inTime.getUTCFullYear())

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
        <div>
            <form onSubmit={handleSubmit}>
                <button>handle</button>
                <div className={error.year ? "text-red-600" : "text-black"}>
                    <label>year</label>
                    <input
                        type='text'
                        name="year"
                        onChange={handleChange} />
                </div>
                <div className={error.month ? "text-red-600" : "text-black"}>
                    <label>Month</label>
                    <input
                        type='text'
                        name="month"
                        onChange={handleChange} />
                </div>
                <div className={error.day ? "text-red-600" : "text-black"}>
                    <label>day</label>
                    <input
                        type='text'
                        name="day"
                        onChange={handleChange} />
                </div>
            </form>
            <div>{startTime.year === 0 ? "--" : startTime.year}</div>
            <div>{startTime.month === 0 ? "--" : startTime.month}</div>
            <div>{startTime.day === 0 ? "--" : startTime.day}</div>
        </div>
    )
}

export default Card
