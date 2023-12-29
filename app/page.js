import Link from 'next/link';

import ImageSlideshow from '../components/images/image-slideshow';
import classes from './page.module.css'

export default function Home() {
  return (
   <>
    <header className={classes.show}>
      <div className={classes.slideshow}>
       <ImageSlideshow />

      </div>
      <div className={classes.hero}>
        <h1>NEXTLEVEL Food For NEXTLEVEL Foodies</h1>
        <p>Taste & share meals aruond the globe</p>
      </div>
      <div className={classes.cta}>
        <Link href='/community'>Link with the Community</Link>
        <Link href='/meals'>Scrutinize meals</Link>
      </div>
    </header>
    <main>
    <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </main>
   </>
  );
}