import './Footer.css'

const Footer = () => {
    return(
        <footer className='footer'>
            {/* <img className='img-fundo' src="./imagens/fundo.png" alt="" /> */}
            <section>
                <ul>
                    <li>
                        <a href="facebook.com">
                            <img src="./imagens/fb.png" alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com">
                            <img src="./imagens/tw.png" alt="twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com">
                            <img src="./imagens/ig.png" alt="instagram" />
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img src="./imagens/logo.png" alt="logo" />
            </section>

            <section>
                <p>Desenvolvido por Higor Azevedo</p>
            </section>
        </footer>
    )
}

export default Footer