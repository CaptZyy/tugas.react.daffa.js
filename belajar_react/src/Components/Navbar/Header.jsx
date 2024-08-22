import React from 'react'
import Logo from './Logo'

export const Header = () => {
  return (
    <header className="dark:bg-hippieBlue-100 text-slate-50 fixed h-20 flex w-full mx-auto items-center justify-between px-4 border-gray-400 md:px-20 ">
      <Logo />
      <div className="flex gap-6">
        <a href="" className='hover:bg-gulfStream-100 p-2 rounded-full transition ease-in-out delay-75 hover:-translate-y-1 hover: scale-110'>About</a>
        <a href="" className='hover:bg-gulfStream-100 p-2 rounded-full transition ease-in-out delay-75 hover:-translate-y-1 hover: scale-110'>Contacts</a>
        <a href="" className='hover:bg-gulfStream-100 p-2 rounded-full transition ease-in-out delay-75 hover:-translate-y-1 hover: scale-110'>Comission</a>
      </div>
    </header>
  )
}