import CarouselItems from '../co/CarouselItems'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.leftContent}>
        <h1 className={styles.bannerTitle}>
          Beauty
          <br /> Kit
        </h1>
        <p className={styles.bannerText}>
          Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo
        </p>
        <button className={styles.buyButton}>Buy Now</button>
      </div>
      <div className={styles.rightContent}>
        <CarouselItems />
      </div>
    </div>
  )
}

export default Banner
