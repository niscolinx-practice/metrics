import React, { HtmlHTMLAttributes } from 'react'

function comingSoon() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <div className='comingSoon'>
            <div className='comingSoon__ellipse'>
                <div className='comingSoon__ellipse--1'></div>
                <div className='comingSoon__ellipse--2'></div>
                <div className='comingSoon__ellipse--3'></div>
            </div>

            <div className='comingSoon__rapper'>
                <h1 className='comingSoon__header'>
                    Something awesome is coming soon
                </h1>
                <p className='comingSoon__text'>
                    Your all-in-one affiliate marketing tracking software{' '}
                    <span>track</span>, <span>automate</span> and{' '}
                    <span>optimize</span> your campaigns.
                </p>
                <div className='comingSoon__timer'>
                    <div className='comingSoon__timer--item'>
                        <span className='span-1'>7</span>
                        <span className='span-2'>Days</span>
                    </div>
                    <div className='comingSoon__timer--item'>
                        <span className='span-1'>24</span>
                        <span className='span-2'>Hours</span>
                    </div>
                    <div className='comingSoon__timer--item'>
                        <span className='span-1'>54</span>
                        <span className='span-2'>Minutes</span>
                    </div>
                    <div className='comingSoon__timer--item'>
                        <span className='span-1'>11</span>
                        <span className='span-2'>Second</span>
                    </div>
                </div>
                <form className='comingSoon__form' onSubmit={handleSubmit}>
                    <div className='comingSoon__form--1'>
                        <input
                            type='text'
                            placeholder='First Name..'
                            className='comingSoon__form--input'
                        />
                        <input
                            type='text'
                            placeholder='Last Name..'
                            className='comingSoon__form--input'
                        />
                    </div>
                    <div className='comingSoon__form--2'>
                        <input
                            type='text'
                            placeholder='Enter your email address...'
                            className='comingSoon__form--input-email'
                        />
                        <button type='submit' className='comingSoon__form--btn'>Join Our waiting List</button>
                    </div>
                </form>
            </div>

            <div className="comingSoon__contactUs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt dicta accusantium quisquam, quae, placeat voluptatibus reprehenderit vero delectus hic, eligendi nostrum beatae eveniet nulla nobis. Minima et molestias reprehenderit sunt.
            </div>
        </div>
    )
}

export default comingSoon
