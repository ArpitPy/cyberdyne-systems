import React from 'react'
import styles from '@/app/styles/services.module.css'
import Link from 'next/link'

function Services() {
  return ( 
    <div className={styles.services_main}>
        <div className={styles.heading}>Our Services</div>
        <div className={styles.cards}>
            <Link style={{ textDecoration: 'none' }} href="/hypernode-portal"><div className={styles.cardone}>Hypernode Portal</div></Link>
            <Link style={{ textDecoration: 'none' }} href="/cyberstrike-mercs"><div className={styles.cardtwo}>Cyberstrike Mercs</div></Link>
            <Link style={{ textDecoration: 'none' }} href="/bytevault-holdings"><div className={styles.cardthree}>Bytevault Holdings</div></Link>
        </div>
    </div>
  )
}

export default Services