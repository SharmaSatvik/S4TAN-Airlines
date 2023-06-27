import './column-two.css'

function Column() {
    var image1 = "./assets/bg-her.jpg";
    return (
        <>
            <div className="container">
                <div className="col-1">
                    <p className="heading">Includes flights to all destinations<sup>*</sup></p>
                    <p className="sub-heading">Purchase by Jul 12, 2023,<br />
                        Fly anytime until Jul 12, 2024!</p>
                </div>
                <div className="col-2">
                    <div className='card'>
                        <ul>
                            <li>Mobile Check-in</li>
                            <li>VIP Lounge Access</li>
                            <li>Premium In-flight Entertainment</li>
                            <li>Priority Upgrades</li>
                        </ul>
                    </div>
                    <br />
                    <strong>*NOT VALID FOR BUSINESS CLASS</strong>
                </div>
            </div>
        </>
    );
}

export default Column;