const Person = (props: any) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Group: {props.group}</h2>
        </div>
    )
}

export default Person;