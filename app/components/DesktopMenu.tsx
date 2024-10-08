'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Command, MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { navbarRoutes } from '~/routes/routes'
import KeepDarkLogo from '../../public/images/keep-dark.svg'
import KeepLogo from '../../public/images/keep.svg'
import { buttonVariants } from '../src'
import { cn } from '../src/utils/cn'
import Search from './Search'
import ThemeSwitcher from './ThemeSwitcher'

const DesktopMenu = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <div className="flex items-center space-x-28">
        <Link href="/" className="flex">
          <Image src={KeepLogo} alt="Keep React" width="130" height="53" className="block dark:hidden" />
          <Image src={KeepDarkLogo} alt="Keep React" width="130" height="53" className="hidden dark:block" />
        </Link>
        <div className="hidden laptop:ml-auto laptop:flex laptop:items-center laptop:space-x-10">
          {navbarRoutes.map((nav) => (
            <Link
              key={nav.id}
              href={nav.href}
              target={nav.redirect ? '_blank' : '_self'}
              className={`text-body-4 font-medium text-metal-600 hover:text-primary-500 active:text-primary-500 dark:text-metal-300 dark:active:text-white ${nav.name === 'Documentation' && pathname.includes('/docs/') ? 'text-primary-500 dark:text-white' : ''} ${nav.name === 'Blog' && pathname === '/blog' ? 'text-primary-500 dark:text-white' : ''}`}>
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
      <Search setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="hidden items-center gap-3 laptop:flex">
        <button
          onClick={openModal}
          className="flex w-[300px] items-center justify-between rounded-lg border border-metal-100 px-3 py-2.5 text-body-4 font-normal text-metal-600 transition-all duration-300 hover:bg-white dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
          <span className="flex items-center gap-2 text-body-4 font-normal text-metal-300 dark:text-white">
            <MagnifyingGlass size={20} />
            <span>Search component</span>
          </span>
          <span className="flex items-center text-body-4 font-normal text-metal-200">
            <Command size={20} />K
          </span>
        </button>
        <Link
          href="https://github.com/StaticMania/keep-react"
          target="_blank"
          className="rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
          <Image src="/images/icon/github.svg" height={22} width={22} alt="github" className="block dark:hidden" />
          <Image src="/images/icon/github-dark.svg" height={22} width={22} alt="github" className="hidden dark:block" />
        </Link>
        <Link
          href="https://discord.gg/fSxDJyvJmr"
          target="_blank"
          className="rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
          <Image src="/images/icon/discord.svg" height={22} width={22} alt="discord" />
        </Link>
        <Link href="/docs/getting-started/introduction" className={cn(buttonVariants({ size: 'md' }), 'capitalize')}>
          get started
        </Link>
        <ThemeSwitcher />
      </div>
    </>
  )
}

export default DesktopMenu
