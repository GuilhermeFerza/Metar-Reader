import React, { useState } from 'react'
import styles from './Header.module.css'
import {  Search } from 'lucide-react'

export function Header(){

    const [name, setName] = useState('');
    const API_KEY = import.meta.env.VITE_API_KEY
    const API_URL = import.meta.env.VITE_API_URL

    const handleSearch = async (e: React.FormEvent) =>{
        e.preventDefault();

        if (!name) return;

        try{
            const response = await fetch(`${API_URL}/api/metar/${name}`, {
                method: 'GET',
                headers: {
                    "X-API-Key": `${API_KEY}`
                }
            });
            if (!response.ok){
                throw new Error("Erro ao buscar dados no servidor") 
            }
            const dados = await response.json();
            console.log("Dados do Metar:", dados);
            setName('');
        }catch(error){
            console.error(error)
        }
    }

    return(
        <header className={styles.headerContainer}>
            <h1>Metar Reader</h1>
            <nav>
                <div className={styles.inputGroup}>
                    <input 
                        type='text' 
                        placeholder='KJFK' 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required
                    />
                    
                    <Search className={styles.mag} onClick={handleSearch}/>
                </div>
            </nav>
        </header>
    )
}