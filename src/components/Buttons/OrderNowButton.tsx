"use client"
import React from 'react'
import { Icon } from '..'

const OrderNowButton = () => {
  return (
    <button className='btn btn-sm cursor-pointer'>
      <Icon iconName='fa-phone' size={20}/>
      Order Now
    </button>
  )
}

export default OrderNowButton