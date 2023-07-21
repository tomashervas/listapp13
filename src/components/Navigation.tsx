'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'


const navLinks = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: '/about'
    }
]
const Navigation = () => {

    const pathname = usePathname()

  return (
    <div className='flex justify-between p-4 bg-slate-400'>
        <h1>List app 13</h1>
        <ul className='flex space-x-4'>
            {navLinks.map((link) => (
                <li key={link.name}>
                    <Link href={link.href} className={pathname === link.href ? 'text-violet-500' : ''}>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default Navigation