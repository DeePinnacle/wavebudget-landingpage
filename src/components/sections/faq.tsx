import { faquestions } from "@/config/data";
import FAQsTemplates from '@/components/ui/faqs'
const FAQs = () => {
    return (
        <div className='bg-white px-2 py-14'>
            <h1 className='uppercase text-center text-xl font-bold text-[#008B8B] my-10 md:text-3xl'>frequently asked questions</h1>
            {
                faquestions.map((faq, index)=>(
                    <FAQsTemplates key = { index } question = { faq.question} answer = { faq.answer } />
                ))
            }
        </div>
    )
} 

export default FAQs;