import { Link } from "gatsby"
import React from "react"
import Container from "../ui/Container"
import * as styles from "./styles.module.scss"
const PostsGrid = ({ posts }) => {
  console.log('posts:',posts)
  const postsToDisplay = posts.slice(0,6);
  return (
    <Container>
      <div className={styles.titleContainer}>
        <h2 className={styles.titleContainer__title}>Talk of the town!</h2>
      </div>
      <div className={styles.postsGrid}>
        {postsToDisplay.map((post)=>{
          return(
            <article
            key={post.id}
            className={styles.post}
            style={{
              background: `url(${post?.featuredImage?.node?.sourceUrl}) no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className={styles.postShadow}></div>
            <div className={styles.postInformationContainer}>
              <Link className={styles.category}>Category</Link>
              <Link to={post.uri}><h2 className={styles.title}>{post.title}</h2></Link>
              <div className={styles.postMetadata}>
                <Link className={styles.authorDate}>
                <span>{post?.author?.node?.firstName}, {post?.date}</span>
                </Link>
                <Link>
                  Comments {post?.commentCount || 0}
                </Link>
              </div>
            </div>
          </article>
          )
        })}
        

        
      </div>
    </Container>
  )
}

export default PostsGrid
