import Image from 'next/image'
const Logo = () => {
    return (
        <div className='flex flex-row gap-2 items-center lg:w-40'>
            <div className='relative w-20 h-20 overflow-hidden'>
                <Image src='/logo.png' alt='navbar log' fill priority className='object-contain' />
            </div>
            <p className='uppercase font-bold text-base text-white'>Wave <br />Budget</p>
        </div>
    )
}

export default Logo;