import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='bg-emerald-100 py-24'>
            <div className='align-element md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-7xl font-bold tracking-wider'>I'm Jonathan </h1>
                    <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide '>Full-Stack Developer</p>
                    <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'> tuurning ideas into interactive reality</p>
                    <div className='flex gap-x-4 mt-4'>
                        <a href='https://www.youtube.com/channel/UCwC0wPcMtgAjQDA5w1WAC2g'>
                            <FaYoutube className='h-8 w-8 text-slate-500 hover:text-black duration-300'></FaYoutube>
                        </a>
                        <a href='linkedin.com/in/jonathan-z-kabwang-9364b5225'>
                            <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300'></FaLinkedin>
                        </a>
                        <a href='https://zkabwang.github.io/Ztech/'>
                            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'></FaGithubSquare>
                        </a>
                    </div>
                </article>
                <article className='active md:block'>
                    <img src={heroImg} className='h-90 lg:h-96' id='heroimg' />
                </article>
            </div>
        </div>

    )
};
export default Hero;