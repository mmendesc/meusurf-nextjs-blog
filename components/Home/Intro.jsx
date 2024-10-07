import { REFLECTIONS } from '../../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight md:pr-8">
        Surf.
      </h1>
      <div className="flex-col">
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          Viajando sobre o Surf
        </h4>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          “<strong><i>{REFLECTIONS.slice(-1)}</i></strong>”
        </h4>
      </div>
    </section>
  )
}
