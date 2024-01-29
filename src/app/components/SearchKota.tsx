"use client"

import { useState, Fragment } from 'react'
import Image from 'next/image'
import { Combobox, Transition } from '@headlessui/react'

KumpulanKota
import { SearchKotaProps } from '../../../types/custom-types'
import { relative } from 'path'
import { KumpulanKota } from '../../../constants'

const SearchKota = ({kota, setKota}: SearchKotaProps) => {
    const [query, setQuery] = useState('');

    const filteredKumpulanKota = 
    query === "" 
    ? KumpulanKota 
    : KumpulanKota.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    ))

  return (
  <div className='search-kota'>
        <Combobox value={kota} onChange={setKota}>
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px]">
                </Combobox.Button>

                <Combobox.Input
                className="search-kota__input"
                placeholder="Location"
                displayValue={(Kota: string) => Kota}
                onChange={(e) => setQuery(e.target.value)}
                />

                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options>
                        {
                            filteredKumpulanKota.map((item) => (
                                <Combobox.Option
                                key={item}
                                className={({ active }) => ` 
                                relative search-kota__option
                                ${active ? "bg-primary-blue text-white" : "text-gray-900"}
                                `}
                                value={item}
                                >
                                    {({selected, active}) => (
                                        <>
                                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            
                            )
                        )}
                    </Combobox.Options>

                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchKota