import React, { useState, useEffect } from 'react';

function Comingsoon() {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const launchDate = new Date("January 1 2023 12:00:00").getTime()
        console.log(launchDate)

        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = launchDate - now
            console.log(now)

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
        }, 1000)

        return () => clearInterval(interval)
    })

    return (
        <div className='content'>
            <h1>We are coming <span>soon.</span></h1>
            <div className='launch'>
                <h2>
                    Launching in {days} days, {hours} hours, {minutes} minutes, {seconds} seconds 
                </h2>

                <div>
                    <p>{days}</p>
                    <span>Days</span>
                </div>
                <div>
                    <p>{hours}</p>
                    <span>Hours</span>
                </div>
                <div>
                    <p>{minutes}</p>
                    <span>Minutes</span>
                </div>
                <div>
                    <p>{seconds}</p>
                    <span>Seconds</span>
                </div>
            </div>
            <button>Learn More</button>
        </div>
    )
}

export default Comingsoon