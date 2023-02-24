import React from 'react'
import './Photo.css'

const Photo = () => {
  return (
    <div id='photo' className='photo'>
        <p>PHOTOGRAPHY</p>
        <div className='photo_mat'>
            
            <div className='photo_mat_part'>
                <div className='photo_mat_part_flex'></div>
                <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>

            <div className='photo_mat_part'>
                <div className='photo_mat_part_flex'></div>
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="" />
            </div>

            <div className='photo_mat_part'>
                <div className='photo_mat_part_flex'></div>
                <img src="https://images.unsplash.com/photo-1677058569208-74e09eb0d437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>

            <div className='photo_mat_part'>
                <div className='photo_mat_part_flex'></div>
                <img src="https://images.unsplash.com/photo-1677075610184-57d21d023e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Photo