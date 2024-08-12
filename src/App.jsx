import styles from "./style"



const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden" >
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.boxWidth}`} >
          navbar
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>HERO</div>
      </div>

      <div className={` bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} `}>
          stats 
          buissenss
          billing 
          card deel
          testimonials 
          client 
          CTA 
          footer
        </div>
      </div>

    </div>
  )
}

export default App