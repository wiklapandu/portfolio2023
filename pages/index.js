import Image from 'next/image'
import { Inter } from 'next/font/google'
import DefaulTemplate from '@/components/templates/defaults'

const inter = Inter({ subsets: ['greek'] })

export default function Home() {
  return (
    <DefaulTemplate>
      <div className={"grid grid-cols-12 items-center min-h-[90vh] " + inter.className}>
        <div className={'col-span-6'}>
          <div className="title text-[60px] font-bold">
            <h1 className='leading-[68px] text-dark_text'>
              Hi, I{"'"}m <span className='text-light_text'>Wikla!</span>
              <span className='block'>Web Developer</span>
              <span className='block'>Based in Jogja</span>
            </h1>
          </div>
          <p className='my-6 text-dark_text_secondary text-[18px] max-w-[400px]'>
          I{"'"}m a Jogja, Indonesia based web developer & back{"‑"}end developer with <span className='text-light_text'>2+ years</span> of experience
          </p>
          <div className="button-group flex gap-3 mb-[100px]">
            <a href="#" className='bg-dark hover:bg-transparent hover:text-dark inline-block border border-dark duration-500 ease-out text-white py-[9px] px-[40px] rounded-[4px] text-[18px]'>Got a project</a>
            <a href="#" className='bg-transparent hover:bg-dark transition-all hover:text-white duration-500 ease-out border border-dark inline-block text-dark py-[9px] px-[40px] rounded-[4px] text-[18px]'>Contact Us</a>
          </div>
          <ul className="text-dark font-medium font-sans text-[18px] leading-[32px]">
            <li>
              <a href="#">+77 022 444 05 05</a>
            </li>
            <li>
              <a href="#">support@elisc.com</a>
            </li>
            <li>
              <a href="#">Ave Street Avenue, New York</a>
            </li>
          </ul>
        </div>
        <div className="col-span-6 pl-[50px]">
          <Image src={'/imgs/2.png'} className='w-full' width={'500'} height={'500'} alt='image home'/>
        </div>
      </div>
      </DefaulTemplate>
  )
}
