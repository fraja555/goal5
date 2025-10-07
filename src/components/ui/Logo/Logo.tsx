import cx from 'classnames'

import { Href } from 'components/navigation'


type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <img
        src="/images/logo1.webp"
        alt="Logo"
        className="h-full w-auto"
      />
    </Href>
  )
}

export default Logo
