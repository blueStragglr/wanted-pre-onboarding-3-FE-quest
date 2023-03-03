import React from 'react'
import { FormattedMessage } from 'react-intl'

const PageA = () => {
  return (
    <div>
      <h1>
        <FormattedMessage id={'page.PageA.description'} />
      </h1>
    </div>
  )
}

export default PageA
