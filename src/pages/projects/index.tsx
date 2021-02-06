import React from "react"
import { GetStaticProps, NextPage } from "next"

import { getAllDetailedPosts, DetailedPost } from "@/lib/posts"

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
