import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hooks";
import { selectAuthState, updateProfileAction } from "../redux-toolkit/auth/auth-slice";

function AboutPage() {
  const {profile,email} = useAppSelector(selectAuthState)
  const dispatch = useAppDispatch()
  const updateProfile = () => {
    dispatch(updateProfileAction())
  }
    return ( 
        <>
          <h1>About Page</h1>
          <h3>{profile} : {email}</h3>
          <button onClick={updateProfile}>Update Profile</button>
          <Link to={'/'}>Back to Home</Link>
        </>
     );
}

export default AboutPage;