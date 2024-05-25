import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16.258a4 4 0 1 0 0-7.999 4 4 0 0 0 0 8Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M3 16.258v-8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.5 6.768.01-.01"
    />
  </svg>
)
const Memo = memo(SvgComponent)
export { Memo as InstagramIcon }
