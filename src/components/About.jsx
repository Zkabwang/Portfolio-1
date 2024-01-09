import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className='align-element grid  md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64' />
                <article>
                    <SectionTitle text='code and coffee' />
                    <p className='text-slate-600 mt-8 leading-loose'>
                        I enjoy building websites and learn about new technologies most of my days and while I'm learning and coding, I drink a lot of coffee. Let me recommand you my favorite coffee called Kanfule kaffe, you can visit and purchase some here at < a href='https://www.kanfuela.com/' className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'>Kanfuela.com</a>
                    </p>
                </article>
            </div>
        </section>
    );
};
export default About;