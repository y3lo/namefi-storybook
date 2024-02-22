import React from 'react'

export const CaretLeft = React.memo<{className}>(({className})=>{
    return (
        <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={className} fillRule="evenodd" clipRule="evenodd" d="M15.2936 28.9679C14.649 29.5722 13.6364 29.5396 13.032 28.8949L1.03205 16.0949C0.455061 15.4794 0.455062 14.5217 1.03205 13.9063L13.0321 1.10629C13.6364 0.461625 14.649 0.428963 15.2936 1.03333C15.9383 1.6377 15.9709 2.65024 15.3666 3.2949L4.39248 15.0006L15.3666 26.7063C15.9709 27.3509 15.9383 28.3635 15.2936 28.9679Z" fill="#797979"/>
        </svg>
    )

},(p,c)=>p.className===c.className)