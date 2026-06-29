import { useState } from 'react'
import classNames from 'classnames'
import logo from '../assets/logo.svg'

function Navbar() {
  const [activeButton, setActiveButton] = useState('Home')

  const navClassNames = classNames(
    'px-16 py-10 flex items-center justify-between'
  )

  const logoClassNames = classNames('framework')

  const linksWrapperClassNames = classNames('flex items-center gap-12')

  const baseButtonClassNames = classNames(
    'transition-colors cursor-pointer select-none text-xl font-semibold'
  )

  const getNavButtonClassNames = (buttonName: string) =>
    classNames(baseButtonClassNames, {
      'text-orange-500': activeButton === buttonName,
      'text-[#0C0C0C] hover:text-orange-400': activeButton !== buttonName,
    })

  const getStartedButtonClassNames = classNames(
    baseButtonClassNames,
    'px-5 py-3 rounded-2xl bg-orange-500 text-white hover:bg-orange-600'
  )

  return (
    <nav className={navClassNames}>
      <img src={logo} className={logoClassNames} alt="React logo" />

      <div className={linksWrapperClassNames}>
        <button
          className={getNavButtonClassNames('Home')}
          onClick={() => setActiveButton('Home')}
        >
          Home
        </button>

        <button
          className={getNavButtonClassNames('Community')}
          onClick={() => setActiveButton('Community')}
        >
          Community
        </button>

        <button
          className={getNavButtonClassNames('Pricing')}
          onClick={() => setActiveButton('Pricing')}
        >
          Pricing
        </button>

        <button className={getStartedButtonClassNames}>
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navbar