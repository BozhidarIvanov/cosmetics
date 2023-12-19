import { useState } from "react";

const Register = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const onChangeNameHandler = (e) => {
    setName(e.target.value)
};

const onChangeEmailHandler = (e) => {
    setEmail(e.target.value)
};

const onChangePasswordHandler = (e) => {
    setPassword(e.target.value)
};

const handleSubmit = async (e) => {
     e.preventDefault();
     const result = await fetch("http://localhost:3030/users/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      console.log(result);
     console.log('Name:', name);
     console.log('Email:', email);
     console.log('Password:', password);

}



return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
       <input
       type="text"
       id="name"
       value={name}
       onChange={onChangeNameHandler}
       />
       <br />
        <label htmlFor="email">Email</label>
       <input
       type="text"
       id="email"
       value={email}
       onChange={onChangeEmailHandler}
       />
       <br />
        <label htmlFor="password">Password</label>
       <input
       type="password"
       id="password"
       value={password}
       onChange={onChangePasswordHandler}
       />
       <br />
       <button type="submit">Sign in</button>
    </form>
)
};

export default Register;