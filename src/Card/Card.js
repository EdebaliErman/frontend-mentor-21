import React from 'react'
import { useState } from 'react'

function Card() {
    const [resultTime, setResultTime] = useState({
        year: 0,
        month: 0,
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
        const y = inTime.getFullYear() - isYear.getFullYear()
        const m = inTime.getMonth() - (isYear.getMonth() - 1)
        const d = inTime.getDate() - isYear.getDate()
        setStartTime(prev => ({ ...prev, year: y, month: m, day: d }))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setResultTime(prev => ({ ...prev, [name]: Number(value) }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>handle</button>
                <div>
                    <label>Day</label>
                    <input type='text' onChange={handleChange} />
                </div>
                <div>
                    <label>Month</label>
                    <input type='text' onChange={handleChange} />
                </div>
                <div>
                    <label>year</label>
                    <input type='text' onChange={handleChange} />
                </div>
            </form>
            {startTime.day === 0 ? "-" : startTime.day} <br></br>
            {startTime.month === 0 ? "-" : startTime.month} <br></br>
            {startTime.year === 0 ? "-" : startTime.year} <br></br>
        </div>
    )
}

export default Card
