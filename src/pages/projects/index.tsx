import React from "react"
import { NextPage } from "next"


import BlogLayout from "@/layouts/Blog"

import PostListSection, { ProjectProps } from "@/views/Projects/PostList/index"

type BlogProps = {
	posts: ProjectProps[]
}

const Blog: NextPage<BlogProps> = (props) => {
	const { posts } = props

	return (
		<BlogLayout>
			<PostListSection posts={posts} />
		</BlogLayout>
	)
}

export default Blog
