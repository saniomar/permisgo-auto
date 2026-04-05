import React from 'react'

import supportCss from "../styles/support.module.css"

const Support = ({title, headPara, mainContent}) => {
  return (
    <>
      <div className={supportCss.support_first}>
        <div className="container">
          <div className="text-center">
            <h1>{title}</h1>
            <p>{headPara}</p>
          </div>
        </div>
      </div>

      <div className={supportCss.support_second}>
        <div className="container-fluid">
            <span>
              {mainContent}
            </span>
        </div>
      </div>
    </>
  )
}

export default Support