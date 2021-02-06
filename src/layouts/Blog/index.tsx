import React from "react"

import {
	BlogContainer
} from "@/layouts/Blog/styles"

import { MetaTag } from "@/components"

import { buildCDNUrl } from "@/lib/cdn"
import { appUrls } from "@/lib/personal"

const BlogLayout: React.FC = (props) => {
	const {children } = props

	

	const title = "Projects | Tejaswa Gupta"
	const description = "All Projects made by Tejaswa Gupta"

	return (
		<BlogContainer>
			<MetaTag
				page={{
					title,
					description
				}}
				share={{
					title,
					description,
					imageSrc: buildCDNUrl("/favicon.png"),
					url: appUrls.projects,
					type: "website"
				}}
			/>

			{children}
		</BlogContainer>
	)
}

export default BlogLayout
