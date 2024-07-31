import './style.css'

const Main = () => {
    return (
        <>
            <main id='main' className="p-12 relative h-[80vh] font-apercu lg:p-24">
                <div className='w-full lg:w-1/2'>
                    <h1 className='flex text-4xl lg:text-6xl space-y-3 flex-col text-blue-900 font-extrabold'>
                        <span>Expert </span>
                        <span>Courses Just</span>
                        <span>For You</span>
                    </h1>
                    <p className='font-fira text-lg text-gray-500 mt-4'>
                        Unlock your potential, improve your 
                        career or skill with our self-paced courses led
                        by experts in diverse fields.</p>
                    <button className='bg-blue-900 text-white px-6 py-2 rounded-lg mt-4'>Get Started</button>
                </div>
            </main>
        </>
    )
}

export default Main;
