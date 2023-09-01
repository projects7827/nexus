import Image from 'next/image'
import cabinet_icon from "../images/cabinet.png"
import search_bar_img from "../images/search_bar.png"
import menu_icon from "../images/menu.png"


const Header = () => {
    return (
        <div className='header'>
            <a className='navlink navlink_lg navlink_left'>Skin Care</a>
            <a className='navlink navlink_lg navlink_left'>Body & Hand</a>
            <a className='navlink navlink_lg navlink_left'>Hair</a>
            <a className='navlink navlink_lg navlink_left'>Fragrance</a>
            <a className='navlink navlink_lg navlink_left'>Home</a>
            <a className='navlink navlink_lg navlink_left'>Kits & Travel</a>
            <a className='navlink navlink_lg navlink_left'>Gifts</a>
            <a className='navlink navlink_lg navlink_md navlink_left'>Read</a>
            <a className='navlink navlink_lg navlink_md navlink_left'>Stores</a>
            <a className='navlink navlink_lg navlink_left'>Facial Appointments</a>
            <a className='navlink navlink_md navlink_left'>Shop</a>
            <Image className='search_bar icons' src={search_bar_img} />
            <a className='navlink navlink_lg navlink_md navlink_right'>Log In</a>
            <Image className='cabinet_icon' src={cabinet_icon} />
            <Image className='cabinet_icon icons' src={cabinet_icon} />
            <Image className='manu icons icons' src={menu_icon} />

            <a className='navlink navlink_lg navlink_md navlink_right'>Cabinet</a>
            <a className='navlink navlink_lg navlink_md navlink_right'>Cart</a>
        </div>
    )
}

export default Header