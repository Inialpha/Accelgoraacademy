import { NavLink } from "react-router-dom";

type UrlItem = {
    href: string;
    name: string;
};

const url: UrlItem[] = [
    {href: '/', name: 'Home'},
    {href: '/courses', name: 'Courses'},
    {href: '/about', name: 'About'},
    {href: '/contact', name: 'Contact us'}
];

const Nav = () => {
    return (
        <nav className="flex font-fira border items-center py-6 px-12 justify-between">
            <h1 className="text-lg">Logo</h1>
            <div>
                <ul className="hidden lg:flex font-normal items-start space-x-8">
                    {url.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink className='hover:font-medium' to={item.href}>{item.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <button className="bg-black lg:block hidden hover:bg-black/20 px-8 py-3 rounded-lg text-white">
                Apply now
            </button>
        </nav>
    )
}

export default Nav;