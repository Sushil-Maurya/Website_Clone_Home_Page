import React from 'react'
import Image from './Image'
import Gallery from './Gallery'
import Footer from './Footer'
import Head from './Head'
function Body() {
  return (
    <>
    <div className='logo nop'>
        <div className='nop'>
        <Head/>
        </div>
        
        <div className='p1'>
            <div className='p2'>
                <div className='p3 active'>
                <img className="first-slide" src="https://shashitharoor.in/assets/image/slider/alb_2081918001.jpg" alt="First slide"/>
                <div className='p4'>
                    <div className='p5'>India matters to me and I would like to matter to India.</div>
                </div>
                </div>
            </div>
            <div className='c1'>
                <div className='c2'>
                    <div className='c3'>
                        <div className='h1'>DR. SHASHI THAROOR</div>
                        <div className='ht'>An author, politician, and former international civil servant, Shashi Tharoor straddles several worlds of experience. Currently a third-term Lok Sabha MP representing the Thiruvananthapuram constituency and Chairman of the Parliamentary Standing Committee on Information Technology, he has previously served as Minister of State for Human Resource Development and Minister of State for External Affairs in the Government of India. During his nearly three-decade long prior career at the United Nations, he served as a peacekeeper, refugee worker, and administrator at the highest levels, serving as Under-Secretary General during Kofi Annan's leadership of the organisation.</div>
                    </div>
                    <div className='c4'>
                        <div className='h1'>Dr. Shashi Tharoor For INC Presidential Election 2022</div>
                        <div className='ht1'>
                        <img src="https://shashitharoor.in/assets/images/Shashi_Tharoor_Manifesto.jpg" alt="First slide" style={{width: "200px"}}/>
                        </div>
                        <p><a href="#" className="btn" role="button">View More</a></p>
                    </div>
                </div>
                <div className="c2">
                    <div className="c5"></div>
                    <div className="c6 headLine"></div>
                    <div className="c5"></div>
                    </div>
            </div>
        </div>
        <Image/>
        <Gallery/>
        <Footer/>
    </div>
    </>
  )
}

export default Body