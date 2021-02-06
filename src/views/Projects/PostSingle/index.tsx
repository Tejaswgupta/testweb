import React from "react"

import { DetailedPost } from "@/lib/posts"

import {
	PostSingleSectionContainer,
	PostSingleSectionContent,
	PostCover,
	PostContent
} from "@/views/Projects/PostSingle/styles"
import { PostInfo } from "@/components"

type PostSingleProps = {
	post: DetailedPost
}

const PostSingle: React.FC<PostSingleProps> = (props) => {
	const { post } = props

	return (
		<PostSingleSectionContainer>
			<PostSingleSectionContent>
				<PostInfo 
					date="date"
					description={post.description}	
					tags={post.tags}
					title={post.title}
					authorName={post.authorName}
					authorAvatarSrc={post.authorAvatarSrc}
				/>

				<PostCover
					src={post.coverSrc}
					alt={post.title}
				/>

				<PostContent
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</PostSingleSectionContent>
		</PostSingleSectionContainer>
	)
}

export default PostSingle
