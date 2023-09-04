import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/asyncActions/fetchUsers";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const users = useSelector(state => state.users.users)

    return (
        <div className="App bg-gray-800 h-screen">
            <div className="cards grid grid-cols-3 gap-4 justify-center items-center p-4">
                {users.map(user =>
                    <div key={user.id} className=" bg-slate-500 rounded p-2 border-1 justify-center">
                        <p>{user.name}</p>
                        <p>st. {user.address.street}</p>
                        <p>{user.phone}</p>
                        <p>Company: {user.company.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
