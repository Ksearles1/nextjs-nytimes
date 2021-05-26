import Link from 'next/Link'

import styles from './button.module.scss'
export default function Button({ label, path }){
   
    return(
        <a href="/" className={styles.btn} >
       {label}
       </a>
    )
}