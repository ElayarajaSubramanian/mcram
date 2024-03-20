import React from 'react'
import BannerImg from "../assets/images/aboutus-banner.jpg"
import AboutIcon from "../assets/images/about-icon.svg"
import ExpertiseIcon from "../assets/images/expertise-white.svg"
import ArrowBlack from "../assets/images/arrow-black.svg"
import ArrowGreen from "../assets/images/arrow-green.svg"
import ExpertiseGreenIcon from "../assets/images/expertise-green.svg"
import SliderImg from "../assets/images/slider-img.jpg"
import ChevronBlack from "../assets/images/chevron-black.svg"

const AboutUs = () => {
  return (
    <div className='container py-10'>
        <div className='flex justify-center gap-5'>
            <div className='flex flex-col gap-6'>
                <h2 className='about__h2'>About us</h2>
                <h3 className='about__h3'>McRam is an organization providing extensive services </h3>
                <div className='flex justify-between gap-6 px-6'>
                    <p className='font-semibold flex-1'>To further develop our association, we have established a corporate directive to maintain quality and innovative solutions is our core philosophy.</p>
                    <div className='flex-1'>
                        <p>Always believe on Optimized and innovative process to meet the customer requirements in a faster, better and quality to become an empowered consultant in the piping industries more than a job, we work for environmental safety and keeping people and operations safe and sounds by adapting Go Green</p>
                        <button className='about__btn mt-8'>Have A projects</button>
                    </div>
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
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur.</p>
            <p className='font-semibold text-3xl w-[70%]'>Lorem ipsum dolor sit amet consectetur Enim congue malesuada .</p>
        </div>
        <div className='flex justify-between gap-16 w-[80%] mx-auto my-0'>
            <div className='about__expertise about__expertise--greenbg'>
                <div className='flex flex-col gap-4 pb-5'>
                    <img src={ExpertiseIcon} className='about__expertise--icon' alt='expertise'/>
                    <h3>Pertroleum & Gas Energy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Enim congue malesuada sed sit ligula amet. Elementum amet risus fringilla tristique in ut.</p>
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
        <div className='container text-center flex gap-8 flex-col py-8 justify-center items-center'>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur.</p>
            <p className='font-semibold text-3xl w-[70%]'>Lorem ipsum dolor sit amet consectetur Enim congue malesuada .</p>
        </div>
        <div className='flex justify-between gap-4 w-[80%] mx-auto my-0'>
            <div className='flex flex-col gap-4'>
                <img src={SliderImg} alt='slider'/>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h3>Lorem ipsum dolor sit amet </h3>
                        <p className='text-limegreen text-xs'>Lorem ipsum dolor sit amet </p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa morbi sed amet nibh auctor </p>
                </div>
                <div className='flex gap-5'>
                    <span className='text-limegreen'>Explore More</span>
                    <img src={ChevronBlack} alt='chevron'/>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <img src={SliderImg} alt='slider'/>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h3>Lorem ipsum dolor sit amet </h3>
                        <p className='text-limegreen text-xs'>Lorem ipsum dolor sit amet </p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa morbi sed amet nibh auctor </p>
                </div>
                <div className='flex gap-5'>
                    <span className='text-limegreen'>Explore More</span>
                    <img src={ChevronBlack} alt='chevron'/>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <img src={SliderImg} alt='slider'/>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h3>Lorem ipsum dolor sit amet </h3>
                        <p className='text-limegreen text-xs'>Lorem ipsum dolor sit amet </p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa morbi sed amet nibh auctor </p>
                </div>
                <div className='flex gap-5'>
                    <span className='text-limegreen'>Explore More</span>
                    <img src={ChevronBlack} alt='chevron'/>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <img src={SliderImg} alt='slider'/>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h3>Lorem ipsum dolor sit amet </h3>
                        <p className='text-limegreen text-xs'>Lorem ipsum dolor sit amet </p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa morbi sed amet nibh auctor </p>
                </div>
                <div className='flex gap-5'>
                    <span className='text-limegreen'>Explore More</span>
                    <img src={ChevronBlack} alt='chevron'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutUs