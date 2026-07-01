import { useState } from 'react'
import classNames from 'classnames'
import logo from '../assets/logo.svg'

type NavButtonName = 'Home' | 'Community' | 'Pricing'

const navButtons: readonly NavButtonName[] = ['Home', 'Community', 'Pricing']

function Navbar() {
  const [activeButton, setActiveButton] = useState<NavButtonName>('Home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const navClassNames: string = classNames(
    'pl-8 pr-6 py-6 flex items-center justify-between',
    'max-md:px-6 max-md:py-6'
  )

  const desktopLinksWrapperClassNames: string = classNames(
    'flex items-center gap-12',
    'max-md:hidden'
  )

  const mobileMenuButtonClassNames: string = classNames(
    'hidden max-md:flex items-center justify-center',
    'cursor-pointer rounded-xl p-2 transition-colors hover:bg-orange-50'
  )

  const mobileMenuClassNames: string = classNames(
    'hidden max-md:flex flex-col gap-6',
    'absolute left-0 right-0 top-full z-50',
    'bg-[#070707] px-6 py-6 shadow-lg'
  )

  const baseButtonClassNames: string = classNames(
    'transition-colors cursor-pointer select-none text-md'
  )

  const getNavButtonClassNames = (buttonName: NavButtonName): string =>
    classNames(baseButtonClassNames, {
      'text-orange-500': activeButton === buttonName,
      'text-[#c9c0b8] hover:text-orange-400': activeButton !== buttonName,
    })

  const getStartedButtonClassNames: string = classNames(
    baseButtonClassNames,
    'font-medium px-4 py-2 sm:px-5 sm:py-2 rounded-xl sm:rounded-xl bg-orange-500 text-[#0a0a0a] hover:bg-orange-600'
  )

  const handleNavButtonClick = (buttonName: NavButtonName): void => {
    setActiveButton(buttonName)
    setIsMobileMenuOpen(false)
  }

  const handleMobileMenuToggle = (): void => {
    setIsMobileMenuOpen((currentIsOpen: boolean): boolean => !currentIsOpen)
  }

  return (
    <nav className="relative border-b border-white/5">
      <div className={navClassNames}>
        <img src={logo} className='w-16 lg:w-16' alt="Gitto logo" />
        <div className={desktopLinksWrapperClassNames}>
          {navButtons.map((buttonName: NavButtonName) => (
            <button
              key={buttonName}
              type="button"
              className={getNavButtonClassNames(buttonName)}
              onClick={(): void => handleNavButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}

          <button type="button" className={getStartedButtonClassNames}>
            Get Started
          </button>
        </div>

        <button
          type="button"
          className={mobileMenuButtonClassNames}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          onClick={handleMobileMenuToggle}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="#c9c0b8"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="#c9c0b8"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation-menu" className={mobileMenuClassNames}>
          {navButtons.map((buttonName: NavButtonName) => (
            <button
              key={buttonName}
              type="button"
              className={getNavButtonClassNames(buttonName)}
              onClick={(): void => handleNavButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}

          <button type="button" className={getStartedButtonClassNames}>
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar