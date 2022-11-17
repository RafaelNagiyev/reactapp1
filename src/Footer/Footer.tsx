import './Footer.scss';


export const Footer = () => {
    return (
       <footer className='footer'>
            <div className='contacts'>
            <p> contacts</p>
        </div><div className="btn-text">
                <p>Want to know more or just chat?<br />
                    You are welcome!</p>
            </div><button type="button" className="btn">Send message</button><div className="socials">
                <a href="#"><img src="./image/li.png" alt="LinkedIn" /></a>
                <a href="#"><img src="./image/inst.png" alt="Instagram" /></a>
                <a href="#"><img src="./image/be.png" alt="Behance" /></a>
                <a href="#"><img src="./image/drib.png" alt="" /></a>
            </div><div className="last-text">
                <p>Like me on <br />
                    LinkedIn, Instagram, Behance, Dribble</p>
            </div>
    </footer>
    )
 }