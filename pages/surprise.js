import { useRouter } from 'next/router'
import ConfettiCanvas from 'react-confetti-canvas';

function click() {

}

export default function Surprise() {
    const router = useRouter();
    console.log(router.query);
    
    let name = router.query.name;
    if(name == null) name = "דפנה";
    
    let password = router.query.password;
    if(password != null) {


        let input;

        const handleClick = (e) => {
            const { value } = e.target.previousElementSibling;
            if(value == password) router.push(`/surprise?name=${name}`)    
            e.preventDefault();
        }

        return (<>
        הזן סיסמא:
        <input type="text"/>
        <button onClick={handleClick}>התחבר</button>
        </>)

    } else
    return (<>
        <marquee>
        <h1>
            {name} היקרה
        </h1>
        <p>אני רוצה להודיע לך שאני נפרד ממך, הכוס שלך משעמם</p>
        </marquee>
        <ConfettiCanvas />
    </>)
}