const Events = () => {

    const handMyEvent = (e) => {
        console.log(e)
        console.log("Clicou")
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizado isso</h1>
        } else {
            return <h1>Tambem retorna isso!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>
                    Clique aqui tambem!
                </button>
                <button onClick={() =>{
                    if (true) {
                        console.log("Isso não deveria existir")
                    }
                }}>
                Clica aqui, por favor.
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;