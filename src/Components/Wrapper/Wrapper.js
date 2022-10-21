import React from 'react'

const Wrapper = (props) => {
    console.log(props.children);
  return (
    <div className='dashboard-right'>{props.children}</div>
  )
}

export default Wrapper