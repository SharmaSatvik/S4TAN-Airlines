import './destiny.css'
function destiny() {
    return (
        <>
            <div className='head'>Top Destinations</div>
            <div className='grid'>
                <div className='items'>
                    <div className='item-1'>
                        {/* <p className='text-inside'>ASIA</p> */}
                    </div>
                </div>
                <div className='items'>
                    <div className='item-2'>
                        {/* <p className='text-inside'>AMERICA</p> */}
                    </div>
                </div>
                <div className='items'>
                    <div className='item-3'>
                        {/* <p className='text-inside'>EUROPE</p> */}
                    </div>
                </div>
            </div>
            <div className='flx'>
                <input type='button' value='Book a Flight' className='btn' />
            </div>

        </>
    );
}

export default destiny;