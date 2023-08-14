import React, { useEffect, useRef, useState } from 'react'
import { Picture2 } from './ImageFiles';


function Image2() {

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
              prevIndex === Picture2.length - 1 ? 0 : prevIndex + 1
            ),
          2000
        );
        return () => {
            resetTimeout();
          };
        }, [pic]);

  return (
    <>
        <div className='n1 nop'>
            <div className='m1 nop'>
                <div id='Writings' className='n2 slide' data-ride='n2'>
                    <ol className='indicators'>
                    {
                        Picture2.map((_, i) =>{
                            return(
                                <>
                                    <li data-target="#Writings" data-slide-to={i} className={`${pic === i ? 'active' : ''}`} key={i}></li>
                                </>
                            )
                        })
                    }
                    </ol>
                    <div className='inner' role='list'>
                    {
                        Picture2.map((img, i) =>{
                            // console.log(img)
                            return(
                                <>  
                                    <div className={`item ${pic === i ? 'active' : " "}`} key={i}>
                                        <a href="#d">
                                            <img className="first-slide" src={img.url} alt='logo' />
                                            <div className="caption3">
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
    </>
  )
}

export default Image2