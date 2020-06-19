import React from "react"
import Layout from '../components/Layout'
import { ExampleButton } from '../components/Button'

function Home() {
  return (
    <>
      <Layout>
        <h1 style={{ color: 'red', textTransform: "uppercase" }}>Hello from Gatsby</h1>
        <h1>Hello world</h1>
        <ExampleButton>click me</ExampleButton>
      </Layout>
    </>
  )
}

export default Home;