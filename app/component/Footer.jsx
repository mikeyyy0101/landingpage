import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const features = [
        {
            title:'Plan',
            link:'',
        },
        {
            title:'Build',
            link:'',
        },
        {
            title:'Insights',
            link:'',
        },
        {
            title:'Customer Requests',
            link:'',
        },
        {
            title:'Linear Asks',
            link:'',
        },
        {
            title:'Security',
            link:'',
        },
        {
            title:'Mobile',
            link:'',
        },
    ]

    const features2 = [
        {
            title:'Pricing',
            link:'',
        },
        {
            title:'Method',
            link:'',
        },
        {
            title:'Integrations',
            link:'',
        },
        {
            title:'Changelog',
            link:'',
        },
        {
            title:'Documentation',
            link:'',
        },
        {
            title:'Download',
            link:'',
        },
        {
            title:'Switch',
            link:'',
        },
    ]

    
    const features3 = [
        {
            title:'About',
            link:'',
        },
        {
            title:'Customers',
            link:'',
        },
        {
            title:'Careers',
            link:'',
        },
        {
            title:'Blogs',
            link:'',
        },
        {
            title:'README',
            link:'',
        },
        {
            title:'Quality',
            link:'',
        },
        {
            title:'Brand',
            link:'',
        },
    ]

    
    const features4 = [
        {
            title:'Developers',
            link:'',
        },
        {
            title:'Status',
            link:'',
        },
        {
            title:'Startups',
            link:'',
        },
        {
            title:'Report vulnerability',
            link:'',
        },
        {
            title:'DPA',
            link:'',
        },
        {
            title:'Privacy',
            link:'',
        },
        {
            title:'Terms',
            link:'',
        },
    ]

    
    const features5 = [
        {
            title:'Contact us',
            link:'',
        },
        {
            title:'Community',
            link:'',
        },
        {
            title:'X (Twitter)',
            link:'',
        },
        {
            title:'Github',
            link:'',
        },
        {
            title:'Youtube',
            link:'',
        },
    ]
  return (
 <footer className="sm:px-8 grid sm:grid-cols-3 md:flex md:justify-center py-20 gap-10 border-t border-white/10 md:gap-20">
        <div> 
            <h1>Features</h1>
            {features.map((feature, index)=>(
                <div key={index}>
                  <Link href='/customer'>
                  <button className='cursor-pointer hover:text-white duration-200 mt-2 text-white/40'>{feature.title}</button>
                  </Link>  
                </div>      
            ))} 
        </div>

        <div>
            <h1>Product</h1>
            {features2.map((feature2, index2)=>(
                <div key={index2}>
                  <Link href='/customer'>
                  <button className='cursor-pointer hover:text-white duration-200 mt-2 text-white/40'>{feature2.title}</button>
                  </Link>  
                </div>      
            ))} 
        </div>

        <div>
            <h1>Company</h1>
            {features3.map((feature3, index3)=>(
                <div key={index3}>
                  <Link href='/customer'>
                  <button className='cursor-pointer hover:text-white duration-200 mt-2 text-white/40'>{feature3.title}</button>
                  </Link>  
                </div>      
            ))} 
        </div>

        <div>
            <h1>Resources</h1>
            {features4.map((feature4, index4)=>(
                <div key={index4}>
                  <Link href='/customer'>
                  <button className='cursor-pointer hover:text-white duration-200 mt-2 text-white/40'>{feature4.title}</button>
                  </Link>  
                </div>      
            ))} 
        </div>

        <div>
            <h1>Connect</h1>
            {features5.map((feature5, index5)=>(
                <div key={index5}>
                  <Link href='/customer'>
                  <button className='cursor-pointer hover:text-white duration-200 mt-2 text-white/40'>{feature5.title}</button>
                  </Link>  
                </div>      
            ))} 
        </div>
    </footer>
  )
}

export default Footer