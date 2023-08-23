import  { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./pages/Product";
import News from "./pages/News";
import Login from "./pages/Login/Index";
import Pin from "./pages/Pin/Index"
import Reqres from "./pages/Reqres/Index";
import Movies from "./pages/Movies/Index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/News" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pin" element={<Pin />} />
          <Route path="/products" element={<Product />} />
          <Route path="/" element={<Movies />} />
          <Route path="/reqres" element={<Reqres />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;



// ----- PENGGUNAAN PROPS, LIFECYCLE COMPONENT  -----
// import { Component } from 'react'


// export default App


// ----- PENGGUNAAN STATE PADA PERUBAHAN WARNA, INCREMENT, DAN DECREMENT -----
// import { Component } from 'react'
// import Card from './components/Card'

//   }
// }

// export default App
// export default App


// import  { Component } from 'react'
// import Card from './component/Card'

// import Cardmovie from './component/Cardmovie'
// import data from "../src/dummy/fashion.json"
// import data1 from "../src/dummy/fashion2.json"
// import Cardmovie2 from './component/Cardmovie2'
// export class App extends Component {
//   render() {
//     return (
//   <section className=''>
//     <nav>
//     <div className=''>
//     <Card/> 
//     </div> 
//     </nav>

//     <p className=' text-2xl text-center'>LIST FAVORITE MOVIES </p>
//     <div className='flex flex-wrap '>
//           {
//             data1.map((item, index) => {
//               return (
//                 <div className='mx-auto' >
//                   <Cardmovie2
//                     key={index}
//                     id="fashion"
//                     image={item.image}
//                     title={item.title}
//                   />
//                 </div>
//               )
//             })
//           }
//         </div>

//     <p className=' text-2xl text-center'>LIST MOVIES</p>
//     <div className='flex flex-wrap '>
//           {
//             data.map((item, index) => {
//               return (
//                 <div className='mx-auto' >
//                   <Cardmovie
//                     key={index}
//                     id="fashion"
//                     image={item.image}
//                     title={item.title}
//                     detail={item.detail}

//                   />
//                 </div>
//               )
//             })
//           }
//         </div>

//   </section>


  
//     )
//   }
// }

// export default App