
import Image from 'next/image'
import styles from'@/styles/Header.module.css'

export default function Header() {
  return (
    <>
     <div className={styles.header}>
      <div className={styles.main}>
        <div className={styles.logo}>
        <a href="#logo"> <Image src="/surface1899.svg" alt="Logo" width={21} height={21}/></a>
        <a href="#SaudiCalendar"><hr></hr></a>
        <a href="#logo"> <Image src="/Group 13.svg" alt="Logo" width={159} height={43}/></a>
        </div>
        <div className={styles.menu}>
        <a href="#See&Do">Tasks</a>
        <a href="#PlanYourTrip">Manage Assets</a>
        <a href="#TravelEssentials">Manage Users</a>
        <a href="#SaudiCalendar">Manage Support Requests</a>
        <a href="#SaudiCalendar">Contact</a>
        </div>
        <div className={styles.auth}>
        <a href="#search"><button>Hi, Abdullah! <span>3</span></button></a>
        <a href="#SaudiCalendar"><Image src="/pexels-chevanon-photography-1108117.jpg" alt="Logo" width={42} height={42} style={{borderRadius:"50%"}}/></a>
        
        </div>
      </div>
      
      
      </div>
    </>
  )
}
