import React, { useEffect } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"


// import BlogPostLayout from "@/layouts/BlogPost" //! BlogPostLayout causing error on server due to some reason.

import PostSingleSection from "@/views/Projects/PostSingle"

import {
	DetailedPost,
} from "@/lib/posts"


const Post = () => {

	const router = useRouter();
	const { project_name, project_description , project_image , tags } = router.query;

	const images = [
		"/images/new-logo.webp",
		"/images/new-logo.webp",
		"/images/new-logo.webp",
	];

	const customProp: DetailedPost = {
		title: project_name as string,  
		description: project_description as string, 
		coverSrc: project_image as string,
		slug:project_name as string,
		authorName:"Tejaswa Gupta",
		tags: [],
		authorAvatarSrc: "/images/new-logo.webp",
		content: `
		UNDER ACTIVE CONSTRUCTION
		`,
		date:"date"
	}; 

	return (
		// <BlogPostLayout
		// 	title= {project_name as string} 
		// 	description={project_description as string}
		// 	coverSrc={project_image as string}
		// 	slug={project_name as string}
		// >
		<PostSingleSection
			{...customProp}
		/>

	// </BlogPostLayout>
	);

	// return(
	// 	<h1>
	// 		TEST PAGE { project_name} {project_description } {tags}
	// 	</h1>
	// );

}


export default Post


// import { useRouter } from "next/router"
// import React from "react"

// const Post = () => {
// 	const router = useRouter()
// 	const { pid } = router.query

// 	return <p>Post: {pid}</p>
// }

// export default Post