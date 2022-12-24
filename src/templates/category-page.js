import { Link, graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
const CategoryPage = ({data, pageContext})=> {
    const posts = data.allWpPost.edges
    console.log('olha os posts', posts)
    return (
        <Layout>
            <div>{pageContext.name}</div>
            {posts.map(({post}) =>{
                {console.log('esse eh o post',post)}
                return(
                    <div>
                        <h2>{post.title}</h2>
                        <Link to={post.uri}>{post.title}</Link>
                    </div>
                )
            })}
            
        </Layout>
    )
}
export default CategoryPage
export const pageQuery = graphql`
query MyQuery($slugCategory: String){
    allWpPost(filter: 
      {categories: 
        {nodes: 
          {elemMatch: 
            {slug: 
              {eq: $slugCategory}
            }
          }
        }
      }) {
      edges {
        post: node {
          title
          id
          uri
          categories{
            nodes{
              name
            }
          }
        }
      }
    }
  }
`