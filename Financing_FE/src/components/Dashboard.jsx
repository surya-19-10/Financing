import { IndianRupeeIcon } from "lucide-react"
import InterestTable from "./InterestTable"

const Dashboard = () => {
  return (
    <div className="flex flex-col">
        <div className="flex justify-evenly">
            <div className="m-9 p-2 w-72 flex flex-col gap-5 justify-center items-center rounded bg-basecolor2 shadow-md shadow-basecolor3">
                <h1 className="text-4xl text-basecolor4 font-medium">Investment</h1>
                <div className="flex items-center text-white font-semibold">
                    <h2 className="text-2xl">20000</h2>
                    <span><IndianRupeeIcon size={20}/></span>
                </div>
            </div>
            <div className="m-9 p-2 w-72 flex flex-col gap-5 justify-center items-center rounded bg-basecolor2 shadow-md shadow-basecolor3">
                <h1 className="text-4xl text-basecolor4 font-medium">Commission</h1>
                <div className="flex items-center text-white font-semibold">
                    <h2 className="text-2xl">2000</h2>
                    <span><IndianRupeeIcon size={20}/></span>
                </div>
            </div>
            <div className="m-9 p-2 w-72 flex flex-col gap-5 justify-center items-center rounded bg-basecolor2 shadow-md shadow-basecolor3">
                <h1 className="text-4xl text-basecolor4 font-medium">Interest</h1>
                <div className="flex items-center text-white font-semibold">
                    <h2 className="text-2xl">10000</h2>
                    <span><IndianRupeeIcon size={20}/></span>
                </div>
            </div>
        </div>
        <hr className="border-gray-200"/>
        {/* <div className="p-3 grid grid-cols-4 gap-3">
            <BorrowerCard/>
        </div> */}
        <div className="flex">
            <form method="post" className="border rounded-e-2xl border-gray-400 p-5 m-5 shadow shadow-basecolor3">
            <div>
                <div className="p-4">
                    <p className="text-basecolor font-semibold">Year</p>
                    <input type="number" min={2000} max={9999} className="w-54 border p-2 border-basecolor2 rounded outline-none"/>
                </div>
                <div className="p-4">
                    <p className="text-basecolor font-semibold">Month</p>
                    <select name="" id="" className="w-54 border p-2 border-basecolor2 rounded outline-none">
                        <option value="JAN">JAN</option>
                        <option value="FEB">FEB</option>
                        <option value="MAR">MAR</option>
                        <option value="APR">APR</option>
                        <option value="MAY">MAY</option>
                        <option value="JUN">JUN</option>
                        <option value="JUL">JUL</option>
                        <option value="AUG">AUG</option>
                        <option value="SEP">SEP</option>
                        <option value="OCT">OCT</option>
                        <option value="NOV">NOV</option>
                        <option value="DOC">DOC</option>
                    </select>
                </div>
                <div className="p-4">
                    <p className="text-basecolor font-semibold">Borrower</p>
                    <select name="" id="" className="w-54 border p-2 border-basecolor2 rounded outline-none">
                        <option value="">Choose</option>
                        <option value="FEB">Mohan Raj</option>
                    </select>
                </div>
                <div className="p-4 flex justify-evenly">
                <button className="button">Retrive</button>
                <button className="bg-basecolor4 text-basecolor2 font-semibold rounded cursor-pointer p-3">Reset</button>
                </div>
            </div>
            </form>
            <div className="m-5">
                <InterestTable />
            </div>
        </div>
    </div>
  )
}

export default Dashboard