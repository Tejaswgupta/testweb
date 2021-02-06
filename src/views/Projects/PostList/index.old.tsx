// import React from "react"
// import Link from "next/link"

// import { DetailedPost } from "@/lib/posts"
// import { chunk, orderBy } from "@/lib/array"
// import projects from "../../Home/ProjectsSection/PortfolioItems/projects.json"

// import {
// 	Summary,
// 	PostInfo
// } from "@/components"

// import {
// 	PostListSectionContainer,
// 	PostListSectionContent,
// 	PostCover,
// 	PostItemContainer,
// 	PostItemContent,
// 	PostsContainer,
// 	PostsContent,
// 	PostDivider
// } from "@/views/Projects/PostList/styles"

// type PostListProps = {
// 	posts: DetailedPost[]
// }

// const PostList: React.FC<PostListProps> = (props) => {
// 	const { posts } = props

// 	return (
// 		<PostListSectionContainer>
// 			<PostListSectionContent>
// 				<Summary
// 					spotlightWidth="220px"  //! Fix to use rem
// 					type="Knowledge"
// 					title="Projects."
// 					description="Some of my previous projects"
// 				/>

// 				<PostsContainer>
// 					{posts
						
// 						.sort(orderBy<DetailedPost>("dateInMilliseconds", "ASC"))
// 						.reverse()
// 						.reduce(chunk<DetailedPost[][], DetailedPost>(3), [])
// 						.reverse()
// 						.map((postChunk, index) => (
// 							<React.Fragment
// 								key={index}
// 							>
// 								<PostsContent
// 									postsCount={postChunk.length}
// 								>
// 									{
// 										postChunk
// 											.filter(post => post.published)
// 											.map((post) => (
// 												<PostItemContainer
// 													key={post.slug}
// 												>
// 													<button onClick={()=>console.log(post.slug)}>
// 																Click
// 													</button>
// 													<Link
// 														key={post.slug}
// 														href={post.slug}
// 														passHref
// 													>
// 														<PostItemContent
// 															postsCount={postChunk.length}
// 														>
// 															<PostCover
// 																src={post.coverSrc}
// 																alt={post.title}
// 															/>

															
				
// 															<PostInfo
// 																date={post.shortDate}
// 																description={post.description}
// 																readingTime={post.readingTime}
// 																tags={post.tags}
// 																title={post.title}
// 																authorName={post.authorName}
// 																authorAvatarSrc={post.authorAvatarSrc}
// 															/>
// 														</PostItemContent>
// 													</Link>
// 												</PostItemContainer>
// 											))
// 									}
// 								</PostsContent>

// 								<PostDivider />
// 							</React.Fragment>
// 						))}
// 				</PostsContainer>
// 			</PostListSectionContent>
// 		</PostListSectionContainer>
// 	)
// }


// export default PostList

export {}