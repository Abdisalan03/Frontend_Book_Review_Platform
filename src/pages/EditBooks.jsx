import React, { useEffect } from 'react'
import Editbooks from '../components/EditBooks'
// import EditBooks from '../components/EditBooks'

function EditBooks() {


  return (
    <div className='flex bg-[#f6f6f6]'>

        <div className='mt-[72px] md:m-[70px] md:ml-[210px] ml-[0px] h-100vh w-full md:p-11 p-3 flex flex-col gap-2'>
            <div className='flex flex-col'>
                <h3 className='font-bold text-xl text-[#00befe]'>Edit Books</h3>
                <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
            </div>
            {/* content */}
            <Editbooks/>
        </div>
    </div>
  )
}

export default EditBooks