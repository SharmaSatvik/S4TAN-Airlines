import './fluid.css'
import image from './assets/img-portion.jpg'
function Fluid() {
    return (
        <>
            <div className='containers'>
                <div className='image-portion'>
                    <img src={image} className='img-portion' />
                </div>
                <div className='text-portion'>
                    <p className='h'>Don't miss out on future <br /> flight deals.</p>
                    <p className='sh'>Join the S4TAN Airlines mailing list today!</p>
                    <input type='button' className='btns' value='Sign Me Up' />
                </div>
            </div>

        </>
    );
}

export default Fluid;