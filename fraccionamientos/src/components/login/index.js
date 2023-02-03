import styles from "./login.module.css"
export default function Login(){
    return(
        <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>
            <h2>Login</h2>
            <div className="underline-title"></div>
          </div>
          <form method="post" className="form">
            <label htmlFor="user-email" style={{paddingTop:'13px'}}>
                &nbsp;Email
              </label>
            <input id="user-email" className="form-content" type="email" name="email" autoComplete="on" required />
            <div className="form-border"></div>
            <label htmlFor="user-password" style={{paddingTop:"22px"}}>&nbsp;Password
              </label>
            <input  id="cser-password" className="form-content" type="password" name="password" required />
            <div className="form-border"></div>
            {/* <a href="#">
              <legend className={styles.forgotPass}>Forgot password?</legend>
            </a> */}
            <input  type="submit" name="submit" value="LOGIN" />
            {/* className="submit-btn" */}
            {/* <a href="#" className="signup">?</a> */}
          </form>
        </div>
      </div>
    )

}