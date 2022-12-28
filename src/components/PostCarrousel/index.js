import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import Container from "../ui/Container"
import parse from "html-react-parser"
const PostCarrousel = ({ posts }) => {
  return (
    <Container>
      <Carousel variant="dark">
        {posts.map(post => {
          return (
            <Carousel.Item key={post.id}>
              {post?.featuredImage?.node?.localFile?.childImageSharp
                ?.gatsbyImageData && (
                <GatsbyImage
                  image={
                    post?.featuredImage?.node?.localFile?.childImageSharp
                      ?.gatsbyImageData
                  }
                  alt={post?.featuredImage?.node?.alt || ""}
                  style={{ marginBottom: 50 }}
                />
              )}
              <Carousel.Caption>

              <h2>{post.title}</h2>
              <section itemProp="description">{parse(post.excerpt)}</section>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </Container>
  )
}
export default PostCarrousel
