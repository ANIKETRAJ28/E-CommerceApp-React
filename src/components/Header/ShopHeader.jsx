import header_image from '../../assets/header_image.avif';
import './ShopHeader.css';

function Header() {
    return (
        <div className='header-wrapper'>
        <h1 className='header-text'>
            Shopping List
        </h1>
            <div className='header-image-wrapper'>
                <img
                    className='header-image'
                    src={header_image}
                />
            </div>
        </div>
    )
}

export default Header;