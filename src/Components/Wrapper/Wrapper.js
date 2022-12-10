import React from 'react'

const Wrapper = (props) => {
  return (
    <div className='dashboard-right'>{props.children}</div>
  )
}

export default Wrapper