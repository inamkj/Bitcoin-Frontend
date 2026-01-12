function UserDetails({ abc }) {
    
    return (
        <>
        
            
            <div className="user-details" style={{backgroundColor:"green"}} >
            <h2>{abc.name}</h2>
            <p>Age: {abc.age}</p>
            <p>Role: {abc.role}</p>
            <p>Address: {abc.address}</p>
            <p>Email: {abc.email}</p>
        </div>
    
    </>
    );
}

export default UserDetails;