'use client'

import { useState } from 'react'
import { 
    Plus,
    X
} from 'lucide-react'
type paramsProps = {
    question: string,
    answer: string,
}
const FAQsTemplate = ({ question, answer }: paramsProps) => {

    const [ toggle, setToggle ] = useState(false)

    const handleOpen = () =>{
        setToggle(!toggle)
    }

    return (
        <div className="bg-[#008B8B] px-2 py-4 my-3 lg:max-w-[53.125rem] lg:mx-auto">
            <div className="flex flex-row gap-3 items-center justify-between">
                <p className='text-white cursor-pointer md:text-[1.375rem] lg:text-base' onClick={ handleOpen }>{ question }</p>
                {
                    toggle ? (
                        <X className='w-12 h-12 text-white cursor-pointer lg:w-8 lg:h-8' onClick={ handleOpen } />
                    ) : (
                        <Plus className='w-12 h-12 text-white cursor-pointer lg:w-8 lg:h-8' onClick={ handleOpen } />
                    )
                }
            </div>
            <div className={`${ toggle ? 'block' : 'hidden' } bg-white px-2 py-4 rounded-md border border-[#008B8B]`}>
                <p className='text-[#008B8B] md:text-[1.375rem] lg:text-base'>{ answer }</p>
            </div>
        </div>
    )
}
export default FAQsTemplate;