import React from 'react'
import { Tab } from '@headlessui/react'
import { Product } from '../components'

const CategoryTabs = ({categories, products}) => {

  let showProducts = (category) => {
    return products
    .filter((product) => product.category._ref === categories[category]?._id)
    .map((product) =>(<Product product={product} key={product._id}/> )) //filter products by category
  };

  return (
    <Tab.Group>
        <Tab.List className="flex justify-center">
          {
            categories.map((category) => (
            <Tab
              key={category._id}
              id={category._id}
              className={({ selected }) =>
              `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
              selected
                ? "borderGradient bg-[#e8e8e8] dark:bg-[#35383C] text-black/80 dark:text-white"
                : "border-b-2 border-[#e8e8e8] dark:border-[#35383C] text-[#a6a6a6] dark:text-[#747474]"
            }`}
            >
                {category.title}
            </Tab>
            ))
          }
        </Tab.List>
        <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
        </Tab.Panels>
    </Tab.Group>
  )
}

export default CategoryTabs