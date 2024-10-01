import { useState } from 'react';
import logo from '../assets/img/logo.png'
import PropTypes from 'prop-types';

function Header( {setSearchTerm, searchTerm, filteredProducts, clearList} ) {

    const [isOpen, setIsOpen] = useState(false)

    const open = () => {
        setIsOpen(!isOpen)
    }

    // console.log(filteredProducts)
    return (
        <div className='main__header'>
            <div className='fixed__header'>
                <div className="header">
                    <img src={logo} className='logo' alt="this is logo" />

                    <div onClick={open} className="burger">
                        <div className={isOpen ? 'burger-item burger__item__1 active':'burger-item burger__item__1'}
                        ></div>
                        <div className={isOpen ? 'burger-item burger__item__2 active':'burger-item burger__item__2'}></div>
                        <div className={isOpen ? 'burger-item burger__item__3 active':'burger-item burger__item__3'}></div>
                    </div>

                    <div className={isOpen ? "header__menu active" : "header__menu"}>
                        <div className='form__search'>
                            <form>
                                <input 
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} />
                            </form>
                            {
                                searchTerm.length > 0 ? 
                                <ion-icon onClick={clearList} name="close-outline"></ion-icon> : 
                                <ion-icon name="search-outline"></ion-icon>
                            }

                        </div>
                        <div className='find__product'>
                            {
                                searchTerm.length > 0 ?                       
                            (<div className='item__flex'>
                                    {
                                        filteredProducts.map((product) => (
                                            <div className='item' key={product.id}>
                                                <img src={product.img} alt="" />
                                                <div>
                                                    <h4>{product.name}</h4>
                                                    <p>{product.price}.00 $</p>
                                                    <button className='find__btn__item'>Details</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>) : ""
                            }
                        </div>
                        <nav className='menu__items'>
                            <ul>
                                <li><a href="./home">Home</a></li>
                                <li><a href="./Product">Product</a></li>
                                <li><a href="">Cart</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="./About">About</a></li>
                            </ul>
                        </nav>
                        <div className='additonal__section'>
                            <div className='profile__nav'>
                                <ion-icon name="person-outline"></ion-icon>
                                <h5>Profile</h5>
                            </div>
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <p>0</p>
                            </div>
                            <div>
                                <ion-icon name="cart-outline"></ion-icon>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Header.propTypes = {
    // productList: PropTypes.node.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    filteredProducts: PropTypes.array.isRequired,
    searchTerm: PropTypes.node.isRequired,
    clearList: PropTypes.func.isRequired,

  };
export default Header
