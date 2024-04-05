import React from 'react'
import Image from 'next/image';

function Footer() {
  return (
    <footer className='text-whitefooter border  border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent'>
        <div className='container flex justify-between items-center p-5'>
        <span className='text-primary'>Privacy Policy &nbsp;
Terms & Conditions
</span>
            <p className="text-slate-600">@All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;