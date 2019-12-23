import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const navStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
};

const Header = () => (
    <div style={navStyle}>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/About">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;
