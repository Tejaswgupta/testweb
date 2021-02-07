import React, { useEffect } from "react"
import { NextPage } from "next"

import {
	DetailedPost,
} from "@/lib/posts"

import BlogPostLayout from "@/layouts/BlogPost"

import PostSingleSection from "@/views/Projects/PostSingle"
import { useRouter } from "next/dist/client/router"

type PostProps = {
	post: DetailedPost
}

const Post: NextPage<PostProps> = () => {

	const router = useRouter();
	const { project_name, project_description , project_image , tags } = router.query;
	// const x = tags ?? ["Misc"];

	useEffect(() => {
		console.log(tags);
	});

	const customProp: DetailedPost = {
		title: project_name as string,  
		description: project_description as string, 
		coverSrc: project_image as string,
		slug:"{post.slug}",
		authorName:"Tejaswa Gupta",
		tags: [],
		authorAvatarSrc: "/images/new-logo.webp",
		content: "",
		date:"date"
	}; 

	return (
		<BlogPostLayout
			title= {project_name as string} 
			description={project_description as string}
			coverSrc={project_image as string}
			slug="{post.slug}"
			authorName='Tejaswa Gupta'
		>
			<PostSingleSection
				{...customProp}
			/>
		</BlogPostLayout>
	)
}


export default Post
