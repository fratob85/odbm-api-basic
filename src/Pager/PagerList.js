import React from 'react';

export default function PagerList({totItems, curPage, setCurPage, errorMessage}) {
        if (errorMessage !== '' || totItems === 1) {
            return null;
        }

        const changePage = (page) => {
            setCurPage(page);
        }

        const FirstPageLink = () => {
            if (curPage !== 1) {
                return (
                    <button className="page relative items-center px-4 py-2 mx-2  border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-5"
                            key="firstPage"
                            onClick={() => changePage(1)}>&lt;&lt;</button>
                );
            } else {
                return null;
            }
        };

        const PrevPageLink = () => {
            if (curPage !== 1) {
                let prevPage = curPage-1;
                return (
                    <button className="page relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-5"
                            key={prevPage}
                            onClick={() => changePage(prevPage)}>{prevPage}</button>
                );
            } else {
                return null;
            }
        };

        const NextPageLink = () => {
            if (curPage !== totItems) {
                let nextPage = curPage+1;
                return (
                    <button className="page relative items-center px-4 py-2 mx-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-5"
                            key={nextPage}
                            onClick={() => changePage(nextPage)}>{nextPage}</button>
                );
            } else {
                return null;
            }
        };

        const LastPageLink = () => {
            if (curPage !== totItems) {
                return (
                    <button className="page relative items-center px-4 py-2 mx-2  border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-5"
                            key={totItems}
                            onClick={() => changePage(totItems)}>&gt;&gt;</button>
                );
            } else {
                return null;
            }
        };

        return (
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-3 pt-10 w-full">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm justify-center w-full" aria-label="Pagination">
                    <FirstPageLink />
                    <PrevPageLink />
                    <div className="border-solid border-t-4 border-blue-500 page relative items-center px-4 py-2 mx-2 bg-grey text-sm font-medium text-gray-700 hover:bg-gray-5"
                            key={curPage}>{curPage}</div>
                    <NextPageLink />
                    <LastPageLink />
                </nav>
            </div>
        );
}
