import './footer.css';

const Footer = () => {
    return (
        <>
            <p className='logo'><strong>S4TAN</strong> <em>Airlines</em></p>
            <footer className='container-fluid'>
                <div className='cols-1'>
                    <h3>CONNECT WITH US</h3>
                    <ul className='list'>
                        <li><a href='#'>Instagram</a></li>
                        <li><a href='#'>Facebook</a></li>
                        <li><a href='#'>LinkedIn</a></li>
                        <li><a href='#'>Youtube</a></li>
                    </ul>
                </div>
                <div className='cols-2'>
                    <h3>MAIN LOCATION</h3>
                    <p>AMSTERDAM<br />
                        Van Diemenstraat 38<br />
                        1013NH Amsterdam<br />
                        The Netherlands</p>
                </div>
                <div className='cols-3'>
                    <h3>SUBSCRIBE TO NEWSLETTER</h3>
                    <input type='email' className='email' placeholder='xyz@mkc.com' />
                    <input type='button' className='subs' value='Subscribe' />
                </div>
            </footer>
            <hr />
            <p><center>© S4TAN Airlines. All Rights Reserved.</center></p>
        </>
    );
};

export default Footer;