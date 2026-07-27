export function Home({dados}: {dados:any}){

    const metarString = dados.data ? dados.data[0]: "Sem dados disponiveis"

    return(
        <>
            <pre>
                {JSON.stringify(dados, null, 2)}
            </pre>
        </>
    )
}