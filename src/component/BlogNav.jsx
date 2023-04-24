const BlogNav = () => {
    return (
        <>
            <div className="_blog__nav">
                <div className="container">
                    <div className="_blog__nav__container wrapper">
                        <div className="_blog__nav__list__title">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="23" height="23" stroke="#F86B1F" />
                                <g clipPath="url(#clip0_202_684)">
                                    <path d="M5.25 6H18.75V7.5H5.25V6ZM5.25 11.25H18.75V12.75H5.25V11.25ZM5.25 16.5H18.75V18H5.25V16.5Z" fill="#F86B1F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_202_684">
                                        <rect width="18" height="18" fill="white" transform="translate(3 3)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <a className="_blog__nav__title" href="/home">All Products</a>
                        </div>
                        <nav className="_blog__nav__wrapper" aria-label="Blog topics">
                            <ul className="_blog__nav__list">
                                <li className="_blog__nav__list__items">
                                    <a href="https://contentsquare.com/blog/solution/design-ux/" title="Design & UX">
                                        11.11 Deals
                                    </a>
                                </li>
                                <li className="_blog__nav__list__items">
                                    <a href="https://contentsquare.com/blog/solution/design-ux/" title="Design & UX">
                                        Car Makes
                                    </a>
                                </li>
                                <li className="_blog__nav__list__items">
                                    <a href="https://contentsquare.com/blog/solution/design-ux/" title="Design & UX">
                                        Interior
                                    </a>
                                </li>
                                <li className="_blog__nav__list__items">
                                    <a href="https://contentsquare.com/blog/solution/design-ux/" title="Design & UX">
                                        Exterior
                                    </a>
                                </li>
                                <li className="_blog__nav__list__items">
                                    <a href="https://contentsquare.com/blog/solution/design-ux/" title="Design & UX">
                                        Performance
                                    </a>
                                </li>
                                <li className="_blog__nav__list__items">
                                    <a href="https://contentsquare.com/blog/solution/design-ux/" title="Design & UX">
                                        Lightning
                                    </a>
                                </li>
                                <li className="_blog__nav__list__items">
                                    <a href="https://contentsquare.com/blog/solution/design-ux/" title="Design & UX">
                                        Tyres & Wheels
                                    </a>
                                </li>
                                <li className="_blog__nav__list__items">
                                    <a href="https://contentsquare.com/blog/solution/design-ux/" title="Design & UX">
                                        Body Parts
                                    </a>
                                </li>
                                <li className="_blog__nav__list__items">
                                    <a href="https://contentsquare.com/blog/solution/design-ux/" title="Design & UX">
                                        Audio & Electronics
                                    </a>
                                </li>
                                <li className="_blog__nav__list__items">
                                    <a href="https://contentsquare.com/blog/solution/design-ux/" title="Design & UX">
                                        Automotive Tools
                                    </a>
                                </li>
                                <li className="_blog__nav__list__items">
                                    <a href="https://contentsquare.com/blog/solution/design-ux/" title="Design & UX">
                                        Speciality
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    );
}
 
export default BlogNav;