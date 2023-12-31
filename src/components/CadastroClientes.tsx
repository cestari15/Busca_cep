import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
const CadastroClientes = () => {


    const [nome, setNome]= useState<string>("");
    const [celular, setCelular]= useState<string>("");
    const [email, setEmail]= useState<string>("");
    const [cpf, setCpf]= useState<string>("");
    const [dataNascimento, setdataNascimento]= useState<string>();
    const [cidade, setCidade]= useState<string>("");
    const [pais, setPais]= useState<string>("");
    const [rua, setRua]= useState<string>("");
    const [numero, setNumero]= useState<string>("");
    const [bairro, setBairro]= useState<string>("");
    const [cep, setCep]= useState<string>("");
    const [estado, setEstado]= useState<string>("");
    const [complemento, setComplemento]= useState<string>("");
    const [password, setPassword]= useState<string>("");

    const cadastrarCliente =(e: FormEvent) => {
            e.preventDefault();

            const dados = {
                nome: nome,
                celular:celular,
                email: email,
                cpf: cpf,
                dataNascimento:dataNascimento,
                cidade:cidade,
                pais:pais,
                rua:rua,
                numero:numero,
                bairro:bairro,
                cep:cep,
                estado:estado,
                complemento:complemento,
                password: password

            }
console.log(dados)
            axios.post('http://127.0.0.1:8000/api/Cliente/store',
            dados,
            {
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                }
            }
            ).then(function(response){
console.log(response.data)
            }).catch(function(error){
                console.log(error)
            });
    }



    const handleState = (e: ChangeEvent <HTMLInputElement>)=>{
        if(e.target.name === "nome"){
            setNome(e.target.value);
        }
        if(e.target.name === "celular"){
            setCelular(e.target.value);
        }
        if(e.target.name === "cpf"){
            setCpf(e.target.value);
        }
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }
        if(e.target.name === "dataNascimento"){
            setdataNascimento(e.target.value);
        }
        if(e.target.name === "cidade"){
            setCidade(e.target.value);
        }
        if(e.target.name === "pais"){
            setPais(e.target.value);
        }
        if(e.target.name === "rua"){
            setRua(e.target.value);
        }
        if(e.target.name === "numero"){
            setNumero(e.target.value);
        }
        if(e.target.name === "bairro"){
            setBairro(e.target.value);
        }
        if(e.target.name === "cep"){
            setCep(e.target.value);
        }
        if(e.target.name === "estado"){
            setEstado(e.target.value);
        }
        if(e.target.name === "complemento"){
            setComplemento(e.target.value);
        }
        if(e.target.name === "password"){
            setPassword(e.target.value);
        }
    }
   
  




    return (
        <div>
            <Header />
            <main>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Clientes</h5>
                            <form onSubmit={cadastrarCliente} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="ecelularail" className='form-label' >Celular</label>
                                    <input type="text" name='celular' className='form-control'required  onChange={handleState}/>
                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label'>E-mail</label>
                                    <input type="text" name='email' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="text" name='cpf' className='form-control' required  onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="dataNascimento" className='form-label'>Sua Data de nascimento</label>
                                    <input type="text" name='dataNascimento' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cidade" className='form-label'>Cidade</label>
                                    <input type="text" name='cidade' className='form-control' required onChange={handleState}/>
                                </div>

                                <div className='col-6'>
                                    <label htmlFor="estado" className='form-label'>Estado</label>
                                    <input type="text" name='estado' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="pais" className='form-label'>País</label>
                                    <input type="text" name='pais' className='form-control' required onChange={handleState}/>
                                </div>

                                <div className='col-6'>
                                    <label htmlFor="rua" className='form-label'>Rua</label>
                                    <input type="text" name='rua' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="numero" className='form-label'>Numero</label>
                                    <input type="text" name='numero' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="bairro" className='form-label'>Bairro</label>
                                    <input type="text" name='bairro' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cep" className='form-label'>Cep</label>
                                    <input type="text" name='cep' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="complemento" className='form-label'>Complemento</label>
                                    <input type="text" name='complemento' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Senha</label>
                                    <input type="text" name='password' className='form-control' required onChange={handleState}/>
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm'>Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CadastroClientes;