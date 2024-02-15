import React from 'react'
export type FlowNumberingProps = {
    text?: string;
    isFocused: boolean;
}
export const FlowNumbering = ({text = '1',isFocused}: FlowNumberingProps) => {
  return (
    <div className='relative w-[28px] flex justify-center items-center h-[28px] border-2 border-[#0A4429] rounded-full overflow-hidden'
        style={{
            backgroundColor: isFocused ? '#48E59B' : '#111',
            color: isFocused ? '#131313' : '#0A4429'
        }}>
        <p className='font-semibold text-[16px]'>{text}</p>
    </div>
  )
}
