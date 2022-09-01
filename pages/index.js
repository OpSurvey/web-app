import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <header>
      <navbar>
        <div>
          <img/>
        </div>
        <button>Empieza ahora</button>
      </navbar>
    </header>

    <main>
      <section>
        <section name='firsthView'>
          <article name='presentationCard'>
            <h1>Agiliza tus cotizaciones</h1>
            <p></p>
            <button></button>
          </article>
        </section>
        <section name='howToUse'>
          {/* How to use the app */}
          <article name='greenCard'></article>
          <img src="" alt="" />
          <article name='blackCard'></article>
          <img src="" alt="" />
        </section>
      </section>

      <section name='clientsOpinion'>
          <article name='opinionCard'>?</article>
          <article name='greenCard'>
            <h2></h2>
            <button></button>
          </article>
      </section>

      <footer>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </footer>
    </main>
    </>
  )
}
