import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/share/RjwsFW1p9ychBv4b/?mibextid=LQQJ4d' target="_blank">
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://x.com/iborjas218?s=11&t=cZm6OSpGac2fUUKQUdnygw' target="_blank">
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/iborjas21?igsh=MXZrY3R0YXUxMG1zcA%3D%3D&utm_source=qr' target="_blank">
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer;


