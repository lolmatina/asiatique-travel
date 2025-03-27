import { motion } from 'framer-motion';
import { useState } from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ children, variant = 'primary', className }: ButtonProps) {
  const [buttonState, setButtonState] = useState<'initial' | 'hover' | 'clicked'>('initial');

  const ball_initial = {
    top: 4,
    right: 4,
    bottom: 4,
    left: 'auto',
    backgroundColor: variant === 'primary' ? '#111111' : '#ECB914',
    color: variant === 'primary' ? '#fff' : '#111111',
  }

  const ball_hover = {
    top: 4,
    bottom: 4,
    left: 4,
    right: 'auto',
    backgroundColor: '#fff',
  }

  const ball_clicked = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  }

  const button_initial = {
    backgroundColor: variant === 'primary' ? '#fff' : 'rgba(217, 217, 217, 0.29)',
    border: variant === 'primary' ? 'none' : '1px solid #fff',
    paddingLeft: '35px',
    paddingRight: '51px',
    color: variant === 'primary' ? '#111111' : '#fff',
  }

  const button_hover = {
    backgroundColor: '#111111',
    paddingLeft: '51px',
    paddingRight: '35px',
    color: '#fff',
  }

  const button_clicked = {
    backgroundColor: '#fff',
    paddingLeft: '43px',
    paddingRight: '43px',
    color: '#111111',
    transition: {
      delay: 0.1,
    }
  }

  return <motion.button 
  animate={buttonState === 'hover' ? button_hover : buttonState === 'clicked' ? button_clicked : button_initial}
  transition={{ duration: 0.4 }}
  onMouseEnter={() => setButtonState('hover')}
  onMouseLeave={() => setButtonState('initial')}
  onClick={() => setButtonState('clicked')}
  className={`
    pl-[35px] pr-[51px] inline-flex w-auto items-center rounded-[19.24px] relative h-[38px] overflow-hidden
    ${className}`}
  >
    <span className="z-10 text-[12.58px] font-[500] leading-[12.58px] relative">{children}</span>
    <motion.div 
      animate={buttonState === 'hover' ? ball_hover : buttonState === 'clicked' ? ball_clicked : ball_initial}
      transition={{ duration: 0.3 }}
      className="absolute w-[30px] h-[30px] rounded-full flex items-center justify-center">
        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M5.8616 1.77819L0.189772 7.53324C0.108837 7.61537 0.0649801 7.7274 0.0678497 7.8447C0.070719 7.962 0.120079 8.07496 0.205072 8.15872C0.290065 8.24248 0.403729 8.29019 0.521058 8.29135C0.638387 8.29251 0.74977 8.24703 0.830705 8.16491L6.50253 2.40985L6.61349 6.97145C6.61636 7.08889 6.66579 7.20199 6.75089 7.28586C6.83599 7.36973 6.94979 7.4175 7.06727 7.41867C7.18475 7.41983 7.29627 7.37429 7.37731 7.29206C7.45835 7.20983 7.50226 7.09766 7.49939 6.98021L7.36169 1.35092C7.36034 1.29274 7.34752 1.23501 7.32397 1.18103C7.30042 1.12705 7.2666 1.07788 7.22445 1.03634C7.1823 0.994795 7.13264 0.961696 7.07832 0.938935C7.024 0.916175 6.96609 0.9042 6.90791 0.903698L1.27721 0.848012C1.15973 0.84685 1.0482 0.892392 0.967166 0.974618C0.886129 1.05685 0.842216 1.16902 0.845089 1.28647C0.847962 1.40392 0.897385 1.51702 0.982485 1.60089C1.06759 1.68476 1.18139 1.73253 1.29887 1.73369L5.8616 1.77819Z" 
          fill={buttonState === 'initial'? (variant === 'primary' ? '#fff' : '#111') : buttonState === 'hover'? '#111': 'transparent'}
        />
        </svg>
      </motion.div>
  </motion.button>;
}

