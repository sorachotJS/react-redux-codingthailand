import { useEffect, useState } from "react";

type AppHeaderProps = {
    title:string,
    year?: number
}

function AppHeader({ title, year }: AppHeaderProps) {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        console.log('use effect AppHeader และทุกครั้งที่ re render')
    })

    useEffect(() => {
        console.log('use effect AppHeader 2 and only 1 time')
    }, [])

    useEffect(() => {
        console.log('use effect AppHeader 3')
    }, [isShow])

    const mouseOver = () => {
        setIsShow(!isShow)
    }

    return(
        <>
         <h1 onMouseOver={mouseOver}>{title} {year}</h1>
         {
            isShow && <p>Hello App Header</p>
         }
        
        </> 
       
     );
}

export default AppHeader;