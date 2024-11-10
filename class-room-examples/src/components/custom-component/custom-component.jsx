import { useState } from "react";
import { DataGrid } from "../../controlled-components/data-grid";
import { CustomField } from "../../controlled-components/custom-field";

export function CustomComponent()
{
    const [employees, setEmployees] = useState([{FirstName:'Kiran', LastName:'Rao', Designation:'Developer', Salary:45000}, {FirstName:'Rajesh', LastName:'Kumar', Designation:'Manager', Salary:120000}])
    const [layout, setLayout] = useState('grid');

    function handleLayoutChange(e){
        setLayout(e.target.value);
    }

    return(
        <div className="container-fluid">

            <h2>Controlled Components</h2>
            <div className="my-3 w-25">
                <label className="form-label">Select Layout</label>
                <div>
                    <select onChange={handleLayoutChange} className="form-select">
                        <option>Choose Layout</option>
                        <option value="grid">Grid</option>
                        <option value="card">Card</option>
                    </select>
                </div>
            </div>
            <DataGrid layout={layout} theme="table-warning" title="Products Data" fields={["Name", "Price"]} data={[{Name:"Samsung TV", Price:42000.44}, {Name:"Mobile", Price:24000.32}]} />
            <DataGrid theme="table-primary" title="Employee Details - Update 29-Sep-2024" fields={Object.keys(employees[0])}  data={employees} />
            
        </div>
    )
}