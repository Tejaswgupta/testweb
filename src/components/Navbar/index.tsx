import React, { useState } from "react"

import {
	NavbarContainer,
	NavbarContent,
	Menu,
	MenuItem,
	NavbarBackground,
	MenuIconItem,
	MenuItemLink,
	LogoLink
} from "@/components/Navbar/styles"


import { appUrls } from "@/lib/personal"

import useDidMount from "@/hooks/useDidMount"
import { BiMenu } from "react-icons/bi"
import { MenuButton } from "../Summary/styles"
import { SocialLink } from "../utils/SocialLinks/styles"
import { FaAddressBook } from "react-icons/fa"

const Navbar: React.FC = () => {
	const [isScrolling, setIsScrolling] = useState(false)

	const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpened(lastState => !lastState)
	}

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpened(false)
	}

	useDidMount(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset === 0) {
				setIsScrolling(false)
			} else {
				setIsScrolling(true)
			}
		})
	})

	return (
		<NavbarContainer>
			<NavbarContent>
				<LogoLink
					href={appUrls.home}
					target="_self"
					rel="noreferrer"
				>
					{/* <Logo
						src="/images/new-logo.webp"
						alt="logo"
						width="26px"
						height="40px"
					/> */}
				</LogoLink>

				

				<Menu
					isMobileMenuOpened={isMobileMenuOpened}
					onClick={isMobileMenuOpened ? handleCloseMobileMenu : undefined}
				>
					<MenuIconItem id="menu-icon-item">
			
		
						<MenuButton onClick={toggleMobileMenu}>
							<BiMenu />
						</MenuButton>

						

					</MenuIconItem>

					<MenuItem>
						<MenuItemLink
							href={appUrls.home}
							target="_self"
							rel="noreferrer"
						>
							Home
						</MenuItemLink>
					</MenuItem>
					<MenuItem>
						<MenuItemLink
							href={appUrls.about}
						>
							About
						</MenuItemLink>
					</MenuItem>
					<MenuItem>
						<MenuItemLink
							href={appUrls.projects}
							target="_self"
							rel="noreferrer"
						>
							Projects
						</MenuItemLink>
						
					</MenuItem>
			
					
				</Menu>
			</NavbarContent>

			<NavbarBackground isScrolling={isScrolling} />
		</NavbarContainer>
	)
}

export default Navbar
