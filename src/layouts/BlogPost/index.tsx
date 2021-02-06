import React from "react";

import { BlogPostContainer } from "@/layouts/BlogPost/styles";

import { MetaTag } from "@/components";

import { buildImageSharePath } from "@/lib/image";
import { appUrls } from "@/lib/personal";

type BlogPostLayoutProps = {
	slug: string;
	title: string;
	description: string;
	coverSrc: string;
	authorName: string;

};

const BlogPostLayout: React.FC<BlogPostLayoutProps> = (props) => {
	const {
		children,
		description,
		coverSrc,
		title,
		slug,
	} = props;

	const imageSrc = buildImageSharePath(coverSrc);

	return (
		<BlogPostContainer>
			<MetaTag
				page={{
					title: `${title} | Tejaswa Gupta`,
					description,
				}}
				share={{
					title,
					description,
					imageSrc,
					url: `${appUrls.projects}/${slug}`,
			
					type: "article",
				
				}} />

			{children}

		</BlogPostContainer>
	);
};

export default BlogPostLayout;
