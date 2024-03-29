import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#2b5390] text-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>

                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-4 pl-5'>
                        <p className='text-3xl font-bold inline border-b-4 border-white'> About Me</p>
                    </div>

                    <div>  </div>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-xl font-bold'>
                            <p>Hi!  I am Paul Nixon, a current student of the UPENN Full Stack Program.  Enjoy the portfolio!</p>
                        </div>

                    </div>

                    <div> My passion is web development! I currently specialize in HTML, CSS, JavaScript, React.JS, and Node.js </div>

                </div>
            </div>

        </div>
    )
}

export default About