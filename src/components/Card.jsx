import React from 'react'
import PropTypes from 'prop-types'

const Card = ({img}) => {
  return (
    <div>
      <div className="card m-2" style={{
          width: "18rem",
      }}>
          <img src={img}
              className="card-img-top" alt="ij" />
          <div className="card-body">

          </div>
      </div>
      </div>
  )
}

Card.propTypes = {
   img:PropTypes.string
}

export default Card

