import React from 'react'
import "./BlogArea.css"

function BlogPosts() {
  return (
    <div className='blogPosts'>
        
            <section className="cards-wrapper">
            <div className="card-grid-space">

                <div className="card" style={{backgroundImage: 'url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg)'}}>
                <div>
                    <h1>HTML Syntax</h1>
                    <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
                    <div className="date">6 Oct 2017</div>
                    <div className="tags">
                    <div className="tag">HTML</div>
                    </div>
                </div>
                </div>
            </div>
            <div className="card-grid-space">

                <div className="card" style={{backgroundImage: 'url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg)'}}>
                <div>
                    <h1>Basic types of HTML tags</h1>
                    <p>Learn about some of the most common HTML tags…</p>
                    <div className="date">9 Oct 2017</div>
                    <div className="tags">
                    <div className="tag">HTML</div>
                    </div>
                </div>
                </div>
            </div>

            <div className='blogItemGrp'>
                <div className=' blogItm text-blue-900  leading-relaxed cursor-pointer hover:bg-slate-600 hover:text-white'>
                    <h2 className='text-blue-400 text-2xl mb-4 font-bold'>
                        Wealth
                    </h2>
                    <p>
                        EastDale Finance wealth management at its best.
                    </p>
                </div>
                <div className=' blogItm text-blue-900  leading-relaxed cursor-pointer hover:bg-slate-600 hover:text-white'>
                    <h2 className='text-blue-400 text-2xl mb-4 font-bold'>
                        Account
                    </h2>
                    <p>
                        Personal Online and Private Banking with Samson and Barkley Cooperatives.
                    </p>
                </div>
                <div className=' blogItm text-blue-900  leading-relaxed cursor-pointer hover:bg-slate-600 hover:text-white'>
                    <h2 className='text-blue-400 text-2xl mb-4 font-bold'>
                        Payment
                    </h2>
                    <p>
                        Easy transfer of funds between local and foreign accounts.
                    </p>
                </div>
                <div className=' blogItm text-blue-900  leading-relaxed cursor-pointer hover:bg-slate-600 hover:text-white'>
                    <h2 className='text-blue-400 text-2xl mb-4 font-bold'>
                        Commodities
                    </h2>
                    <p>
                        Real time stock market analysis on the go.
                    </p>
                </div>
            </div>
            
            
        </section>    

    </div>
  )
}

export default BlogPosts