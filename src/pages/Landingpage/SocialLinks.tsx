import { DiscordIcon } from '@components/icons/DiscordIcon'
import { TelegramIcon } from '@pages/Landingpage/icons/TelegramIcon'
import { Xicon } from '@pages/Landingpage/icons/Xicon'
import React from 'react'

export const SocialLinks = () => {
  return (
    <div className=' h-10 relative flex items-center justify-center gap-1 '>
        <a href="#">
            <Xicon className='w-10' />
        </a>
        <a href="#">
            <DiscordIcon className='w-10' />
        </a>
        <a href="#">
            <TelegramIcon className='' />
        </a>
    </div>
  )
}
