/* eslint-disable react/prop-types */
function InterestTable({table}) {
  console.log(table);
  return (
    <div>
        <table className="ml-7 w-3xl shadow-md shadow-basecolor3">
            <thead>
                <tr>
                    <th className="bg-basecolor2 p-3 text-basecolor4 font-medium rounded-tl-md">Name</th>
                    <th className="bg-basecolor2 p-3 text-basecolor4 font-medium">Email</th>
                    <th className="bg-basecolor2 p-3 text-basecolor4 font-medium">Amount</th>
                    <th className="bg-basecolor2 p-3 text-basecolor4 font-medium">Commission</th>
                    <th className="bg-basecolor2 p-3 text-basecolor4 font-medium">Start Date</th>
                    <th className="bg-basecolor2 p-3 text-basecolor4 font-medium">Active</th>
                    <th className="bg-basecolor2 p-3 text-basecolor4 font-medium rounded-tr-md">Interests</th>
                </tr>
            </thead>
            <tbody>
                {table.map(t=> (
                    <tr key={t.accId} className="bg-basecolor4 text-basecolor font-sans text-center hover:bg-gray-400">
                    <td className="p-3">{t.borrowerName}</td>
                    <td className="p-3">{t.borrowerEmail}</td>
                    <td className="p-3">{t.amount}</td>
                    <td className="p-3">{t.borrowerComm}</td>
                    <td className="p-3">{t.startDate}</td>
                    <td className="p-3">{t.status}</td>
                    <td className="p-3">{t.days}/100</td>
                </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default InterestTable