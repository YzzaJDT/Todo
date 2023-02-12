import { useState } from "react"
export default function Done(){
    const [todos, setTodos] = useState([])
    
    function deleteClicked(index){
        let modifedTodos = todos.filter((data, todoIndex) => {
            if(index !== todoIndex)
                return data;
        })
        setTodos(modifedTodos)
    }

    return (
        <div className="flex justify-center flex-col items-center">
            <div className="grow shrink-0 w-[400px]">
                <div className="pt-5">
                <div className="text-2xl font-bold">Done:</div>
                </div>
                <ul>
                    {todos.map((todo, index) => {
                        if (todo.done == 'True'){
                            return(
                            <li className="text-lg pt-5 flex" key={index}>
                                <div className="grow">
                                    <div className="font-bold">{index+1}: {todo.title}</div>
                                    <div>{todo.description}</div>
                                </div>
                                <div>
                                    <button onClick={() => deleteClicked(index)} className="mt-3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        )}
                    })}
                </ul>
            </div>
        </div>
    )
}