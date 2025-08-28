import cx from 'classnames'

import { Href } from 'components/navigation'


type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <svg
        className="h-full"
        width="71"
        height="16"
        viewBox="0 0 71 16"
        xmlns="http://www.w3.org/2000/svg"
      >
       <path d="M0 0 C2.64 0 5.28 0 8 0 C7.67 1.32 7.34 2.64 7 4 C4.69 4 2.38 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#000305" transform="translate(68,33)"/>
      </svg>
    </Href>
  )
}

export default Logo
