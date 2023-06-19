"use client";
import React, {useState} from 'react'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

interface NavItem {
    label: string;
    page: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        page: 'home'
    },
    {
        label: 'About',
        page: 'about'
    },
    {
        label: 'Experience',
        page: 'experience'
    },
    {   
        label: 'Projects',
        page: 'projects'
    },  
]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)
  
return (
    <header className='w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:border-stone-900 dark:border-b dark:border-stone-600'>
        <div className='justify-between md:items-center md:flex'>
            <div>
                <div className='md:py-5 md:block'>
                    <h2 className='text-2xl font-bold'>Sang Vo</h2>
                </div>
            </div>
            <div className='md:flex md:space-x-6'>
                {NAV_ITEMS.map((item, idx) => {
                    return <a key={idx}>{item.label}</a> 
                })}
                {currentTheme === 'dark' ? (
                    <button 
                        onClick={() => setTheme("light")}
                        className='bg-slate-100 p-2 rounded-xl'
                    >
                        <RiSunLine />
                    </button>
                ) : (   
                    <button
                        onClick={() => setTheme("dark")}
                        className='bg-slate-100 p-2 rounded-xl'
                    >
                        <RiMoonFill />
                    </button>
                )}
            </div>
        </div>
    </header>
  )
}

export default Navbar