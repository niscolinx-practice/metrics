import React from 'react'

function comingSoon() {
    return (
        <div className='comingSoon'>
            <div className='ellipse1'></div>
            <div className='ellipse2'></div>
            <div className='ellipse3'></div>

            <div className='comingSoon__content'>
                <h1>Something awesome is coming soon</h1>
                <p>
                    Your all-in-one affiliate marketing tracking software track,
                    automate and optimize your campaigns.
                </p>
                <div className="comingSoon__timer">
                    <div className="comingSoon__timer-item">
                      <span>7</span>
                      <span>Days</span>
                    </div>
                    <div className="comingSoon__timer-item">
                      <span>7</span>
                      <span>Days</span>
                    </div>
                    <div className="comingSoon__timer-item">
                      <span>7</span>
                      <span>Days</span>
                    </div>
                    <div className="comingSoon__timer-item">
                      <span>7</span>
                      <span>Days</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default comingSoon
