import React from 'react'
import Link from 'next/link'

export default function DropDownContent({content}) {
  return (
      <div>
          <ul>
              {
                  content.map((item) => {
                      return (
                          <li><Link href={"/"+item.toLowerCase()}>{item}</Link></li>
                      )
                      
                  })
                  
             }
         </ul>
    </div>
  )
}
