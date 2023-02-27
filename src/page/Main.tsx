import { useState } from 'react';
import './style.css';
interface IPage
{
  name : string;
  component : React.ReactNode;
}
function Main() {
  const arr : IPage[] = [
    {
      name : 'A',
      component : <PageA/>
    },
    {
      name : 'B',
      component : <PageB/>
    },
    {
      name : 'C',
      component : <PageC/>
    },
    {
      name : 'D',
      component : <PageD/>
    },
  ]
  const [page, setPage] = useState<IPage>(arr[0]);
  return (
    <div>
      <div className='header'>Wanted Pre-onBoarding course</div>
      <div className='body'>
        <div className='nav'>
          {/* <div className='on'>Page A</div>
          <div>Page B</div>
          <div>Page C</div>
          <div>Page D</div> */}
          { arr.map((_page)=>{
            return  <div 
                      className={page.name == _page.name ? "on" : ""}
                      onClick={()=>{setPage(_page)}}
                    >Page {_page.name}</div>
          }) }
        </div>
        <div className='content'>
          {page.component}
        </div>
      </div>      
    </div>
  );
}
function PageA() {
  return <div className='page'>This Is Page A!</div>
}
function PageB() {
  return <div className='page'>This Is Page B!</div>
}
function PageC() {
  return <div className='page'>This Is Page C!</div>
}
function PageD() {
  return <div className='page'>This Is Page D!</div>
}

export default Main;
