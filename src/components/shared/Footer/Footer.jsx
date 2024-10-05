import Container from '@/common/Container'
import Image from 'next/image'
import React from 'react'
import footerLogo from "@/assets/footerLogo.png"

const Footer = () => {
  return (
    <section>
        <Container className='py-4'>
            <div className='flex flex-col gap-y-6 sm:flex-row items-center justify-between'>
                <div>
                    <Image src={footerLogo} alt='footerLogo'/>
                </div>
                <div>
                    <span className='text-xs text-white'>© GoDev 2023</span>
                </div>
                <div className='flex-item-center gap-x-2'>
                    <span className='text-xs text-white'>Design By</span>
                    <span className='text-xs text-default'>Allan Gonçalves</span>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Footer