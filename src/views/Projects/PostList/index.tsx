import React from "react"
import Link from "next/link"

import { DetailedPost } from "@/lib/posts"
import { chunk, orderBy } from "@/lib/array"
import projects from "../../Home/ProjectsSection/PortfolioItems/projects.json"
import RepoCount from "../../../components/RepoCount"

import {
	Summary,
	PostInfo
} from "@/components"

import {
	PostListSectionContainer,
	PostListSectionContent,
	PostCover,
	PostItemContainer,
	PostItemContent,
	PostsContainer,
	PostsContent,
	PostDivider
} from "@/views/Projects/PostList/styles"


export type ProjectProps = {
	project_name: string,
	project_description: string,
	project_image: string,
	tags: string[],

}

export type ProjectListProps = {
	posts: ProjectProps[]
}

const PostList: React.FC<ProjectListProps> = (props) => {
	const { posts } = props

	return (
		<PostListSectionContainer>
			<PostListSectionContent>
				<Summary
					spotlightWidth="220px"
					type="Knowledge"
					title="Projects."
					description="Some of my previous projects"
				/>

				{/* <PostListSectionContainer>
					<PostListSectionContent> */}
					
				<RepoCount/>
						
				{/* </PostListSectionContent>
				</PostListSectionContainer> */}
				
				<PostsContainer>
					{projects
						.reduce(chunk<ProjectProps[][], ProjectProps>(3), [])
						.reverse()
						.map(
							(
					
								postChunk,
								index
							) => (
								<React.Fragment
									key={index}
								>
									<PostsContent
										postsCount={postChunk.length}
									>
										{
									
											postChunk.map((		{
												project_name,
												project_description,
												project_image,
												tags 
											
											})=>(
												<PostItemContainer
													key={project_name}
												>
										
													<Link
														key={project_name}
														// href={`repo/${project_name}`}
														as={`projects/${project_name}`}
														href={{ pathname:`projects/${project_name}` , query: { project_name: `${project_name}` , project_description: `${project_description}` , project_image: `${project_image}` , tags: `${tags ?? ["Misc", "New"]}`}}}
														passHref
													>
														<PostItemContent
															postsCount={projects.length}
														>
															<PostCover
																src={project_image}
																alt={project_name}
															/>
					
															<PostInfo
																description={project_description}
																tags = {tags ?? ["Misc", "New"]}
																title={project_name}
																authorName="Tejaswa Gupta"
																authorAvatarSrc={project_image}
																date="date"
															/>
														
														</PostItemContent>
													</Link>
												</PostItemContainer>))
												
										}
									</PostsContent>

									<PostDivider />
								</React.Fragment>
							))}
				</PostsContainer>
			</PostListSectionContent>
			
		</PostListSectionContainer>
	)
}

export default PostList
