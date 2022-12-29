import React from 'react'
import Layout from '../components/layout'
const Page = ({pageContext}) => {
    return(
        <Layout>
            <h2>{pageContext.title}</h2>
        </Layout>
    )
}
export default Page