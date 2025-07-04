import { flexColIJCenter } from '@/styles/customStyle'
import React from 'react'
import { SyncLoader } from 'react-spinners'

function LoadingSpinner() {
  return (
    <div className={flexColIJCenter('w-full', 'p-8')}>
      <SyncLoader color="#3b83f6" />
    </div>
  )
}

export default LoadingSpinner
