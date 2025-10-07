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
        src="/images/logo2.png"
        alt="Logo"
        className="h-full w-auto max-h-full object-contain"
      />
    </Href>
  )
}

export default Logo
