const Challenge = () => {

    const valor1 = 2;
    const valor2 = 2;

    return (
        <div>
            <h1>{valor1} + {valor2}</h1>
            <button onClick={() => console.log(valor1+valor2)}>Clique para ver a soma!</button>
        </div>
        
    )
}

export default Challenge