const Person = () => <h2>jion doe</h2>;

const Message = () => {
    return <p>this is my message</p>
}

function Greeting() {
     return (
        <div> 
            <Person />
            <Message />
             Greeting 
        </div>
     )   
}

export default Greeting;