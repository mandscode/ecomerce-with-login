import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <>
            <section className="_footer">
                <div className="container">
                    <div className=" _footer__wrapper">
                        <Grid container sx={{ columnGap: 20 }}>
                            <Grid sx={{ rowGap: 4, display: 'grid', padding: `0 !important`, height: 'fit-content' }}>
                                <h2 className="_footer__grid__title">Contact</h2>
                                <div className="_footer__grid__cell__wrapper">
                                    <div className="_footer__grid__cell__dropdown">
                                        <span className="_footer__grid__cell__icon">
                                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_227_1296)">
                                                    <path d="M14.273 13.023L9.5 17.796L4.727 13.023C3.78301 12.079 3.14014 10.8763 2.8797 9.56689C2.61925 8.25752 2.75293 6.90033 3.26382 5.66693C3.77472 4.43353 4.63988 3.37933 5.74991 2.63764C6.85994 1.89594 8.16498 1.50006 9.5 1.50006C10.835 1.50006 12.1401 1.89594 13.2501 2.63764C14.3601 3.37933 15.2253 4.43353 15.7362 5.66693C16.2471 6.90033 16.3808 8.25752 16.1203 9.56689C15.8599 10.8763 15.217 12.079 14.273 13.023V13.023ZM9.5 11.25C10.2957 11.25 11.0587 10.9339 11.6213 10.3713C12.1839 9.80871 12.5 9.04565 12.5 8.25C12.5 7.45435 12.1839 6.69129 11.6213 6.12868C11.0587 5.56607 10.2957 5.25 9.5 5.25C8.70435 5.25 7.94129 5.56607 7.37868 6.12868C6.81607 6.69129 6.5 7.45435 6.5 8.25C6.5 9.04565 6.81607 9.80871 7.37868 10.3713C7.94129 10.9339 8.70435 11.25 9.5 11.25V11.25ZM9.5 9.75C9.10218 9.75 8.72065 9.59197 8.43934 9.31066C8.15804 9.02936 8 8.64783 8 8.25C8 7.85218 8.15804 7.47065 8.43934 7.18934C8.72065 6.90804 9.10218 6.75 9.5 6.75C9.89783 6.75 10.2794 6.90804 10.5607 7.18934C10.842 7.47065 11 7.85218 11 8.25C11 8.64783 10.842 9.02936 10.5607 9.31066C10.2794 9.59197 9.89783 9.75 9.5 9.75Z" fill="#F86B1F" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_227_1296">
                                                        <rect width="18" height="18" fill="white" transform="translate(0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <div>
                                            <h3 className="_footer__grid__cell__title">We are here</h3>
                                            <span className="_footer__grid__cell__typography">
                                                John Bucarest St. 199
                                            </span>
                                        </div>
                                    </div>
                                    <div className="_footer__grid__cell__dropdown">
                                        <span className="_footer__grid__cell__icon">
                                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_227_1304)">
                                                    <path d="M16.25 12.315V14.967C16.2501 15.1569 16.1781 15.3397 16.0487 15.4786C15.9192 15.6176 15.7419 15.7022 15.5525 15.7155C15.2247 15.738 14.957 15.75 14.75 15.75C8.12225 15.75 2.75 10.3778 2.75 3.75C2.75 3.543 2.76125 3.27525 2.7845 2.9475C2.79779 2.75808 2.88244 2.58076 3.02135 2.45131C3.16027 2.32186 3.34312 2.24991 3.533 2.25H6.185C6.27803 2.24991 6.36777 2.28439 6.4368 2.34677C6.50582 2.40914 6.5492 2.49494 6.5585 2.5875C6.57575 2.76 6.5915 2.89725 6.6065 3.0015C6.75555 4.04169 7.061 5.05337 7.5125 6.00225C7.58375 6.15225 7.53725 6.3315 7.40225 6.4275L5.78375 7.584C6.77334 9.88984 8.61091 11.7274 10.9167 12.717L12.0717 11.1015C12.119 11.0355 12.1878 10.9882 12.2664 10.9677C12.3449 10.9473 12.4281 10.9551 12.5015 10.9897C13.4503 11.4404 14.4617 11.7451 15.5015 11.8935C15.6057 11.9085 15.743 11.925 15.914 11.9415C16.0064 11.951 16.092 11.9944 16.1543 12.0634C16.2165 12.1324 16.2509 12.2221 16.2507 12.315H16.25Z" fill="#F86B1F" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_227_1304">
                                                        <rect width="18" height="18" fill="white" transform="translate(0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <div>
                                            <h3 className="_footer__grid__cell__title">Call us</h3>
                                            <span className="_footer__grid__cell__typography">
                                                +1 (23) 456 789 0
                                            </span>
                                        </div>
                                    </div>
                                    <div className="_footer__grid__cell__dropdown">
                                        <span className="_footer__grid__cell__icon">
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.75 0.25H14.25C14.4489 0.25 14.6397 0.329018 14.7803 0.46967C14.921 0.610322 15 0.801088 15 1V13C15 13.1989 14.921 13.3897 14.7803 13.5303C14.6397 13.671 14.4489 13.75 14.25 13.75H0.75C0.551088 13.75 0.360322 13.671 0.21967 13.5303C0.0790176 13.3897 0 13.1989 0 13V1C0 0.801088 0.0790176 0.610322 0.21967 0.46967C0.360322 0.329018 0.551088 0.25 0.75 0.25V0.25ZM7.545 6.76225L2.736 2.6785L1.76475 3.8215L7.55475 8.73775L13.2405 3.81775L12.2595 2.683L7.54575 6.76225H7.545Z" fill="#F86B1F" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h3 className="_footer__grid__cell__title">Write Us Anytime</h3>
                                            <span className="_footer__grid__cell__typography">
                                                username@email.com
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: `0 !important`,
                                    height: 'fit-content',
                                    columnGap: '11rem'
                                }}>
                                <Grid item sx={{ rowGap: 4, display: 'grid', height: 'fit-content' }}>
                                    <h2 className="_footer__grid__title">Customer Service</h2>
                                    <div className="_footer__grid__cell__wrapper">
                                        <div className="_footer__grid__cell__dropdown alt__content">
                                            <Link className="_footer__grid__cell__typography">
                                                Help Center
                                            </Link>
                                            <Link className="_footer__grid__cell__typography">
                                                My Account
                                            </Link>
                                            <Link className="_footer__grid__cell__typography">
                                                Track My Order
                                            </Link>
                                            <Link className="_footer__grid__cell__typography">
                                                Return Policy
                                            </Link>
                                            <Link className="_footer__grid__cell__typography">
                                                Price Match
                                            </Link>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item sx={{ rowGap: 4, display: 'grid' }}>
                                    <h2 className="_footer__grid__title">Information</h2>
                                    <div className="_footer__grid__cell__wrapper">
                                        <div className="_footer__grid__cell__dropdown alt__content">
                                            <Link className="_footer__grid__cell__typography">
                                                About Us
                                            </Link>
                                            <Link className="_footer__grid__cell__typography">
                                                Guides & Articles
                                            </Link>
                                            <Link className="_footer__grid__cell__typography">
                                                Customer Reviews
                                            </Link>
                                            <Link className="_footer__grid__cell__typography">
                                                Coupon Codes
                                            </Link>
                                            <Link className="_footer__grid__cell__typography">
                                                Gift Cards
                                            </Link>
                                            <Link className="_footer__grid__cell__typography">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid sx={{ padding: `0 !important`, height: 'fit-content', rowGap: 4, display: 'grid' }}>
                                <h2 className="_footer__grid__title">Subscribe Media Centre</h2>
                                <div className="_footer__grid__cell__wrapper">
                                    <Link className="_footer__grid__cell__title">
                                        One liner or two liner caption for subscription.
                                    </Link>
                                    <div>
                                        <form className="subscribe_form _footer__grid__cell__subscribe_form">
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="email" placeholder="Enter your email" />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-default" type="button">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="_footer__grid__cell__dropdown">
                                        <Link className="_footer__grid__cell__social">
                                            <i className="fa-brands fa-square-facebook"></i>
                                        </Link>
                                        <Link className="_footer__grid__cell__social">
                                            <i className="fa-brands fa-instagram"></i>
                                        </Link>
                                        <Link className="_footer__grid__cell__social">
                                            <i className="fa-brands fa-twitter"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;