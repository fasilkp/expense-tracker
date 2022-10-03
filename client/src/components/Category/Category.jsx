import React from 'react'
import ListComp from '../ListCompnent/ListCom'
import './Category.css'
function Category() {
    const defaultSet={desc:false, createdAt:false}
    const list=[
        {amount:5600, category:"entertainment", ...defaultSet},
        {amount:5600, category:"entertainment", ...defaultSet},
        {amount:5600, category:"entertainment", ...defaultSet},
    ]
  return (
    <div className='Category'>
        <section className="category-banner-sec">
            <div className="category-banner"> 

            </div>
        </section>
        <section className="category-list">
            <ListComp list={list}></ListComp>
        </section>
    </div>
  )
}

export default Category