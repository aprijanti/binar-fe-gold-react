import Button from '../Button';
import ImageCar from '../../assets/img_car.png';
import './style.css';

function SectionHero(){
    return(
        <section className='hero'>
            <div className='hero-deskripsi'>
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Button />
            </div>
            <div className='hero-gambar'>
                <img src={ImageCar} alt='imagecar' />
            </div>
        </section>
    )
}

export default SectionHero;

