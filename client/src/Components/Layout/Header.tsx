import React, { useState } from 'react'
import styles from './Header.module.css'
import { Search } from 'lucide-react'
import { useMetar } from '../../Context/MetarContext';

export function Header(){
    const [name, setName] = useState('');
    const { setMetarJson } = useMetar(); 
    
    const API_KEY = import.meta.env.VITE_API_KEY
    const API_URL = import.meta.env.VITE_API_URL

    const handleSearch = async (e: React.FormEvent) =>{
        e.preventDefault();
        if (!name) return;

        try {
            const response = await fetch(`${API_URL}/api/metar/${name}`, {
                method: 'GET',
                headers: { "X-API-Key": `${API_KEY}` }
            });
            if (!response.ok) throw new Error("Erro ao buscar dados no servidor");
            
            const dados = await response.json();
            console.log("Dados recebidos na API:", dados);
            setMetarJson(dados);
            setName('');
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <header className={styles.headerContainer}>
            <h1>Metar Reader</h1>
            <form className={styles.inputGroup} onSubmit={handleSearch}>
                <input 
                    type='text' 
                    placeholder='KJFK' 
                    value={name}
                    onChange={(e)=>setName(e.target.value.toUpperCase())}
                    required
                />
                <button type="submit" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex' }}>
                    <Search className={styles.mag} />
                </button>
            </form>
        </header>
    )
}