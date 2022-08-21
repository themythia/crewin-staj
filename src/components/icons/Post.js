const Post = ({ width, height, color }) => (
  <svg
    width={24 || width}
    height={24 || height}
    viewBox='0 0 24 24'
    fill='none'
    stroke={'#7A7A7A' || color}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16 2H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6V8c0-4-2-6-6-6Z'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 9.5h10m-10 5h7'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default Post;
