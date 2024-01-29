"use client";

import React from "react";

import { use, useState } from "react";

import SearchKota from "./SearchKota";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({otherClasses}: { otherClasses: string }) => (
  <button type="submit"  className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
    src="/magnifying-glass.svg"
    alt="magnifying glass"
    width={40}
    height={40}
    className="object-contain"
    />
  </button>
)

const SearchBar = () => {
    const [kota, setKota] =
    useState('');
    const [categories, setCategories] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(kota === '' && categories === '') {
        return alert('Please fill in the search bar')
      }

      updateSearchParams(
        categories.toLowerCase(),
        kota.toLowerCase()
        )
    }

    const updateSearchParams = (categories: string, Kota: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if(categories) {
        searchParams.set('categories', categories)
      } else {
        searchParams.delete('categories')
      }

      if(Kota) {
        searchParams.set('Kota', Kota)
      } else {
        searchParams.delete('Kota')
      }

      const newPathName = `${window.location.pathname}?${searchParams.toString()}`

      router.push(newPathName)
    }

  return (
    <form className='searchbar' onSubmit={handleSearch} action="">
        <div className="searchbar__item">
            <SearchKota
                kota={kota}
                setKota={setKota}
            />
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className="searchbar__item">
          <input
          type="text"
          name="categories"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          placeholder="Categories"
          className="searchbar__input"
          />
        <SearchButton otherClasses="sm:hidden"/>
        </div>
        <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar