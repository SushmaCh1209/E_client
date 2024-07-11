// import { useState } from "react"
// export default function TodoList(){
//     const [formData,SubmitFormData] = useState({
//         time:"",
//         note:""
//     })
//     const [TableData,SubmitTable]=useState([])

//     function HandleForm(e){
//         const {name,value} = e.target
//         SubmitFormData({...formData,[name]:value});
//     }
//     function HandleSubmit(){
//         SubmitTable([...TableData,formData]);
//         SubmitFormData({
//             time:"",
//             note:""
//         })
//     }
//     return(
//         <div>
//             <h1>Todo List</h1>
//             <div class="form">
//                 <input name="time"
//                 type="time"
//                 value={formData.time}
//                 onChange={HandleForm}
//                 />
//                  <input name="note"
//                 type="text"
//                 value={formData.note}
//                 onChange={HandleForm}
//                 />
//                 <br/>
//                 <button onClick={HandleSubmit}>Submit</button>
//                 <br/>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Time</th>
//                             <th>Note</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {TableData.map((data,index)=>(
//                         <tr>
//                             <td>{data.time}</td>
//                             <td>{data.note}</td>
//                         </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//         </div>
//     )
// }
import React, { useState } from "react";
import './TodoList.css';

export default function TodoList() {
    const [formData, setFormData] = useState({
        time: "",
        note: ""
    });
    const [tableData, setTableData] = useState([]);

    function handleForm(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit() {
        setTableData([...tableData, formData]);
        setFormData({
            time: "",
            note: ""
        });
    }

    function handleDelete(index) {
        const newTableData = tableData.filter((_, i) => i !== index);
        setTableData(newTableData);
    }

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="form">
                <input
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleForm}
                    className="input-field"
                />
                <input
                    name="note"
                    type="text"
                    value={formData.note}
                    onChange={handleForm}
                    className="input-field"
                    placeholder="Enter note"
                />
                <br />
                <button onClick={handleSubmit} className="submit-button">Submit</button>
                <br />
                <table className="todo-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Note</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.time}</td>
                                <td>{data.note}</td>
                                <td>
                                    <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
