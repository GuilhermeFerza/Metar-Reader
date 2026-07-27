import React, { createContext, useContext, useState } from "react"

interface MetarContextType{
    metarJson: any
    setMetarJson: (data: any) => void
}

const MetarContext = createContext<MetarContextType | undefined>(undefined)

export function MetarProvider({children}: {children: React.ReactNode}){
    const [metarJson, setMetarJson] = useState<any>(null)

    return(
        <MetarContext.Provider value={{metarJson, setMetarJson}}>
            {children}
        </MetarContext.Provider>
    )
}

export function useMetar(){
    const context = useContext(MetarContext);
    if(!context) throw new Error('useMetar deve ser usado dentro de MetarProvider')
        return context;
}