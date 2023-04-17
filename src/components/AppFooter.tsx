import { useState } from "react"

type User = {
    fullname: string
}

const AppFooter = () => {
    const isShow = false
    const [company , setCompany] = useState('Dong JS')
    const [user, setUser] = useState<User | null>(null);

    const showMsg = () => {
        // alert('TypeScript!')
        setCompany('Reacr JS')
        setUser({fullname: 'Dong JS'})
    }
    return ( 
        <>
        {
              user && <p>User: {user.fullname}</p>  
        }
        <br />
        <button onClick={showMsg}>Click Me!</button>
        <hr />
         <p>created by {company}</p>
         <p>sorachot jaisat</p>
         {
            isShow && <p>Hello React!!</p>
         }
        </>
       
     );
}
 
export default AppFooter;