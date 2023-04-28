import React from 'react';
import styles from './Search.module.css'
import { BiSearch } from "react-icons/bi";

const Search = ({search, setSearch}) => {
    const onChangeInput = (e) => {
		setSearch(e.target.value)
	}

    return (
        <div className={styles.filter}>
            <input
                type="text"
                placeholder='Введите запрос..'
                value={search}
                onChange={(e) => onChangeInput(e)}
            />
            <BiSearch className={styles.searchIcon} />
        </div>
    );
};

export default Search;
