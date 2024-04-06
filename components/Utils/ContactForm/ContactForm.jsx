import Image from 'next/image'
import Link from 'next/link'

export default function ContactForm() {
  return (
    <div className="bg-white dark:bg-black py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <Link href="https://t.me/meusurf" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center mb-10 cursor-pointer">
            <Image
              src="/assets/blog/about/telegram.svg"
              height={24}
              width={24}
              alt="telegram"
            />
            <span className="ml-2 cursor-pointer">Se Inscreva no canal do Telegram</span>
          </div>
        </Link>
        <Link href="https://forms.gle/BzCz7k1UmH9ZQf7UA" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/assets/blog/about/newsletter.png"
              height={24}
              width={24}
              alt="telegram"
            />
            <span className="ml-2 cursor-pointer">Se Inscreva na Newsletter</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
