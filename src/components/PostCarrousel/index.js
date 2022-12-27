import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"
const PostCarrousel = () => {
  const { data } = useStaticQuery(graphql`
    query WordPressPostArchive {
      data: allWpPost(sort: { fields: [date], order: DESC }, limit: 5) {
        nodes {
          excerpt
          uri
          featuredImage {
            node {
              altText
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: TRACED_SVG
                    layout: FULL_WIDTH
                  )
                }
              }
            }
          }

          date(formatString: "MMMM DD, YYYY")
          title
          excerpt
          id
        }
      }
    }
  `)

  const postsCarrousel = data.nodes
  
  console.log("posts do carrousel ", postsCarrousel)
  return (
    <Carousel>
      {postsCarrousel.map(post => {
        return (
          <Carousel.Item key={post.id}>
            {post?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData && (
              <GatsbyImage
                image={post?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData}
                alt={post?.featuredImage?.node?.alt || ''}
                style={{ marginBottom: 50 }}
              />
            )}
            <p>{post.title}</p>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
export default PostCarrousel
