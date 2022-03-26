import React, {useEffect, useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import css from "./LangSwitch.module.css"
import {useRouter} from "next/router";
import Link from "next/link"

import { styled } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: "#1976D2",
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

const LangSwitch = () => {
    let router = useRouter();
    const [lang, setLang] = React.useState(router.locale);

    useEffect(()=> {
        setLang(router.locale);
    }, router.locale)

    const changeHandler = e => {
        const locale = e.target.value;
        router.push(router.asPath, router.asPath, {locale})
    }

    return (
        <>
            <FormControl sx={{ m: 1 }} variant="standard" >
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={lang}
                    onChange={changeHandler}
                    input={<BootstrapInput />}
                >
                    {router.locales.map((locale) => {
                        return <MenuItem value={locale} key={locale}>
                            <span className={css.LangItem}>{locale}</span>
                        </MenuItem>
                    })}
                </Select>
            </FormControl>
        </>

    );



    // return (
    //     <FormControl sx={{ m: 1, minWidth: 80 }}>
    //         <Select
    //             labelId="demo-simple-select-label"
    //             id="demo-simple-select"
    //             value={lang}
    //             label="Lang"
    //             className={css.Switch}
    //             onChange={changeHandler}
    //         >
    //             {router.locales.map((locale) => {
    //                 return <MenuItem value={locale} key={locale} className={css.item}>
    //                             <span className={css.LangItem}>{locale}</span>
    //                         </MenuItem>
    //             })}
    //         </Select>
    //     </FormControl>
    //
    // );
};

export default LangSwitch;