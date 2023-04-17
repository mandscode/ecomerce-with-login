import React, { useEffect } from "react";
import { Stack } from "@mui/system";
import Anycarpart from "./AnycarpartLogo";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

//icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));

const Header = () => {

    const cartItems = useSelector(
        state => state.cartItems.cartItems
    );

    console.log(cartItems.length)

    const [age, setAge] = React.useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setAge(value);
    };

    // for SearchBar
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
    }));

    return ( 
        <>
            <div className="_header">
                <nav className="nav__secondary">
                    <div className="container">
                        <div className="wrapper nav__menu">
                            <div className="nav__menu__items__left">
                                <a href="tel:+1 (23) 456 789 0" className="nav__menu__link">+1 (23) 456 789 0</a>
                            </div>
                            <ul className="nav__menu__items__right">
                                <li className="nav__menu__item">Buy Wholesale</li>
                                <li className="nav__menu__item">Track My Order</li>
                                <li className="nav__menu__item">FAQ,s</li>
                                <li className="nav__menu__item">Help Center</li>
                                <li className="nav__menu__item">
                                    <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_102_598)">
                                            <path d="M16.8415 8.06935H15.1892C14.3949 8.06935 13.7408 7.78776 13.1929 7.20357C12.7851 6.75808 12.5217 6.25374 12.3773 5.69057C11.8676 3.32861 10.8694 2.16023 9.37854 2.18125C8.23595 2.20226 7.44165 2.90833 6.97442 4.29945H10.8907V6.77909C10.8907 8.35093 10.3597 9.68322 9.30209 10.7928C8.26143 11.9023 6.97867 12.4655 5.48777 12.4655C3.99687 12.4655 2.73534 11.9023 1.67345 10.7928C0.611553 9.68322 0.0848543 8.35093 0.0848543 6.75808C0.0636164 6.25374 0.0423785 5.44681 0.00415039 4.29525H2.14493C2.14493 4.63987 2.14493 5.12319 2.16616 5.70738C2.1874 6.29157 2.20864 6.6362 2.20864 6.77489C2.20864 7.8424 2.57393 8.73339 3.33 9.39743C3.98413 9.98161 4.69772 10.2632 5.47078 10.2632C6.30755 10.2632 7.02114 9.98161 7.65403 9.39743C8.38886 8.73339 8.75415 7.8424 8.75415 6.73286L8.73291 6.27055H4.3834C4.3834 4.2322 4.83364 2.68138 5.72988 1.57184C6.60488 0.525348 7.78995 0 9.2766 0C10.8864 0 12.1522 0.626215 13.0484 1.87444C13.5157 2.5595 13.9234 3.54715 14.2717 4.82059C14.5181 5.68637 15.066 6.11085 15.9241 6.11085H16.8415V8.06935ZM5.24141 16H3.28328V13.9616H5.24141V16ZM8.19772 16H6.23959V13.9616H8.19772V16Z" fill="#212F63" />
                                            <path d="M22.2656 5.4468C22.2656 7.06066 21.3057 8.06933 19.5345 8.06933H16.3318V6.11084H18.7359C19.5302 6.11084 20.1206 5.62751 20.1206 4.71971C20.1206 3.93379 20.1206 3.26555 20.0994 2.72339C20.0781 1.89544 20.0781 1.21039 20.0569 0.706055H22.2189C22.2444 3.89177 22.2656 5.46781 22.2656 5.4468ZM20.2863 11.1374H18.3281V9.09901H20.2863V11.1374Z" fill="#212F63" />
                                            <path d="M21.9175 10.7717C24.4873 10.7297 26.3817 8.93511 26.3817 6.41344V0.706055H28.5437V4.07669C28.6456 5.18622 29.4612 6.11504 30.3192 6.11504H32.5831V8.07353H30.4636C29.6693 8.07353 29.0364 7.64905 28.5692 6.82111C28.3653 9.96899 26.2458 12.2091 23.2682 12.4486C22.9581 12.0452 22.5079 11.4778 21.9175 10.7717Z" fill="#212F63" />
                                            <path d="M41.9998 8.06941H32.2134V6.11091H35.535C35.3523 5.93019 35.2079 5.70744 35.106 5.48469C34.8002 4.93833 34.6387 4.35415 34.6387 3.71112C34.6175 2.66042 35.004 1.83668 35.7813 1.23148C36.4355 0.706129 37.2085 0.445557 38.126 0.445557C39.3281 0.445557 40.288 0.891052 41.0016 1.75683L39.859 3.31186C39.43 2.80752 38.9203 2.54695 38.3511 2.54695C37.4761 2.54695 36.8645 3.17316 36.8645 4.05995C36.8645 5.35021 37.8244 6.0983 39.2091 6.0983H41.2904L41.9998 8.06941Z" fill="#212F63" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_102_598">
                                                <rect width="42" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="nav__primary">
                    <div className="container">
                        <div className="wrapper nav__menu">
                            <div className="nav__menu__logo">
                                <a href="/"><Anycarpart/></a>
                            </div>
                            <div className="nav__menu__items">
                                <Stack>
                                    <Search>
                                        <SearchIconWrapper>
                                            <SearchIcon />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search', style: {fontSize: 16} }}
                                        />
                                    </Search>
                                </Stack>
                                <Stack>
                                    <Search>
                                        <SearchIconWrapper>
                                            <SearchIcon />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search', style: {fontSize: 16}}}
                                        />
                                    </Search>
                                </Stack>
                                <Stack spacing={1} sx={{ }}>
                                    <FormControl fullWidth>
                                        <InputLabel sx={{fontSize:'1.6rem'}} id="demo-simple-select-label">Select Brand</InputLabel>
                                        <Select
                                            sx={{
                                                boxShadow: "none",
                                                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                                                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                                {
                                                    border: 0,
                                                },
                                                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                {
                                                    border: 0,
                                                },
                                            }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Select Brand"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </div>
                            <div className="nav__menu__icons__wrapper">
                                <div className="nav__menu__icons">
                                    <span></span>
                                    <FavoriteBorderIcon/>
                                </div>
                                <Link to="/cart" className="nav__menu__icons">
                                    <span>{cartItems.length}</span>
                                    <ShoppingCartOutlinedIcon/>
                                </Link>
                                <div className="nav__menu__icons">
                                    <PersonOutlineOutlinedIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
 
export default Header;