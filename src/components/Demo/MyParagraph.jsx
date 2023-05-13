import React from 'react'

const MyParagraph = ({ children }) => {
    console.log('MyParagraph running ..........')
    return (
        <p>
            {children}
        </p>
    )
}

export default MyParagraph
