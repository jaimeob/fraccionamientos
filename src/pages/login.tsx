
import styles from '@/styles/login.module.css'

export default function Home() {
  return (
    <>
       <div className={styles.login_container}>
        <form action="" className={styles.login_container_form}>
            <h1 className={styles.login_container_form_h1}>F</h1>
            <h2 className={styles.login_container_form_h2}>Inicia sesión con tu cuenta</h2>
            <input type="text" placeholder="Usuario"/>
            <input type="password" placeholder="Contraseña"/>
            <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </>
  )
}
