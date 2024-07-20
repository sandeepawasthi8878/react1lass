import { useState } from "react";

const App = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male");
    const [users, setUsers] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        const newUser = { username, email, gender };
        setUsers([...users, newUser]);
        setUsername("");
        setEmail("");
        setGender("male");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <form
                onSubmit={submitHandler}
                className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
            >
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">React Form</h1>

                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    className="block w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="block w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <div className="mb-6">
                    <label className="mr-4">
                        <input
                            name="gender"
                            type="radio"
                            value="male"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "male"}
                        />
                        <span className="ml-2">Male</span>
                    </label>
                    <label className="ml-4">
                        <input
                            name="gender"
                            type="radio"
                            value="female"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "female"}
                        />
                        <span className="ml-2">Female</span>
                    </label>
                </div>

                <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
                    Submit
                </button>
            </form>

            <div className="mt-10 w-full max-w-md">
                <hr className="border-t-2 border-gray-300" />
                <h2 className="text-2xl font-bold mt-6 mb-4 text-center text-gray-800">Users List</h2>
                <ol className="list-decimal list-inside">
                    {users.length > 0
                        ? users.map((user, index) => (
                            <li key={index} className="mb-4 bg-white p-4 rounded-lg shadow-sm">
                                <p><strong>Username:</strong> {user.username}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Gender:</strong> {user.gender}</p>
                            </li>
                        ))
                        : <p className="text-center">No User Found</p>}
                </ol>
            </div>
        </div>
    );
};

export default App;
