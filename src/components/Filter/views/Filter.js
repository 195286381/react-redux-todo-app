import React from 'react'
import Link from './Link'

const Filter = () => (
    <div>
        <Link filter='all'>all</Link>
        <Link filter='completed'>completed</Link>
        <Link filter='todo'>todo</Link>
    </div>
)

export default Filter