import { useParams } from "react-router-dom";
import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";
import Page05 from "./pages/Page05";
import Page06 from "./pages/Page06";

const Page = () =>{
  const { id } =useParams();

  return(
   <div className="page">
      {id === 'page01' && <Page01 />}
      {id === 'page02' && <Page02 />}
      {id === 'page03' && <Page03 />}
      {id === 'page04' && <Page04 />}
      {id === 'page05' && <Page05 />}
      {id === 'page06' && <Page06 />}
  </div>
  )
}

export default Page;