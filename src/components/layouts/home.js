import React from 'react'
import { Navb } from '../navbar'
import { Footer } from '../footer'

export const HomeLayout = ({children}) => {
  return (
    <>
        <Navb/>
        {children}
        <Footer/>

    </>
  )
}
