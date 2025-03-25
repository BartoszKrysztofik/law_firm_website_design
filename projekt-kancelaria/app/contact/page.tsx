import Link from 'next/link'
import React from 'react'

import FacebookIcon from '@/components/graphicComponents/FacebookIcon'
import LinkedInIcon from '@/components/graphicComponents/LinkedIn'
import CompanyMap from '@/components/techComponents/CompanyMap'
import { contactData } from '@/data/contactData/contactData'
import { homeData } from '@/data/homeData/homeData'

type ContactPageProps = {
    children: React.ReactNode
    title?: string
    text?: string
}

const ContactPage: React.FC<ContactPageProps> = ({ children, title, text }) => {
    
    return (
      <div className='text-Gray text-LawName flex items-center justify-around'>
        <div className='w-600 h-600 px-8 pt-10'>
          <CompanyMap address={contactData.address}/>
        </div>  
        <div className='flex-col justify-center items-center px-8 space-y-3'>
          <div className='text-TitleNameFont'>{contactData.titleName}</div>
          <div className='text-NormalTextFont'>
            {contactData.address.split(",").map((line, index) => (
              <div key={index}>{line.trim()}</div>
            ))}
          </div>
          <div className='text-NormalTextFont'>{contactData.phone}</div>
          <div className='text-NormalTextFont'>{contactData.phone1}</div>
          <div className='text-NormalTextFont'>{contactData.email}</div>
          <div className='flex w-full h-120 items-center justify-start space-x-60'>
            <Link
              href={homeData.linkedinUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInIcon/>
            </Link>
            <Link
              href={homeData.facebookUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FacebookIcon/>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default ContactPage