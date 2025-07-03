import { useState } from "react";
import "./data.css";
import Data from "./Data";

function App() {
  const [form, setform] = useState({
    company_name: "",
    company_slogan: "",
    name: "",
    job_position: "",
    phone_1:"",
    phone_2:"",
    phone_3:"",
    email:"",
    website:"",
    address:"",
    image:null
  });

  const handle = (e) => {
    setform({ ...form, [e.target.name]: [e.target.value] });
  };

  return (
    <>
      <h3>Fill your Details to get the ID Card</h3>
      <div className="container">
      <form action="">
        <table>
          <tbody>
            <tr>
              <td>
                <label>Company Name: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="company_name"
                  value={form.company_name}
                  placeholder="Company_name"
                  onChange={handle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Company Slogan: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="company_slogan"
                  value={form.company_slogan}
                  placeholder="company_slogan"
                  onChange={handle}
                />
              </td>
            </tr>
           
            <tr>
              <td>
                <label>Your Name: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="name"
                  onChange={handle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Job Position: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="job_position"
                  value={form.job_position}
                  placeholder="job_position"
                  onChange={handle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Phone 1: </label>
              </td>
              <td>
                <input
                  type="number"
                  name="phone_1"
                  value={form.phone_1}
                  placeholder="phone_1"
                  onChange={handle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Phone 2: </label>
              </td>
              <td>
                <input
                  type="number"
                  name="phone_2"
                  value={form.phone_2}
                  placeholder="phone_2"
                  onChange={handle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Phone 3: </label>
              </td>
              <td>
                <input
                  type="number"
                  name="phone_3"
                  value={form.phone_3}
                  placeholder="phone_3"
                  onChange={handle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email: </label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="email"
                  onChange={handle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Website: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  placeholder="website"
                  onChange={handle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Address: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  placeholder="address"
                  onChange={handle}
                />
              </td>
            </tr>
             <tr>
              <td><label>Upload Image:</label></td>
              <td>
                <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                setform({ ...form, image: URL.createObjectURL(e.target.files[0]) })
                }
                />
                </td>
            </tr>
          </tbody>
        </table>
      </form>
      <Data
        company_name={form.company_name}
        company_slogan={form.company_slogan}
        name={form.name}
        job_position={form.job_position}
        phone_1={form.phone_1}
        phone_2={form.phone_2}
        phone_3={form.phone_3}
        email={form.email}
        website={form.website}
        address={form.address}
        image={form.image}
      />
      </div>
    </>
  );
}

export default App;



 // const{name,value}=e.target;

    // if(e.target.name =='company_name'){
    //   setform({company_name:value,company_slogan:form.company_slogan,name:form.name,job_position:form.job_position});
    // }
    // else if(e.target.name=='company_slogan'){
    //   setform({company_name:form.company_name,company_slogan:value,name:form.name,job_position:form.job_position});
    // }
    // else if(e.target.name=='name'){
    //   setform({company_name:form.company_name,company_slogan:form.company_slogan,name:value,job_position:form.job_position});
    // }
    // else{
    //   setform({company_name:form.company_name,company_slogan:form.company_slogan,name:form.name,job_position:value});
    // }