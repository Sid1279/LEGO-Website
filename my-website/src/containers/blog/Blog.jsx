import React from 'react'
import "./blog.css"
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const 
Blog = () => {
  return(
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening in the LEGO world, <br />Here are some interesting articles.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2022" text="The Top 10 Biggest LEGO® Sets Ever." link = "https://www.lego.com/en-us/categories/adults-welcome/article/biggest-lego-sets-ever-made" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="March 15, 2023" text="Best LEGO® sets for adults." link = "https://www.livescience.com/best-lego-sets-for-adults" />
          <Article imgUrl={blog03} date="Jul 10, 2011" text="The History and Evolution of the LEGO® Minifigure" link = "https://www.toys2remember.com/2010/11/lego-minifigure-history.html" />
          <Article imgUrl={blog04} date="Feb 04, 2022" text="The evolution of minifigure heads" link = "https://brickset.com/article/70590/the-evolution-of-minifigure-heads" />
          <Article imgUrl={blog05} date="Nov 2, 2021" text="The Best LEGO® Sets for Kids" link = "https://www.nytimes.com/wirecutter/reviews/best-lego-sets-for-kids/" />
        </div>
      </div>
    </div>
  )
}

export default 
Blog