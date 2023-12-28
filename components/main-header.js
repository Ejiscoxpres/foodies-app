import Link from 'next/link';
import logoImg from '../assets/logo.png';

export default function MainHeader(){
    return(
        <header>
        <Link href="/">
            <img src={logoImg.src} alt='A plate with food on it' />
            NEXT LEVEL FOOD
        </Link>

        <nav>
            <ul>
                <li>
                    <Link href="/community">Foodies Commmunity</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}