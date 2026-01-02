
// src/app/(general)/layout.js

import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const GeneralLayout = ({children}) => {
  return (
    <>
        <Header />

        <main className="min-h-[calc(100vh)]"> 
            {children}
        </main>

        <Footer />
    </>
  )
}

export default GeneralLayout
