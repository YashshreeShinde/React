import React from 'react'
import { Link } from 'react-router-dom';
// import { IconsMap } from './IconsMap';

const IconComponent = ({icon,link,...props}:any) => {
//  const Icon=IconsMap[icon];
  return (
    <Link to={link} state={{}}>
        {/* <Icon {...props}/> */}
    </Link>
  )
}

export default IconComponent