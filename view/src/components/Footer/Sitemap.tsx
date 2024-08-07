const Sitemap = () => {
    return (
        <>
            <div>
                <h1 className="text-lg font-bold">Logo</h1>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
            </div>
            <div>
                <h1 className="text-lg font-bold">Quick links</h1>
                <ul className="mt-4 space-y-2">
                    <li><a href="/">Home</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact us</a></li>
                </ul>
            </div>
            <div>
                <h1 className="text-lg font-bold">Contact us</h1>
                <ul className="mt-4 space-y-2">
                    <li>+1234567890</li>
                    <li>support@accelgora.com </li>
                </ul>
            </div>
            <div>
                <h1 className="text-lg font-bold">Support</h1>
                <ul className="mt-4 space-y-2">
                    <li>Privacy policy</li>
                    <li>Terms of service</li>
                </ul>
            </div>
        </>
    )
}

export default Sitemap;
