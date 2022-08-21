const Message = ({ width, height, color }) => (
  <svg
    width={24 || width}
    height={24 || height}
    viewBox='0 0 24 24'
    fill='none'
    stroke={'#7A7A7A' || color}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default Message;
