import React from 'react'
import { Tab } from '@headlessui/react'

const CategoryTabs = () => {
  return (
    <Tab.Group>
        <Tab.List className="flex justify-center">
        <Tab
            className={({ selected }) =>
            `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
              selected
                ? "borderGradient bg-[#e8e8e8] dark:bg-[#35383C] text-black/80 dark:text-white"
                : "border-b-2 border-[#e8e8e8] dark:border-[#35383C] text-[#a6a6a6] dark:text-[#747474]"
            }`}
            >
                Koszulki
            </Tab>
            <Tab
            className={({ selected }) =>
            `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
              selected
                ? "borderGradient bg-[#e8e8e8] dark:bg-[#35383C] text-black/80 dark:text-white"
                : "border-b-2 border-[#e8e8e8] dark:border-[#35383C] text-[#a6a6a6] dark:text-[#747474]"
            }`}
            >
                Kawa
            </Tab>

        </Tab.List>
    </Tab.Group>
  )
}

export default CategoryTabs