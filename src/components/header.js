import React from 'react'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-container1">
        <a href={props.link_text} target="_blank" rel="noreferrer noopener">
          {props.text}
        </a>
        <a
          href={props.link_text1}
          target="_blank"
          rel="noreferrer noopener"
          className="header-link1"
        >
          {props.text2}
        </a>
      </div>
    </div>
  )
}

Header.defaultProps = {
  link_text: 'https://example.com',
  link_text1: 'https://example.com',
  text: 'Home',
  text2: 'Logout',
}

Header.propTypes = {
  link_text: PropTypes.string,
  link_text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default Header
