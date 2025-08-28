import cx from 'classnames'
import { Href } from 'components/navigation'

type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <img
        src="https://vkbet.xyz/images/vkbet.svg"
        alt="VKBET Logo"
        className="h-8 w-auto" // adjust height as you like
      />
    </Href>
  )
}

export default Logo
