import Head from 'next/head'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME } from '../lib/constants'
import PageHeading from '../components/PageHeading'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Sobre | {BLOG_NAME}</title>
      </Head>
      <Container>
        <PageHeading>Bem vindo Surfista</PageHeading>
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24">
          <p>
          Me chamo Matheus Fernandes, sou do Ceará, comecei a Surfar em Outubro de 2019 e desde então o Surf tomou conta da minha vida.
          <br/>
          <br/>
          Decidi criar esse blog para externalizar o meu processo de aprendizagem e vivência do Surf.
          Surfar me traz muitas reflexões e muitas descobertas, quero compartilhar minha visão, e acho que outras pessoas que vivem isso também vão se identificar.
          <br/>
          <br/>
          Além disso o processo mental do Surf é bem intenso, acho que escrever sobre essa jornada pode tornar as coisas mais claras, como uma espécie de terapia comigo mesmo.
          <br/>
          <br/>
          Wheeeew 🤙
          </p>

          <br/>
          <br/>

          <Image
            src="/assets/blog/about/banner.jpg"
            height={400}
            width={728}
            className="w-12 h-12 rounded-sm"
            alt="surf no portao"
          />
        </section>
      </Container>
    </Layout>
  )
}
