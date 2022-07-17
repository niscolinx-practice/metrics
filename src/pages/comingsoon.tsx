import React from 'react'

function comingSoon() {
    return (
        <div className='comingSoon'>
            <div className='comingSoon__ellipse'>
                <div className='comingSoon__ellipse--1'></div>
                <div className='comingSoon__ellipse--2'></div>
                <div className='comingSoon__ellipse--3'></div>
            </div>

            <div className='comingSoon__content'>
                <h1 className='comingSoon__content--header'>
                    Something awesome is coming soon
                </h1>
                <p className='comingSoon__content--text'>
                    Your all-in-one affiliate marketing tracking software track,
                    automate and optimize your campaigns.
                </p>
                <div className='comingSoon__timer'>
                    <div className='comingSoon__timer-item'>
                        <span>7</span>
                        <span>Days</span>
                    </div>
                    <div className='comingSoon__timer-item'>
                        <span>24</span>
                        <span>Hours</span>
                    </div>
                    <div className='comingSoon__timer-item'>
                        <span>54</span>
                        <span>Minutes</span>
                    </div>
                    <div className='comingSoon__timer-item'>
                        <span>11</span>
                        <span>Second</span>
                    </div>
                </div>
                <form>
                    <input type='text' placeholder='First Name..' />
                    <input type='text' placeholder='Last Name..' />

                    <div>
                        <input
                            type='text'
                            placeholder='Email your email address...'
                        />
                        <button type='submit'>Join Our waiting List</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default comingSoon
