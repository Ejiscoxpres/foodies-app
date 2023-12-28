import Link from 'next/link';
import Image from 'next/image';

import logoImg from '../assets/logo.png';
import classes from './main-header.module.css';


export default function MainHeader(){
    return(
        <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={logoImg.src}  width={500}
        height={500} alt='A plate with food on it' />
            NEXT LEVEL FOOD
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                <Link href="/meals">Browse meals</Link>
                    <Link href="/community">Foodies Commmunity</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}