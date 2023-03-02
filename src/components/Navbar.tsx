const Navbar = () => {
  return (
    <nav className='navbar border-b-2 bg-base-100'>
      <div className='flex-1'>
        <a className='btn-ghost btn text-xl normal-case'>hyorim cho</a>
      </div>
      <div className='flex-none gap-2'>
        <div className='dropdown-end dropdown'>
          <label tabIndex={0} className='btn-ghost btn-circle avatar btn'>
            <div className='w-10 rounded-full'>
              <img src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png' />
            </div>
          </label>
          <ul tabIndex={0} className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
