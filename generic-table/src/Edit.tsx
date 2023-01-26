import React from 'react'
import { Link } from 'react-router-dom';

const Edit = ({data}:any) => {
    console.log(data)
  return (
    <div>
    <Link to="/">
    <button>Back</button>
    </Link>
    </div>
  )
}

export default Edit