import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
  return (
    <div>
      <h2>{data.product.title}</h2>
      <h2>{data.product.price}</h2>
    </div>
  )
}

export default ComponentName


export const query = graphql`
  {
    product: contentfulProduct(slug: {eq: "sectional-sofa"}) {
      id
      title
      price
    }
  }
`
