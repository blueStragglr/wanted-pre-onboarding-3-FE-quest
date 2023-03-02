import { useState } from 'react'
import { Link } from 'react-router-dom'
import Page from '../Page/Page'
import style from './Header.module.css'

function Header({ pages }) {
    const [isSelected, setIsSelected] = useState('')
    return (
        <aside className={style.header}>
            {pages.map((page, index) => <Link to={page} key={index}>
                <button
                    className={parseInt(index) === parseInt(isSelected) && `${style.selected}`}
                    value={index} selected={isSelected}
                    onClick={(e) => {
                        setIsSelected(e.target.value)
                        console.log(e.target.value)
                    }}>{page}
                </button>
            </Link>)
            }
        </aside >
    )
}


export default Header