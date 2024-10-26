import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className='flex justify-between py-[30px] bg-black px-[15px] text-white text-[20px] px-[70px]'>
        <p>React CRUD</p>
        <ul className='space-x-5'>
          <Link to="/">Home</Link>
          <Link to="/CreateUser" >Create User</Link>
          <Link to="/ShowUser" >Show User</Link>
        </ul>
      </nav >
    </>
  )
}

export default Navbar
