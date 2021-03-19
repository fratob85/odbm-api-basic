import React from 'react';

export default function PagerItem({page, setCurPage}) {
    const changePage = (page) => {
        setCurPage(page);
    }

    return(
        <button className="page" key={page} onClick={() => changePage(page)}>{page}</button>
    );
}
