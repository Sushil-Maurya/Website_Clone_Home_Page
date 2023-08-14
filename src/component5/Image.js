import React, { useEffect, useRef, useState } from 'react'
import Image1 from './Image1';
import Image2 from './Image2';
// import  {Images} from './Photo';

function Image() {
    const Images = [
        {
            url: "https://shashitharoor.in/assets/image/interview/shashitharoor.jpg",
            caption: "India@75 | Expanded notion of…"
        },
        {
            url: "https://shashitharoor.in/assets/image/interview/shashitharoor.jpg",
            caption: "Manifesto English"
        },
        {
            url: "https://shashitharoor.in/assets/image/interview/shashitharoor.jpg",
            caption: "A TRUE CITIZEN Exclusive Interview…"
        }
    ]

    const [pic, setPic] = useState(0);
    // console.log(pic)
    const dataRef = useRef(null);

    function resetTimeout() {
        if (dataRef.current) {
          clearTimeout(dataRef.current);
        }
      }


    useEffect(() => {
        resetTimeout();
        dataRef.current = setTimeout(
          () =>
            setPic((prevIndex) =>
              prevIndex === Images.length - 1 ? 0 : prevIndex + 1
            ),
          2000
        );
        return () => {
            resetTimeout();
          };
        }, [setPic, Images.length]);

    

  return (
    <>
        <div className='logo nop img-slider'>
            <div className='m1 nop'>
                <div className='n1 nop'>
                    <div className='m1 nop'>
                        <div id='Interviews' className='n2 slide' data-ride='n2'>
                            <ol className='indicators' >
                            {
                                Images.map((_, i) =>{
                                    return(
                                        <>
                                            <li data-target="#Interviews" data-slide-to={i} className={`${pic === i ? 'active' : ''}`} key={i}></li>
                                        </>
                                    )
                                })
                            }
                            </ol>
                            <div className='inner' role='list'>
                                    {
                                        Images.map((img, i) =>{
                                            // console.log(img)
                                        return(
                                            <>  
                                                <div className={`item ${pic === i ? 'active' : " "}`} key={i}>
                                                    <a href="#d">
                                                        <img className="first-slide" src={img.url} alt='logo'/>
                                                        <div className="caption1">
                                                        <div className="cam">{img.caption}</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </>
                                        )}
                                        )
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            <Image1/>
            <Image2/>
            </div>
        </div>
    </>
  )
}

export default Image