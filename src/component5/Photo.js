import React, { useEffect, useState } from 'react'
import { Picture } from './ImageFiles'

function Photo() {
    const [data, setData] = useState(0)
    const [img, setImg] = useState(true)
    const [id, setId] = useState(null)

    useEffect(() => {
        if (img){
            setImg(false);
            setId(
                setTimeout(() => {
                    next();
                    setImg(true);
                    
                }, 2000)
            )
        }
    }, [img])
    // console.log(img)
    const next = () => {
        setData(
            data === Picture.length - 1 ? 0 : data + 1
        )
    }

    const prev = () => {
        setData(
            data === Picture.length - 1 ? 0 : data - 1
        )
    }

    const autoStop = () => {
        if (id > 0) {
            clearTimeout(id);
            setImg(false);
        }
    }

    const autoStart = () => {
        if (!img) {
            setImg(true);
        }
    }
    // console.log(data.url)
  return (
    <>
        <div>
            {/* {data.map((item) => {
                return(
                    <div >{item}</div>
                )
            })} */}
        </div>

        {/* <div = className='n1 nop'>
                    <div = className='m1 nop'>
                        <div id='Writings' = className='n2 slide' data-ride='n2'>
                            <ol = className='indicators'>
                            <li data-target="#Writings" data-slide-to="0" = className=""></li>
                            <li data-target="#Writings" data-slide-to="1" = className=""></li>
                            <li data-target="#Writings" data-slide-to="2" = className=""></li>
                            </ol>
                            <div = className='inner' role='list'>
                                <div = className='item active'>
                                <a href="">
                                    <img = className="first-slide" src="https://shashitharoor.in/assets/image/book/edit_attachment_1581917778.jpg" alt="First slide"/>
                                    <div = className="caption2">
                                    <div = className="cam">PRIDE, PREJUDICE AND PUNDITRY:…</div>
                                    </div>
                                </a>
                                </div>
                                <div = className="item active">
                                    <a href="#">
                                    <img = className="first-slide" src="https://shashitharoor.in/assets/image/book/edit_attachment_956441873.jpg" alt="First slide"/>
                                    <div = className="caption2">
                                    <div = className="cam">The Battle Of Belonging: On Nationalism,....</div>
                                    </div>
                                    </a>
                                </div>
                                <div = className="item active">
                                    <a href="#">
                                    <img = className="first-slide" src="https://shashitharoor.in/assets/image/book/edit_attachment_1553010344.jpg" alt="First slide"/>
                                    <div = className="caption2">
                                    <div = className="cam">The Paredoxical Prime Minister</div>
                                    </div>
                                    </a>
                                </div>
                                <div = className="item active"> 
                                    <a href="#"> 
                                    <img = className="first-slide" src="https://shashitharoor.in/assets/image/book/edit_attachment_1190753014.jpg" alt="First slide"/>
                                    <div = className="caption2">
                                    <div = className="cam">Why I am a Hindu </div>
                                    </div>
                                    </a>
                                </div>
                                <div = className="item active"> 
                                <a href="#">
                                        <img = className="first-slide" src="https://shashitharoor.in/assets/image/book/rep_705090695.jpg" alt="First slide"/>
                                        <div = className="caption2">
                                        <div = className="cam">Reasons of State</div>
                                        </div>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
    </>
  )
}

export default Photo

