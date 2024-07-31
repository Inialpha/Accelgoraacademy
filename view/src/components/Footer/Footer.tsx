import Sitemap from "./Sitemap";

const Footer = () => {
    return (
        <>
            <footer className="bg-black grid grid-cols-1 lg:grid-cols-4 gap-4 text-slate-50 font-fira p-10 lg:px-24 lg:pt-12">
               <Sitemap />
               <div className="lg:col-span-4 flex flex-col lg:flex-row items-center justify-between">
                     <p className="mt-4">© 2022 Accelerate. All rights reserved.</p>
                     <ul className="flex items-center space-x-2">
                        <li>facebook</li>
                        <li>instagram</li>
                        <li>twitter</li>
                     </ul>
               </div>
            </footer>
        </>
    )
}

export default Footer;