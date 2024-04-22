import React from 'react'
import './cookie.scss'

function Cookie() {
    const setCookie = () => {
        document.cookie="NID=513=ChhdvHQO3zXDpdDGYJjdUvA5sonbjNdTs5E_YDnFiih6ty7okq2soahHtfmSj03s3DtOPc3LHo9wN79L8SfHDmiHRY5HkLjENgwg7Xpwl2sSigzjgYSYkRVAbqHt55c70CqHbQjQPewGjngt37BBb1Ktt_8mCpa367g6vbA5SgWhD7QP6xIqcIyrUKYHsiTk_4yPFPXLH0y2Y92Idt0gzfMtoAyPam1N13To; Secure; Path=/; SameSite=None; Partitioned;"
    }
  return (
    <>
    <div className='border-radius' id="cookies">
        <div className="cookies__container">
            <div className="cookies__subcontainers">
                <div className="cookie">
                    <p className='margin-4'>This website uses cookies to ensure the best experience in a most secure way.</p>
                    <button onClick={setCookie} className='border-radius cookie__btn margin-4' id='form-btn'>I agree</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cookie