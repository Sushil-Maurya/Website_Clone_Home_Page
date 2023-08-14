import React, { useState } from 'react'
import {Dropdown} from 'react-bootstrap'


function ListItem() {

    const [level, setLevel] = useState(false)
    const [fiction, setFiction] = useState(false)
    const [write, setWrite] = useState(false)
    const [drop, setDrop] = useState(false)

    const [handle, setHandle] = useState(false)


    const click = () =>{
        setDrop(!drop)
    }

    const has = () => {
        setHandle(!handle)
    }

    const done = () => {
        setLevel(!level)
    }

    const fic = () =>{
        setFiction(!fiction)
    }

    const page =() => {
        setWrite(!write)
    }
  return (
    <>
        <ul className='ulist nav-ulist '  >
                        <li className='active'><a href='#'>Home</a></li>
                        <li className={`${drop ? 'dropdown open': 'dropdown '}`} onClick={click}><a href="#about" className="dropdown-toggle" data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>About</a>
                        
                            <ul className= 'dropdown-menu' >
                                <li><a href="#">Biography</a></li>
                                <li><a href="#">In the UN</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">CTF</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>

                        </li>
                        <li className='down' onClick={has}><a href="#" className="dropdown-toggle" data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>In Parliament </a>
                        
                            <ul className={`${handle ? '' : 'dropdown-menu'}`} >
                                <li><a href="#q">Questions in Parliament</a></li>
                                <li><a href="#d">Debates & Speeches</a></li>
                                <li><a href="#p">Private Member’s Bills</a></li>
                                <li><a href="#c">Parliamentary Committees</a></li>
                                <li><a href="#i">Other interventions</a></li>
                            </ul>

                        </li>
                        <li className='down' onClick={done}><a href="#" className="dropdown-toggle" data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Constituency </a>
                        
                            <ul className={`${level ? '' : 'dropdown-menu'}`} >
                                <li><a href="#">MP’s Reports</a></li>
                                <li><a href="#">MPLADS</a></li>
                                <li><a href="#">About Thiruvananthapuram</a></li>
                                <li><a href="#">Shashi Tharoor on Kerala</a></li>
                            </ul>

                        </li>
                        <li className='down' onClick={fic}><a href="#" className="dropdown-toggle" data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Books </a>
                            <ul className={`${fiction ? '' : 'dropdown-menu'}`} >
                                <li><a href="#">Fiction</a></li>
                                <li><a href="#">Non-Fiction</a></li>
                            </ul>

                        </li>
                        <li><a href="#">Interviews</a></li>
                        <li><a href="#">Press</a></li>
                        <li className='down' onClick={page}><a href="#" className="dropdown-toggle" data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Writings</a>
                            <ul className={`${write ? '' : 'dropdown-menu'}`}  >
                                <li><a href="#">My Articles</a></li>
                                <li><a href="#">Articles by Others</a></li>
                                <li><a href="#">Quotes</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>Shashi Tharoor for INC President</a></li>
                    </ul>
    </>
  )
}

export default ListItem