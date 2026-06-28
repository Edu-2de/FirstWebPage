import { Menu, X } from 'lucide-react'
import { useEffect, useState, type ComponentProps } from 'react'
import { NavLink } from 'react-router-dom'
import { tv, type VariantProps } from 'tailwind-variants'
import Button from '../ui/Button'
import Text from '../ui/Text'

const NAV_LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'THE ARCHIVE', to: '/archive' },
]

const headerVariants = tv({
  slots: {
    container:
      ' w-full max-w-screen bg-background gap-6 flex justify-between items-center xl:px-60 lg:py-6 p-6 fixed top-0 z-50 ',
    nav: 'gap-8 hidden md:flex items-center',
    logo: ' relative',
    mobileButton: 'md:hidden flex items-center z-60 relative',

    mobileContainer: `fixed inset-y-0 right-0 w-full max-w-sm bg-background-secondary
                      z-50 flex flex-col px-8 pt-24 gap-8 shadow-2xl
                      transition-transform duration-300 ease-in-out`,

    overlay: `fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden
              transition-opacity duration-300`,
  },
  variants: {
    scrolled: {
      true: {
        container: 'bg-background/90 backdrop-blur-md shadow-md lg:py-4',
      },
      false: {
        container: 'bg-background',
      },
    },
  },
  defaultVariants: {
    scrolled: false,
  },
})

type HeaderVariantsProps = VariantProps<typeof headerVariants>

interface HeaderProps extends ComponentProps<'header'>, HeaderVariantsProps {}

export default function Header({ className, ...props }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const { container, logo, nav, mobileButton, mobileContainer, overlay } =
    headerVariants({ scrolled: isScrolled })

  return (
    <header className={container({ className })} {...props}>
      <div className={logo()}>
        <NavLink to="/" onClick={closeMenu}>
          <Text textSize="xl">LOGO</Text>
        </NavLink>
      </div>

      <nav className={nav()} aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
            }
          >
            <Text textColor="primary" textSize="md">
              {link.label}
            </Text>
          </NavLink>
        ))}
        <NavLink to="/shop">
          <Button
            buttonSize="sm"
            buttonColor="none"
            className="animate-pulse hover:animate-none"
          >
            Shop Retro
          </Button>
        </NavLink>
      </nav>

      <div className={mobileButton()}>
        <Button
          onClick={toggleMenu}
          buttonSize="icon"
          buttonColor="primary"
          Icon={isMenuOpen ? X : Menu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        />
      </div>

      <div
        className={`${overlay()} ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        className={`${mobileContainer()} ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {NAV_LINKS.map((link) => (
          <NavLink key={`mobile-${link.to}`} to={link.to} onClick={closeMenu}>
            <Text textColor="secondary" textSize="lg">
              {link.label}
            </Text>
          </NavLink>
        ))}
        <NavLink to="/shop" onClick={closeMenu}>
          <Button buttonColor="secondary" buttonSize="full">
            Shop Retro
          </Button>
        </NavLink>
      </div>
    </header>
  )
}
