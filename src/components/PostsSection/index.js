import React, { useState } from "react";
import Container from "../ui/Container";
import { Link } from "gatsby";
import * as styles from './styles.module.scss';
import arrow from '../../images/arrow.svg';
const PostSection = ({posts})=>{

  const [page, setPage] = useState(1);

  return (
    <Container>
      <div className={styles.postsSection}>
        <section className={styles.postsSection__section}>
          {posts.map(post => {
            return(
              <article className={styles.post}>
                <Link 
                  style={{
                    background: `url(${post?.featuredImage?.node?.sourceUrl}) no-repeat center`,
                    backgroundSize: "cover"}}
                  className={styles.post__image}
                  >
                </Link>
                <div>
                  <h2 className={styles.post__title}>{post.title}</h2>
                  
                </div>
              </article>
            )
          })}
        </section>
        <aside className={styles.postsSection__aside}>
          <div>
            <div className={styles.postsSection__aside__header}>
              <h3>Hot topics!</h3>
              <div>
                <span className={styles.postsSection__aside__arrow} onClick={()=> setPage(2)}>
                  <img 
                    style={{filter: page === 2 ? 'invert(99%) sepia(1%) saturate(5170%) hue-rotate(299deg) brightness(131%) contrast(88%)': ''}}
                    className={styles.left} 
                    src={arrow} 
                    alt=""
                  />
                </span>
                <span className={styles.postsSection__aside__arrow} onClick={()=>setPage(1)}>
                  <img 
                    style={{filter: page === 1 ? 'invert(99%) sepia(1%) saturate(5170%) hue-rotate(299deg) brightness(131%) contrast(88%)': ''}}
                    className={styles.right} 
                    src={arrow} 
                    alt=""/>
                </span>
              </div>
            </div>
            <div className={styles.postSliderContainer}>

              <div 
                className={styles.postSliderContainer__module1}
                style={{transform: page == 1? 'translate(0)': 'translate(-300px)',}}
                >
                {posts.slice(0,3).map(post =>(
                  <article className={styles.asidePost}>
                    <div
                      className={styles.asidePost__image}
                      style={{
                        background: `url(${post?.featuredImage?.node?.sourceUrl}) no-repeat center`,
                        backgroundSize: "cover"}}
                    ></div>
                    <p>{post.title}</p>

                  </article>
                ))}
              </div>
              <div 
                className={styles.postSliderContainer__module2}
                style={{transform: page == 1? 'translate(0)': 'translate(-300px)',}}
              >
              {posts.slice(3,6).map(post =>(
                  <article className={styles.asidePost}>
                  <div
                    className={styles.asidePost__image}
                    style={{
                      background: `url(${post?.featuredImage?.node?.sourceUrl}) no-repeat center`,
                      backgroundSize: "cover"}}
                  ></div>
                  <p>{post.title}</p>

                </article>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  )
}
export default PostSection