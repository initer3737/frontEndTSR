import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
      <nav className='bg-purple-900 text-white p-2'> 
        <ul className='flex gap-3 p-3'>
          <li>
            <Link to={'/'}>
                <h5 className='hover:text-rose-400 transition-all delay-100'>home</h5>
            </Link>
          </li>
          <li>
            <Link to={'/create'}>
                <h5 className='hover:text-rose-400 transition-all delay-100'>create</h5>
            </Link>
          </li>
          <li>
            <Link to={'/update/'}>
                <h5 className='hover:text-rose-400 transition-all delay-100'>update</h5>
            </Link>
          </li>
        </ul>
      </nav>
  )
}
