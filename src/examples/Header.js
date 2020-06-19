import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
query FirstQuery
  {
    site {
      info:siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`

const Header = () => {

  const { site: { info: { title, person: { name } } } } = useStaticQuery(getData)

  // const data = useStaticQuery(getData);
  // let { title, description, author, person } = data.site.siteMetadata;

  return (
    <div>
      <h1>title: {title} </h1>
      <h1>name: {name}</h1>
    </div>
  )
}

export default Header
