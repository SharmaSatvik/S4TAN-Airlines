import './testimonial.css'
import quote from './assets/quote.png'
import satvik from './assets/satvik.jpeg'
import jane from './assets/jane.jpg'
import harry from './assets/harry.jpeg'
function Testiominal() {
    return (
        <>
            <div className='heads'>Top Destinations</div>
            <div className='cont'>
                <div className='test-1 m-w'>
                    <img src={quote} className='quote' />
                    <p className='txt'>This is my airline of choice, because of its topnotch service and value for money.</p>
                    <div className='person'>
                        <img src={satvik} className="persons" />
                        <p className='mains'>SATVIK SHARMA</p>

                    </div>
                </div>
                <div className='test-2 m-w'>
                    <img src={quote} className='quote' />
                    <p className='txt'>S4TAN Airline has unbeatable deals and flies to so many global destinations.</p>
                    <div className='person  xt'>
                        <img src={jane} className="persons" />
                        <p className='mains'>JANE AUSTON</p>

                    </div>
                </div>
                <div className='test-3 m-w'>
                    <img src={quote} className='quote' />
                    <p className='txt'>With great staff pampering us passengers, flying becomes true luxury with S4TAN Airlines!</p>
                    <div className='person'>
                        <img src={harry} className="persons" />
                        <p className='mains'>HARRY RUSTEM</p>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Testiominal;