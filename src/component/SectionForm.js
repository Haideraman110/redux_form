import React from 'react'

const SectionForm = ({ children, ...props }) => {
    return (
        <>
            <main {...props}>
                {children}

            </main>

        </>



    )
}

export default SectionForm