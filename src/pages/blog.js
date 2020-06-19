import React from 'react'
import Layout from '../components/Layout'

import styles from '../components/blog.module.css'

function blog() {
  return (
    <>
      <Layout>
        <div className={styles.page}>
          <h1>Blog page</h1>
          <p className={styles.text}>lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text </p>
          <p>lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text lipsum text </p>
        </div>
      </Layout>
    </>
  )
}

export default blog
