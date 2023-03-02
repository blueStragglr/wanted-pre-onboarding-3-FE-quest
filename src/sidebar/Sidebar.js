import './sidebar.css';

function Sidebar() {
    return(
        <div className='sidebar'>
            <a href='/PageA' className='select-btn'>Page A</a>
            <a href='/PageB' className='select-btn'>Page B</a>
            <a href='/PageC' className='select-btn'>Page C</a>
        </div>
    );
}

export default Sidebar;