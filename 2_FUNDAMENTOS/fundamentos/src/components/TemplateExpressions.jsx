const TemplateExpressions = () => {
        const name = "Gabriel";
        const data = {
            age: 22,
            job: "Programmer",
        }
    return (
        <div>
            <h1>Bem vindo {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
        </div>
    )
}

export default TemplateExpressions;