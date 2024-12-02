import React from 'react'
import { ColorRing } from 'react-loader-spinner'

function Loader() {
  return (
    <div className='flex items-center justify-center'>

<ColorRing
  visible={true}
  height="100"
  width="100"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['Red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']}
  />

    </div>
  )
}

export default Loader