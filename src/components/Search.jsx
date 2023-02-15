import styles from "./Search.module.css";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
 import { useNavigate } from "react-router-dom";

export function Search() {

    
    const [searchText, setSearchText] = useState("");
    let navigate = useNavigate();


function handleSubmit(e) {
    e.preventDefault();
    navigate("/?search="+searchText)
}


    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input type="text"  placeholder="Search..." className={styles.searchInput} value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button type="submit" className={styles.searchButton}><BiSearch size={15}/></button>
                
            </div>
        </form>
    )
}
