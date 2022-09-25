import React from 'react'

const Footer = () => {
    return (
        <nav className='nabvar navbar-dark bg-primary'>
            <span className='text-center'>
                {" "}
                Martin Corona - &copy;{new Date().getFullYear()}
                {" "}
            </span>
        </nav>
    )
}

export default Footer
