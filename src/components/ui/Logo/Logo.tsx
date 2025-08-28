import cx from 'classnames'
import { Href } from 'components/navigation'
import VkbetLogo from '@/images/vkbet.svg' // 👈 adjust the path if needed

type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <img
        src={VkbetLogo}
        alt="VKBET Logo"
        className="h-8 w-auto" // you can change h-8 to any Tailwind size
      />
    </Href>
  )
}

export default Logo
