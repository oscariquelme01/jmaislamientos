'use client'

import { Transition, Menu } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, Fragment } from 'react'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

export default function Navbar() {
  return (
    <div className='relative'>
      <Menu as='div' className='relative inline-block text-left sm:hidden'>
        {({ open }) => (
          <>
            <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black/20 px-2 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
              <span>
                {open ? (
                  <XMarkIcon
                    className='h-8 w-8 text-gray-300 hover:text-white'
                    aria-hidden='true'
                  />
                ) : (
                  <Bars3Icon
                    className='h-8 w-8 text-gray-300 hover:text-white'
                    aria-hidden='true'
                  />
                )}
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-300'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-200'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute left-0 mt-2 w-screen origin-top-left divide-y divide-gray-100 shadow-lg ring-1 ring-black/5 focus:outline-none'>
                <div className='px-1 py-1 '>
                  {navigation.map((item) => (
                    <Menu.Item>
                      {({ active }) => (
                        <button className='group flex w-full items-center py-2 text-sm text-white border-b-[1px] border-b-gray-700'>
                          { item.name }
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>

      {/* Navbar wrapper */}
      <div className='w-full bg-transparent pt-4 sm:pl-2'>
        {/* Desktop navbar (only the links will hide on mobile, the logo will stay) */}
        <div className='mx-[20%] flex flex-1 items-center justify-center border-b-[1px] border-gray-600 pb-6'>
          <div className='flex flex-shrink-0 items-center'>
            <img
              className='h-8 w-auto'
              src='/images/logo-white.png'
              alt='Your Company'
            />
          </div>
          <div className='hidden sm:ml-6 sm:block'>
            <div className='flex space-x-4'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
