export const handleSubmit = (e ,error,resultTime,startTime,setStartTime,setUnError ,inTime,isYear) => {
    e.preventDefault()
   
    const y = inTime.getUTCFullYear() - resultTime.year 
    const m = inTime.getUTCMonth() - isYear.getUTCMonth() + 1
    const d = inTime.getUTCDate() - isYear.getUTCDate() + 1
    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
        if (error.day === false && error.month === false && error.year === false) {
            if (resultTime.day !== undefined || resultTime.month !== undefined || resultTime.year !== undefined) {
                setStartTime((prev) => ({ ...prev, year: y, month: m, day: d }));
            }
        } else {
            console.log(error)
        }
    } else if (startTime.day === undefined || startTime.month === undefined || startTime.year === undefined) {
        setUnError((prev) => ({ ...prev, year: true, month: true, day: true }));
    }
    return resultTime
}


export const handleChange = (e,setUnError,setError,setResultTime,inTime) => {
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
}
