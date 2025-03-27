import { motion } from 'framer-motion';
import './styles.css';
import ListItem from '../../../entity/list-item';
import { bookingList } from '../../../utils/home';
import booking from '../../../assets/home/booking-bg.png';

const transition = { duration: 10, repeat: Infinity, repeatDelay: 0, repeatType: "reverse" as const, ease: "easeInOut" }

export default function Booking() {
  return <div className='relative mt-[92px]'>
    <div className='absolute z-0 flex justify-center items-center left-1/2 -translate-x-1/2'>
      <svg width="1215" height="565" viewBox="0 0 1215 565" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          initial={{ pathLength: 0.001, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={transition}
          d="M -21.5,161.48 C 116.5,-78.02 402.098,-2.87561 529.0,97.48 C 627.0,174.98 610.5,165.28 844.5,156.48 C 1137.0,145.48 1193.0,141.877 1193.0,201.48 C 1193.0,266.31 1055.02,218.584 963.659,234.922 C 947.146,237.875 930.34,240.191 913.731,237.838 C 809.568,223.075 662.302,207.513 654.0,302.98 C 644.908,407.543 765.197,399.003 843.763,391.571 C 858.414,390.184 873.056,392.517 887.557,395.026 C 989.279,412.621 1196.5,353.79 1196.5,422.48 C 1196.5,454.98 1174.0,478.08 1054.0,474.48 L 718.5,474.48 C 634.0,463.98 634.0,573.48 763.0,561.98 L 1214.5,547.48" 
          stroke="#FFE1C3" 
          strokeWidth="3" 
          strokeDasharray="10,20"
        />
      </svg>
      <motion.div 
        className='plane'
        initial={{ offsetDistance: "0%", opacity: 0 }}
        animate={{ offsetDistance: "100%", opacity: 1 }}
        transition={transition}
      />
    </div>
    <div className='container flex relative z-10'>
      <img src={booking} alt="booking" width={586.79} height={582} />
      <div className='w-full ml-[41px]'>
        <h2 className='text-[48px] font-semibold leading-[100%] text-[#1C1C1C]'>
          Этапы Бронирования
        </h2>
        <div className='flex flex-col gap-5 mt-[74px] pl-[26px]'>
        {
          bookingList.map((item, index) => (
            <ListItem key={index} className={`${index % 2 !== 0 ? 'ml-12' : ''}`} icon={item.icon} text={item.text} />
          ))
        }
        </div>
      </div>
    </div>
  </div>
}
