import axios from 'axios';
import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';


import styles from "../App.module.css";
import { CadastroClientesInterface } from '../interfaces/ClienteInterface';

const ListagemClientes = () => {

    console.log(Response)
    const [cliente, setCliente] = useState<CadastroClientesInterface[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/cliente/retornarTodos');
                setCliente(response.data.data);


            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'> Listagem de Usuários</h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Celular</th>
                                        <th>E-mail</th>
                                        <th>CPF</th>
                                        <th>Data de Nascimento</th>
                                        <th>Cidade</th>
                                        <th>Pais</th>
                                        <th>Rua</th>
                                        <th>Numero</th>
                                        <th>Bairro</th>
                                        <th>CEP</th>
                                        <th>Estado</th>
                                        <th>Complemento</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cliente.map(cliente => (
                                        <tr key={cliente.id}>
                                            <td>{cliente.id}</td>
                                            <td>{cliente.nome}</td>
                                            <td>{cliente.celular}</td>
                                            <td>{cliente.email}</td>
                                            <td>{cliente.cpf}</td>
                                            <td>{cliente.dataNascimento}</td>
                                            <td>{cliente.cidade}</td>
                                            <td>{cliente.pais}</td>
                                            <td>{cliente.rua}</td>
                                            <td>{cliente.numero}</td>
                                            <td>{cliente.bairro}</td>
                                            <td>{cliente.cep}</td>
                                            <td>{cliente.estado}</td>
                                            <td>{cliente.complemento}</td>
                                            <td>
                                                <a href="#" className='btn btn-primary btn-sm'>Editar</a>
                                                <a href="#" className='btn btn-danger btn-sm'>Excluir</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ListagemClientes;