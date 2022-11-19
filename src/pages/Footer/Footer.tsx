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
                <a href="#"><img src={require('../../assets/images/li.png')} alt="linkedin"/> </a>
                <a href="#"><img src={require('../../assets/images/inst.png')} alt="linkedin"/></a>
                <a href="#"><img src={require('../../assets/images/be.png')} alt="linkedin"/></a>
                <a href="#"><img src={require('../../assets/images/drib.png')} alt="linkedin"/></a>
            </div><div className="last-text">
                <p>Like me on <br />
                    LinkedIn, Instagram, Behance, Dribble</p>
            </div>
    </footer>
    )
 }