function NavbarLoggedIn(){
    return(
        <header>
            <nav className="navbar">
                <h3 className="logo"><a href="/">Job Recommender App</a></h3>
                <ul className="nav_items">
                    <li><a href="/">Home</a></li>
                    <li><a href="/user/wishlist">Your Wishlist</a></li>
                    <li><a href="https://tech-rdham.pro" target="_blank">Visit My Website</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavbarLoggedIn