import React, { useEffect, useRef, useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import ListItem from './ListItem';


 function Head() {
    const [isSide,setIsSide] = useState(false)

    

    const [toggle, setToggle] = useState(false)

    


    const dataRef = useRef()
    const update = (e) =>{
        if (!dataRef.current .contains(e.target)) {            
            setIsSide(true)
        }
    }
        // console.log(update)

    useEffect(() => {
        document.addEventListener('click', update, true)

        return () => {
          document.removeEventListener('click', update, true)
        }
      }, [])

    const toggleResponsive = () => {
        setToggle(!toggle);
      }
    
    

    

  return (
    <>
        <div className="logo mainHead nop">
            <div className="m1 bord nop">
                <div className="album">
                    <img src="https://shashitharoor.in/assets/images/logo.jpg" alt="logo1"/>
                </div>
                <div className="Icon side">
                    <div className="IconSquare"><a href="http://www.facebook.com/ShashiTharoor?ref=ts&amp;fref=ts" target="_blank"><i className='fa fa-facebook-square fa-lg facebook'></i></a></div>
                    <div className="IconSquare"><a href="https://twitter.com/ShashiTharoor" target="_blank"><i className="fa fa-twitter-square fa-lg twitter"></i></a></div>
                    <div className="IconSquare"><a href="http://www.youtube.com/shashitharoor" target="_blank"><i className="fa fa-youtube-square fa-lg youtube"></i></a></div>
                    <div className="IconSquare"><a href="https://www.instagram.com/shashitharoor/?hl=en" target="_blank"><i className="fa fa-instagram fa-lg instagram"></i></a></div>
                </div>
            </div>
        </div>
        <nav className='nbar nbar-i nbar-static bars'>
            <div className='c1 tp' ref={dataRef}>
                <div className='nbar-header'  onClick={() =>setIsSide(!isSide)}>
                <button type="button" className={ `nbar-toggle collapsed`} onClick={() => isSide}  data-toggle='col' aria-expanded='false' data-target='#sbar' aria-controls="nbar" > 
                    <span className="sr-only">Toggle navigation</span> 
                    <span className="icon-bar"></span> 
                    <span className="icon-bar"></span> 
                    <span className="icon-bar"></span> 
                </button>
                </div>
                {toggle ? (
                <div id='sbar' className={` ${ toggle ? "sbar-col " : 'sbar-col col'}`} onClick={toggleResponsive} aria-expanded='false' 
                  >
                    <ListItem/>
                    
                </div>):(
                    <div id='sbar' className=' sideBar sideMenu' onClick={() =>isSide} aria-expanded='false' style={{ left: isSide ? '-100%' : '0' }}>
                        <ListItem/>
                    </div>
                )}
            </div>
        </nav>
    </>
  )
}
 

 export default Head