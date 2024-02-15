import React from 'react'
import { OwnedDomainsGrid, OwnedDomainsGridProps } from '../../components/OwnedDomainsGrid'
import { DomainCard, DomainCardProps } from '../../components/DomainCard'
import { View  } from './View'

export type DomainOwnedContentProps = {
    domainCardProps: DomainCardProps;
    ownedDomainsProps: OwnedDomainsGridProps
}
export const DomainOwnedContent = ({domainCardProps, ownedDomainsProps}: DomainOwnedContentProps) => {
  return (
    <section className='relative min-h-screen py-24'>
        <div className=' w-full h-auto flex justify-center items-center gap-36 relative mb-20'>
          <DomainCard {...domainCardProps} />
          <View />
      </div>
        <OwnedDomainsGrid {...ownedDomainsProps}/>
    </section>
  )
}
