import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuscaCep from "../components/BuscaCepForm";
import Cadastro from "../components/Cadastro";
import Listagem from "../components/Listagem";
import CadastroClientes from "../components/CadastroClientes";
import ListagemClientes from "../components/ListagemClientes";

const AppRouter =()=>{
    return (
      <BrowserRouter>
                <Routes>
                 <Route path="buscacep"element={<BuscaCep/>}/>
                    
                 <Route path="cadastro"element={<Cadastro/>}/>

                 <Route path="cliente"element={<CadastroClientes/>}/>

                 <Route path="cliente/listagem" element={<ListagemClientes/>}/>
                    
                 <Route path="listagem"element={<Listagem/>}/>
                    
                 </Routes>
     </BrowserRouter>
    );
}

export default AppRouter;