import React from 'react';
import {createTabNavigator} from "react-navigation-tabs";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import FavoriteCatalogList from "./FavoriteCatalogList";
import GlobalCatalogList from "./GlobalCatalogList";
import SelfCatalogList from "./SelfCatalogList";

const CatalogTab = createTabNavigator({
    //Drawer Optons and indexing
    Favorite: FavoriteCatalogList,
    Global: GlobalCatalogList,
    Self: SelfCatalogList
});

export default createAppContainer(
    createSwitchNavigator({
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Catalog: CatalogTab,
    })
);

