const InterestTable = () => {
  return (
    <div>
        <table className="ml-7 w-3xl shadow-md shadow-basecolor3">
            <thead>
                <tr>
                    <th className="bg-basecolor2 p-3 text-basecolor4 font-medium rounded-tl-md">Name</th>
                    <th className="bg-basecolor2 p-3 text-basecolor4 font-medium">Amount</th>
                    <th className="bg-basecolor2 p-3 text-basecolor4 font-medium">Commission</th>
                    <th className="bg-basecolor2 p-3 text-basecolor4 font-medium rounded-tr-md">Interests</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-basecolor4 text-basecolor font-sans text-center">
                    <td className="p-3">Mohan</td>
                    <td className="p-3">20000</td>
                    <td className="p-3">2000</td>
                    <td className="p-3">20/100</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default InterestTable