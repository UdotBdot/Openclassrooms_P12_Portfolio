import React from 'react'
import './cookie.scss'

function Cookie() {
  return (
    <>
    <div className='border-radius' id="cookies">
        <div className="cookies__container">
            <div className="cookies__subcontainers">
                <div className="cookie">
                    <p className='margin-4'>This website uses cookies to ensure the best experience in a most secure way.</p>
                    <button className='border-radius cookie__btn margin-4' id='form-btn'>I agree</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cookie