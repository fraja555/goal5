import cx from 'classnames'
import { Href } from 'components/navigation'
import VkbetLogo from './vkbet.svg'

type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <img
        src={VkbetLogo}
        alt="VKBET Logo"
        className="h-8 w-auto"
      />
    </Href>
  )
}

export default Logo
