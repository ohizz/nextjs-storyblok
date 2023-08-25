import { fetchAllPosts } from '@/api'
import { InferGetServerSidePropsType } from 'next'
import React from 'react'
 
type Data = {
    allPost:any
}
export const Front = ({posts}: InferGetServerSidePropsType<typeof getStaticProps) => {

    console.log(posts)
return (
    <div>
        <h1 className="font-monospace">blog</h1>
    </div>
 )
 }

export const getStaticProps = async () => {
 const posts: Data = await fetchAllPosts();
 return {
  props: {
    posts,
 }
 }
}