import { React , useState} from "react";
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'

function Nav(){
    // nav is starting off false
    const [nav, setNav] = useState(false)
    // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
    const handleClick = () => setNav(!nav)

    return (
        
        <nav className='flex justify-between p-5 items-center border-b nav bg-stone-100 '>
        <a href = "/"><img src="./src/components/element/fgo.png" width='113px' height='60px'></img></a>
        <ul className='hidden  md:flex gap-6'>
        <Link to='/FriendGacha'><li className="space-x-2 text-center rounded px-2 py-2 border-b-4 border-stone-400 hover:border-stone-600 bg-stone-300 hover:bg-stone-500">FriendGacha</li></Link>
        <Link to='/StoryBanner'><li className="space-x-2 text-center rounded px-2 py-2 border-b-4 border-stone-400 hover:border-stone-600 bg-stone-300 hover:bg-stone-500">StoryBanner</li></Link>
        <Link to='/CE_Database'><li className="space-x-2 text-center rounded px-2 py-2 border-b-4 border-stone-400 hover:border-stone-600 bg-stone-300 hover:bg-stone-500">CE Database</li></Link>
        <Link to='/Servant_Database'><li className="space-x-2 text-center rounded px-2 py-2 border-b-4 border-stone-400 hover:border-stone-600 bg-stone-300 hover:bg-stone-500">Servant Database</li></Link>
      </ul>
    {/* Button */}
      <div className=' md:hidden z-10' onClick={handleClick}>
        {nav ? <FaTimes size={25} color='white' /> : <RxHamburgerMenu size={25}/>}
      </div>
      <ul
        className={`${
          nav
            ? 'text-white opacity-100 transform translate-x-0'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl space-y-4 text-center`}
        onClick={() => setNav(false)}
      >
        <Link to='/FriendGacha'><li className='w-screen bg-stone-300 hover:bg-stone-500 text-zinc-800 hover:text-zinc-300 font-bold py-2 px-2 rounded border-b-4 border-stone-500 hover:border-stone-700'>FriendGacha</li></Link>
        <Link to='/StoryBanner'><li className='w-screen bg-stone-300 hover:bg-stone-500 text-zinc-800 hover:text-zinc-300 font-bold py-2 px-2 rounded border-b-4 border-stone-500 hover:border-stone-700'>StoryBanner</li></Link>
        <Link to='/CE_Database'><li className='w-screen bg-stone-300 hover:bg-stone-500 text-zinc-800 hover:text-zinc-300 font-bold py-2 px-2 rounded border-b-4 border-stone-500 hover:border-stone-700'>CE Database</li></Link>
        <Link to='/Servant_Database'><li className='w-screen bg-stone-300 hover:bg-stone-500 text-zinc-800 hover:text-zinc-300 font-bold py-2 px-2 rounded border-b-4 border-stone-500 hover:border-stone-700'>Servant Database</li></Link>
      </ul>



      </nav>
    ) 
}

export default Nav