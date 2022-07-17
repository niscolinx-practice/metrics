import React, { HtmlHTMLAttributes } from 'react'

function comingSoon() {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
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
                    Your all-in-one affiliate marketing tracking software  <span>track</span>, <span>automate</span>  and  <span>optimize</span> your campaigns.
                </p>
                <div className='comingSoon__content--timer'>
                    <div className='comingSoon__content--timer-item'>
                        <span className='span-1'>7</span>
                        <span className='span-2'>Days</span>
                    </div>
                    <div className='comingSoon__content--timer-item'>
                        <span className='span-1'>24</span>
                        <span className='span-2'>Hours</span>
                    </div>
                    <div className='comingSoon__content--timer-item'>
                        <span className='span-1'>54</span>
                        <span className='span-2'>Minutes</span>
                    </div>
                    <div className='comingSoon__content--timer-item'>
                        <span className='span-1'>11</span>
                        <span className='span-2'>Second</span>
                    </div>
                </div>
                <form className='' onSubmit={handleSubmit}>
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
