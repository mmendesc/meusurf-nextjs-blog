import { LocationMarkerIcon, MailIcon } from '@heroicons/react/outline'

export default function ContactDetails() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
      <div className="max-w-lg mx-auto">
        <p className="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-200">
          Se gostou do conteúdo e quer saber das proximas postagens, utilize uma das opções ao lado,
          ou volte daqui a tempo e descubra.
        </p>
        <dl className="mt-8 text-base text-gray-500 dark:text-gray-300">
          <div>
            <dt className="sr-only">Local</dt>
            <dd className="flex">
              <LocationMarkerIcon
                className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-300"
                aria-hidden="true"
              />
              <p className="ml-3">Fortaleza, Ceará</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
