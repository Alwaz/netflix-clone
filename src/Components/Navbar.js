import React, { useEffect, useState } from 'react'
import '../SCSS/Navbar.css'

const Navbar=()=>{
    const[show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false);
        })
        return () => {
            window.removeEventListener('scroll',handleShow);
        }
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img 
            className='nav__logo' 
            src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            alt='Netflix Logo'/>

            <img 
            className='nav__avatar' 
            src='https://lh3.googleusercontent.com/proxy/gLRAKz3icsHjHcmCotwEkD6SWRN7L3kvc3HHvyWnCQR3uD8gDb-nem2fBDMzVtAkEHgdVlxOoU9870zky0ZZgdlFtM6UeAWJQ9ZiJuJgm5g2VFdYJrNDvZZ4-dIp'
            alt='profile images'/>
            
        </div>


    )


}

export default Navbar