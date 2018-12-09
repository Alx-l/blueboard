/* tslint:disable: max-line-length */

import * as React from 'react'

export const Add = (color: string) => (
  <svg
    fill={color}
    style={{ display: 'block' }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>
)

export const Minus = (color: string) => (
  <svg
    fill={color}
    style={{ display: 'block' }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19,13H5V11H19V13Z" />
  </svg>
)

export const Close = (color: string) => (
  <svg
    fill={color}
    style={{ display: 'block' }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
  </svg>
)

export const Play = () => (
  <svg viewBox="0 0 59 59">
    <g opacity=".6" transform="translate(-691 -406)">
      <circle
        cx="29.5"
        cy="29.5"
        fill="#323969"
        r="29.5"
        transform="translate(691 406)"
      />
      <path d="M731 435.5l-17 9.5v-19z" fill="#f4f5f7" />
    </g>
  </svg>
)
