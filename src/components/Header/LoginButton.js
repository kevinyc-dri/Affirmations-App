import React, { useContext, useEffect } from 'react'
import firebase from 'firebase'
import { UserAuthContext } from '../../App'

firebase.initializeApp({
  apiKey: "AIzaSyAfgwKdSZnMnmB49PZzbRGL2t81a3sLbaM",
  authDomain: "affirmation-kevin.firebaseapp.com",
  projectId: "affirmation-kevin",
  storageBucket: "affirmation-kevin.appspot.com",
  messagingSenderId: "544486333402",
  appId: "1:544486333402:web:40c03063a41600a8577ee3"
})

function LoginButton() {
  const { user, setUser } = useContext(UserAuthContext)
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("user")))
  }, [])
  const clickHandler = () => {
    if (user) {
      setUser(null)
      localStorage.removeItem("user")
    } else {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(res => {
          setUser(res.user)
          localStorage.setItem("user", JSON.stringify(res.user))
        })
        .catch(err => alert(err))
    }
  }

  const style = (user)
    ? {
      backgroundImage: `url("${user.photoURL}")`,
      backgroundSize: "cover"
    }
    : {}

  return (
    <button style={style}
      className="login-button"
      onClick={() => clickHandler()}>
      {user ? '' : '#'}</button>
  )
}

export default LoginButton