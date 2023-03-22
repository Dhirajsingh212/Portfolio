import React from 'react'
import './Photo.css'

const Photo = () => {
  return (
    <div id='photo' className='photo'>
        <p>CERTIFICATION</p>
        <div className='photo_info'>
            <div className='photo_info_div'>
                <p>REACTJS(basic)</p>
                <a className='photo_info_div_link' href="https://www.hackerrank.com/certificates/78e63b56584a">https://www.hackerrank.com/certificates/78e63b56584a</a>
                <a className='photo_info_div_link2' href="https://www.hackerrank.com/certificates/78e63b56584a">...Visit</a>
            </div>
            <div className='photo_info_div'>
                <p>JAVASCRIPT(basic)</p>
                <a className='photo_info_div_link' href="https://www.hackerrank.com/certificates/b2ffe6012ccd">https://www.hackerrank.com/certificates/b2ffe6012ccd</a>
                <a className='photo_info_div_link2' href='https://www.hackerrank.com/certificates/b2ffe6012ccd'>...Visit</a>
            </div>
        </div>
    </div>
  )
}

export default Photo