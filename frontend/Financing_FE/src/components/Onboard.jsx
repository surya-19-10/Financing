import { useState } from "react"
import axios from "axios"

const Onboard = () => {
  const [inputs, setInputs] = useState({
    "firstName": "",
    "middleName": "",
    "lastName": "",
    "primaryContact": "",
    "email": "",
    "principalAmount": "",
    "commissionPercentage": "",
    "ftype": "B",
    "secondaryContact": "",
    "moneyLenderId": 1
})

function beCall() {
  axios({
    url: 'http://localhost:8080/account/create',
    method: 'POST',
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkc3BAZ21haWwuY29tIiwiaWF0IjoxNzQyNjM0NDg0LCJleHAiOjE3NDI2MzYyODR9.LwehH33ZxhBtFAMIpH7nE65Q4nYNILjCZ16g4Xksdpc",
      "Content-Type": "application/json"
    },
    data: JSON.stringify(inputs)
  }).then((res)=> {console.log(res)}).catch((err)=> console.log(err))
}
  const handleChange = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name] : value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
    beCall(inputs)
  }
  return (
    <div className="flex items-center justify-center h-[91vh]">
      <div className="flex flex-col gap-7 rounded-lg shadow-basecolor3 shadow-md p-10 border-x border-basecolor">
        <div className="flex bg-basecolor4 p-5 rounded-lg shadow-gray-400 shadow justify-center"><h2 className="text-4xl text-basecolor">ONBOARD</h2></div>
        <hr className="border-basecolor3"/>
        <form action="" method="post" className="flex gap-7 flex-col" onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <div>
              <span className="text-basecolor fixed text-[12px] pl-3">First Name *</span>
              <input type="text" name="firstName" value={inputs.firstName || ""} onChange={handleChange} className="border border-basecolor rounded-lg p-3 pt-5" required/>
            </div>
            <div>
              <span className="text-basecolor fixed text-[12px] pl-3">Middle Name</span>
              <input type="text" name="middleName" value={inputs.middleName || ""} onChange={handleChange} className="border border-basecolor rounded-lg p-3 pt-5"/>
            </div>
            <div>
              <span className="text-basecolor fixed text-[12px] pl-3">Last Name *</span>
              <input type="text" name="lastName" value={inputs.lastName || ""} onChange={handleChange} className="border border-basecolor rounded-lg p-3 pt-5" required/>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1/2">
              <span className="text-basecolor fixed text-[12px] pl-3">Primary Contact *</span>
              <input type="number" name="primaryContact" value={inputs.primaryContact || ""} onChange={handleChange} className="border border-basecolor rounded-lg w-full p-3 pt-5" required/>
            </div>
            <div className="flex-1/2">
              <span className="text-basecolor fixed text-[12px] pl-3">Secondary Contact</span>
              <input type="number" name="secondaryContact" value={inputs.secondaryContact || ""} onChange={handleChange} className="border border-basecolor rounded-lg w-full p-3 pt-5"/>
            </div>
          </div>
          <div>
            <div className="flex-1/2">
              <span className="text-basecolor fixed text-[12px] pl-3">Email *</span>
              <input type="email" name="email" value={inputs.email || ""} onChange={handleChange} required className="border border-basecolor rounded-lg w-full p-3 pt-5"/>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1/2">
              <span className="text-basecolor fixed text-[12px] pl-3">Principal Amount *</span>
              <input type="number" name="principalAmount" value={inputs.principalAmount || ""} onChange={handleChange} className="border border-basecolor rounded-lg w-full p-3 pt-5" required/>
            </div>
            <div className="flex-1/2">
              <span className="text-basecolor fixed text-[12px] pl-3">Commission Percentage *</span>
              <input type="number" name="commissionPercentage" value={inputs.commissionPercentage || ""} onChange={handleChange} className="border border-basecolor rounded-lg w-full p-3 pt-5" required/>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1/2">
              <input type="submit" value="Submit" className="button w-full"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Onboard