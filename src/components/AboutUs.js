import React from 'react'
import BannerImg from "../assets/images/aboutus-banner.jpg"
import AboutIcon from "../assets/images/about-icon.svg"
import ExpertiseIcon from "../assets/images/expertise-white.svg"
import ArrowBlack from "../assets/images/arrow-black.svg"
import ArrowGreen from "../assets/images/arrow-green.svg"
import ExpertiseGreenIcon from "../assets/images/expertise-green.svg"
import SliderImg from "../assets/images/slider-img.jpg"
import ChevronBlack from "../assets/images/chevron-black.svg"
import ArrowLeft from "../assets/images/arrow-left.svg"
import ArrowRight from "../assets/images/arrow-right.svg"
import Client1 from "../assets/images/client-1.png"
import Client2 from "../assets/images/client-2.png"
import Client3 from "../assets/images/client-3.png"
import Client4 from "../assets/images/client-4.png"
import Client5 from "../assets/images/client-5.png"
import Client6 from "../assets/images/client-6.png"

const AboutUs = () => {
  return (
    <div className='container py-10'>
        <div className='flex justify-center gap-5'>
            <div className='flex flex-col gap-6'>
                <h2 className='about__h2'>About us<br/><span className='about__line'></span></h2>
                <div className='flex flex-col gap-6'>
                    <h3 className='about__h3'>Innovation in every design<br/></h3>
                    <p className='leading-8'>McRam Engineering is an organization providing extensive services for piping engineering of Energy, Oil & Gas and power industries.<br/>To further develop our association, we have established a corporate directive to maintain quality and innovative solutions is our core philosophy.
                    </p>
                </div>
                <div className='flex flex-col gap-6'>
                    <h3 className='about__h3'>Our values</h3>
                    <p className='leading-8'>Always believe on Optimized and innovative process to meet the customer requirements in a faster and better quality to become an empowered consultant in the piping industries.<br/>More than a job, we work for environmental safety and keeping people and operations safe and sounds by adapting  Go Green
                    </p>
                </div>
                
            </div>
            <img src={BannerImg} alt="banner"/>
        </div>
        <div className='about__services'>
            <div className='about__servicesbox'>
                <img src={AboutIcon} alt='Services'/>
                <p className='font-semibold'>Professional & Qualified</p>
            </div>
            <div className='about__servicesbox'>
                <img src={AboutIcon} alt='Services'/>
                <p className='font-semibold'>Professional Solution</p>
            </div>
            <div className='about__servicesbox'>
                <img src={AboutIcon} alt='Services'/>
                <p className='font-semibold'>100% Satisfaction</p>
            </div>
            <div className='about__servicesbox'>
                <img src={AboutIcon} alt='Services'/>
                <p className='font-semibold'>100% Satisfaction</p>
            </div>
            <div className='about__servicesbox'>
                <img src={AboutIcon} alt='Services'/>
                <p className='font-semibold'>100% Satisfaction</p>
            </div>
            <div className='about__servicesbox'>
                <img src={AboutIcon} alt='Services'/>
                <p className='font-semibold'>Accurate Testing</p>
            </div>
        </div>
        <div className='container text-center flex gap-8 flex-col py-8 justify-center items-center'>
            <p className='text-xl'>Engineering excellence for a better tommorow</p>
            <p className='font-semibold text-3xl w-[70%]'>Providing solutions for Onshore and Offshore plant design for</p>
        </div>
        <div className='grid grid-cols-4 gap-12 w-[80%] mx-auto my-0'>
            <div className='about__expertise about__expertise--greenbg'>
                <div className='flex flex-col gap-4 pb-5'>
                    <img src={ExpertiseIcon} className='about__expertise--icon' alt='expertise'/>
                    <h3>Onshore E&C
</h3>
                    <p>Our skills and what we provide includes concept, feasibility Studies, design -engineering of the all Onshore plants...</p>
                </div>
                <div className='about__expertise--btnsec about__expertise--whitebrd'>
                    <button className='about__readbtn about__readbtn--whitebg'>Read more</button>
                    <button>
                        <img src={ArrowBlack} alt='arrow'/>
                    </button>
                </div>
            </div>
            <div className='about__expertise about__expertise--whitebg'>
                <div className='flex flex-col gap-4 pb-5'>
                    <img src={ExpertiseGreenIcon} className='about__expertise--icon' alt='expertise green'/>
                    <h3>Offshore E&C</h3>
                    <p>McRam engineering is specialized in providing development concepts and technical solutions to the upstream oil and gas industry...</p>
                </div>
                <div className='about__expertise--btnsec about__expertise--blackbrd'>
                    <button className='about__readbtn about__readbtn--whitebg'>Read more</button>
                    <button>
                        <img src={ArrowGreen} alt='arrow'/>
                    </button>
                </div>
            </div>
            <div className='about__expertise about__expertise--whitebg'>
                <div className='flex flex-col gap-4 pb-5'>
                    <img src={ExpertiseGreenIcon} className='about__expertise--icon' alt='expertise'/>
                    <h3>Brown Field Engineering </h3>
                    <p>3D Laser Scanning is a non- contact, non-destructive technology that digitally captures the shape of physical...</p>
                </div>
                <div className='about__expertise--btnsec about__expertise--blackbrd'>
                    <button className='about__readbtn about__readbtn--whitebg'>Read more</button>
                    <button>
                        <img src={ArrowGreen} alt='arrow'/>
                    </button>
                </div>
            </div>
            <div className='about__expertise about__expertise--whitebg'>
                <div className='flex flex-col gap-4 pb-5'>
                    <img src={ExpertiseGreenIcon} className='about__expertise--icon' alt='expertise'/>
                    <h3>Pertroleum & Gas Energy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Enim congue malesuada sed sit ligula amet. Elementum amet risus fringilla tristique in ut.</p>
                </div>
                <div className='about__expertise--btnsec about__expertise--blackbrd'>
                    <button className='about__readbtn about__readbtn--whitebg'>Read more</button>
                    <button>
                        <img src={ArrowGreen} alt='arrow'/>
                    </button>
                </div>
            </div>
        </div>
        <div className='about__activities'>
            <h2 className='about__h2'>Activities<br/><span className='about__line'></span></h2>
            <div className='container flex items-center justify-center'>
                <a><img src={ArrowLeft}/></a>
                <div className='flex justify-between gap-4 w-[80%]'>
                    <div className='flex flex-col'>
                        <img src={SliderImg} alt='slider'/>
                        <div className='about__activities--content'>
                            <div>
                                <h3>Lorem ipsum dolor sit amet </h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. Massa morbi sed amet nibh auctor </p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <img src={SliderImg} alt='slider'/>
                        <div className='about__activities--content'>
                            <div>
                                <h3>Lorem ipsum dolor sit amet </h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. Massa morbi sed amet nibh auctor </p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <img src={SliderImg} alt='slider'/>
                        <div className='about__activities--content'>
                            <div>
                                <h3>Lorem ipsum dolor sit amet </h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. Massa morbi sed amet nibh auctor </p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <img src={SliderImg} alt='slider'/>
                        <div className='about__activities--content'>
                            <div>
                                <h3>Lorem ipsum dolor sit amet </h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. Massa morbi sed amet nibh auctor </p>
                        </div>
                    </div>
                </div>
                <a><img src={ArrowRight}/></a>
            </div>
        </div>
        <div className='about__clients'>
            <img src={Client1}/>
            <img src={Client2}/>
            <img src={Client3}/>
            <img src={Client4}/>
            <img src={Client5}/>
            <img src={Client6}/>
        </div>
    </div>
  )
}

export default AboutUs