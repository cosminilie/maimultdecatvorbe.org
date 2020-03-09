import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="#maimultdecâtvorbe" />
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>#maimultdecâtvorbe</h1>
    <p>#maimultdecâtvorbe este un proiect demarat de echipa <a href="https://jassyro.ro/">Jassyro</a> și își dorește să devină un nucleu al evenimentelor caritabile din Iași ce au ca scop susținerea și ajutorarea femeilor aflate în dificultate. Ideea a prins viață o dată cu campania organizată de noi cu ocazia zilei de 8 Martie. Am fost de-a dreptul copleșiți de succesul acestei campanii. Dar și mai impresionant a fost răspunsul vostru, prietenilor și clienților Jassyro, un răspuns prompt și sincer, venit din dorința de a face bine, din dorința de schimbare. Am realizat că împreună suntem mai puternici, că împreună putem ajuta și valorifica FEMEIA. Acea femeie care se află într-un punct al vieții ei în care are mare nevoie de cineva, de ceva, de NOI.</p>
    <p>Fiecare dintre noi purtăm amprenta unei femei, fie ea mamă, bunică, soră, prietenă, mentor. Și fiecare femeie la rândul ei este și poate fi unul sau mai multe dintre aceste lucruri.</p>
    <p>Ne dorim ca, împreună cu voi, să fim alături de femeia aflată în dificultate. Fără bias-uri, fără discriminări, fără judecăți de valoare.</p>
    <p>#maimuldedecâtvorbe nu este un ONG, însă dorim să colaborăm cu ele. Și cu orice altă formă de organizare care are ca scop sprijinirea femeii. Cu oameni simpli care își “donează” timpul pentru a ajuta O FEMEIE.</p>
   
    <a href="https://www.facebook.com/maimultdecatvorbe/">Facebook community</a>
  </Layout>
)

export default IndexPage
