import React from 'react';
import PagerItem from "./PagerItem";

export default function PagerList({totItems, errorMessage, setCurPage}) {
    const PagerItems =  () => {
        if (errorMessage !== '' || totItems === 1) {
            return null;
        }

        const pagerItems = [];
        for (let page=1; page<=totItems; page++) {
            pagerItems.push(<PagerItem page={page} key={page} setCurPage={setCurPage} />)
        }

        return (
            <ul className="pager">
                {pagerItems}
            </ul>
        )
    };

    return (
        <PagerItems />
    )
}
