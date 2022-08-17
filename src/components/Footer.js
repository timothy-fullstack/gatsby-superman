import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
        <div className='container footer'>
            <p>Copyright Superman 2022</p>
            <div className='social-media'>
                <a href='https://www.facebook.com' target="_blank" rel="noreferrer"><AiFillFacebook  alt="facebook-icon"/></a>
                <a href='https://www.instagram.com' target="_blank" rel="noreferrer"><AiFillInstagram alt="instagram-icon"/></a>
                <a href='https://www.twitter.com' target="_blank" rel="noreferrer"><AiOutlineTwitter alt="twitter-icon"/></a>
            </div>
        </div>
        

    </footer>
  )
}
