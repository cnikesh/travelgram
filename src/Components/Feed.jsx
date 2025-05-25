import React from 'react'
import SharePost from './SharePost'
import Posts from './Posts'
import image1 from "/post-images/1.jpg"
import image2 from "/post-images/2.jpg"
import image3 from "/post-images/3.jpg"
import image4 from "/post-images/4.jpg"
import image5 from "/post-images/5.jpg"
import image6 from "/post-images/6.jpg"
import image7 from "/post-images/7.jpg"
import image8 from "/post-images/8.jpg"

import friend1 from "/friends/friend-1.jpg"
import friend2 from "/friends/friend-2.jpg"
import friend3 from "/friends/friend-3.jpg"
import friend4 from "/friends/friend-4.jpg"
import friend5 from "/friends/friend-5.jpg"



const Feed = () => {
  return (
    <div className='flex flex-[2] flex-col items-center justify-center gap-3 px-3'>
        <SharePost/>
        <Posts image={image1} friend={friend1} name="Jason"/>
        <Posts image={image2} friend={friend2} name="Sam"/>
        <Posts image={image3} friend={friend3} name="Clara"/>
        <Posts image={image4} friend={friend4} name="Rio"/>
        <Posts image={image5} friend={friend5} name="Jenny"/>
        <Posts image={image6} friend={friend3} name="Clara"/>
        <Posts image={image7} friend={friend1} name="Jason"/>
        <Posts image={image8} friend={friend2} name="Sam"/>

    </div>
  )
}

export default Feed