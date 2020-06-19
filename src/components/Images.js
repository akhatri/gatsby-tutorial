import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import img from '../images/image-4.jpeg'
import Image from 'gatsby-image'

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "image-3.jpeg"}) {
    childImageSharp {
      fixed(width: 300, height: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "image-4.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`

const Images = () => {


  const data = useStaticQuery(getImages);

  console.log(data)

  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic image</h3>
        <img src={img} width="100%" />
      </article>
      <article className="single-image">
        <h3>Fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>Fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <div className="small">
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </div>
      </article>
    </section>
  )
}

export default Images
