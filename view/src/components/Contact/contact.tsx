import { useState } from "react";

const Contact = () => {
    const [process, setProcess] = useState(false);

    const [form, setForm] = useState({
        fullname: '',
        email: '',
        telephone: '',
        message: ''
    })

    const handleChange = () => {

    }

    return (
        <>
            <section id="contact" className="grid font-fira md:p-16 p-8 grid-cols-1 md:grid-cols-5 gap-4 bg-slate-200">
                <div className="md:space-y-8 space-y-4">
                    <h3 className="text-lg md:text-sm font-semibold text-slate-900 tracking-widest">GET A QUOTE</h3>
                    <button className="shadow-md">
                        <a href="#" className="w-full flex items-center hover:ring-1 hover:ring-red-700 hover:text-red-700 hover:bg-white transition-all text-white px-6 py-3 text-xs bg-red-700 font-semibold">
                        <span className="fluent--call-16-regular"></span> CALL US
                        </a>
                    </button>
                </div>
                <div className="col-span-4 w-full space-y-4 font-manrope bg-white shadow-md px-8 py-16 rounded-md">
                    <h2 className="text-3xl text-black font-semibold">Describe your project & get a quotation.</h2>
                    <p className="text-base text-slate-500">Describe your project or specific request and we will schedule
                        a meeting or send you a quote. We endeavor to respond within 24 hours on weekdays.
                    </p>
                    <form className="space-y-4">
                        <input type="text" required onChange={handleChange} name="fullname" placeholder="Fullname" className="w-full rounded-sm px-4 py-2 border shadow-inner text-sm text-slate-500 placeholder:font-medium outline-none" id="" />
                        <input type="tel" required name="telephone" placeholder="Phone Number" className="w-full rounded-sm px-4 py-2 border shadow-inner text-sm text-slate-500 placeholder:font-medium outline-none" id="" />
                        <input type="email" required onChange={handleChange} name="email" placeholder="Email" className="w-full rounded-sm px-4 py-2 border shadow-inner text-sm text-slate-500 placeholder:font-medium outline-none" id="" />
                        <textarea rows={5} required onChange={handleChange} cols={10} name="message" placeholder="Describe Your Project" className="rounded-sm px-4 py-2 placeholder:font-medium text-sm shadow-inner w-full outline-none border text-slate-500" />
                        <button disabled={process} className="hover:ring-teal-600 hover:ring-1 hover:bg-white transition-all hover:text-teal-600 text-slate-50 py-3 px-4 text-sm font-medium bg-teal-600">
                            {process ? 'PROCESSING...' : 'SUBMIT YOUR REQUEST'}
                        </button>
                    </form>
                </div>
                
            </section>
        </>
    )
}

export default Contact