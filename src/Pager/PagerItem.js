import React from 'react';

export default function PagerItem({page, setCurPage}) {
    const changePage = (page) => {
        setCurPage(page);
    }

    return(
        <li className="page" key={page}>
            <button onClick={() => changePage(page)}>{page}</button>
        </li>
    );
}
