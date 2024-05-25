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
      fill="currentColor"
      d="m20.133 20.106-5.869-9.223 5.791-6.37a.75.75 0 0 0-1.11-1.01L13.43 9.572 9.633 3.606A.75.75 0 0 0 9 3.258H4.5a.75.75 0 0 0-.633 1.153l5.87 9.223-5.792 6.375a.75.75 0 1 0 1.11 1.008l5.516-6.067 3.796 5.965a.75.75 0 0 0 .633.343h4.5a.75.75 0 0 0 .633-1.152Zm-4.721-.348-9.546-15h2.719l9.55 15h-2.723Z"
    />
  </svg>
)
const Memo = memo(SvgComponent)
export { Memo as XIcon }
