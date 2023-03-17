import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

const App = () => {

    const data = [
        { label: 'Go learn react', important: true, id: 'das' },
        { label: 'Shiiit mother f....', important: false, id: 'eqw' },
        { label: 'PNH WTF', important: true, id: "zvz" }

    ]

    return (
        <div>
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    )
}

export default App;