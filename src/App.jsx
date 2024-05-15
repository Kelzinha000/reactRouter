import { BrowserRouter, Routes, Route } from "react-router-dom"

// O BrowserRouter deve ser o componente que envolve tudo que depende do react-router.
// Routes define as áreas em que vamos colocar os nossos route
//Route recebe o caminho em path. Se esse caminho for o mesmo do url ele ira renderizar o componente que estiver dentro de element={}


const App = () =>{
 return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/sobre' element={<Sobre/>} />
  </Routes>
  </BrowserRouter>
 )
}


export default App;