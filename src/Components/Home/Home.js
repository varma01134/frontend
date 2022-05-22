import React, { useEffect, useState } from 'react';
import Categories from './Categories/Categories.jsx';
import NavBar from './NavBar/NavBar.js';
import ProductDisplay from './ProductDisplay/ProductDisplay.jsx';
import demoProductList from './ProductDisplay/ProductList.js';
import SellFab from './SellFab/SellFab.jsx';
import SellForm from './SellForm/SellForm.jsx';
import { useLocation } from 'react-router-dom';

export default function Home() {
    const location = useLocation();
    const { userInfo, orgInfo } = location.state;

    const [productList, setProductList] = useState(demoProductList);

    const [filters, setFilters] = useState({ location: "all", category: "all", mode: "all", search: "all" });

    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => console.log("changed"), [filters]);

    return <div>

        <NavBar userInfo={userInfo} orgInfo={orgInfo} filters={filters} fxFilters={setFilters} />
        <Categories filters={filters} fxFilters={setFilters} />
        <ProductDisplay list={productList} />
        {isFormOpen && <SellForm sellerId={userInfo.userId} orgId={orgInfo.orgId} />}
        <SellFab fxSetIsFormOpen={setIsFormOpen} />
    </div>

}