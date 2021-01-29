import React from "react"

import {
	Summary,
	Button,
	TagsGlobe
} from "@/components"

import {
	SkillsSectionContainer,
	SkillsSectionContent,
	SkillsGlobeContainer,
	SeeMoreContainer
} from "@/views/Home/Skills/styles"

import { appUrls } from "@/lib/personal"

import useResponsiveBreakpoints from "@/hooks/useResponsiveBreakpoints"

const SKILLS = [
	"Kotlin", "Swift", "Dart" , "Flutter", "Firebase", "Cassandra", "HTML5", "Java", "Git", "CI/CD", "Ethical Hacking", "Tensorflow", "Computer Vision",  
	"CSS3", "React.js", "Typescript","Database management","Python","Javascript" , "Bootstrap" , "Machine learning" , "Reinforcement learning"

]

const SkillsSection: React.FC = () => {
	const { currentResult } = useResponsiveBreakpoints<{ globeSize: number, globeFontSize: number }>({
		breakpoints: {
			sm: { globeSize: 300, globeFontSize: 10 },
			md: { globeSize: 500, globeFontSize: 17 },
			xl: { globeSize: 700, globeFontSize: 17 }
		},
		initialValue: { globeSize: 700, globeFontSize: 17 }
	})

	return (
		<SkillsSectionContainer id='about'>
			<SkillsSectionContent>
				<Summary
					spotlightWidth="3em"
					type="About"
					title="Skills."
					description="A list of languages and framworks that I work with"
				/>
	
				<SkillsGlobeContainer
					initInvisible
					threshold={0.3}
				>
					<TagsGlobe
						width={currentResult.globeSize}
						height={currentResult.globeSize}
						fontSize={currentResult.globeFontSize}
						tags={SKILLS}
					/>
				</SkillsGlobeContainer>
	
				<SeeMoreContainer>
					<Button href={appUrls.skills}>
						CLICK HERE TO SEE MORE
					</Button>
				</SeeMoreContainer>
			</SkillsSectionContent>
		</SkillsSectionContainer>
	)
}

export default SkillsSection
