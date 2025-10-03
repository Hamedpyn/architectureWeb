export default function DataTable({ tableTitles, name }) {

    console.log(tableTitles.length)
    return (
        <>
            <div className="bg-white dark:bg-[#242A38] px-2 sm:px-6 py-4 md:mx-4 rounded-xl w-full">
                <div className="py-4">
                    <h2 className="dana-demi md:pr-3 text-lg sm:text-xl lg:text-2xl text-black dark:text-white">
                        لیست <span className="text-[#0f6b68] dana-extra">{name}</span>
                    </h2>
                </div>
                <div className="w-full overflow-x-auto">
                    <table className="min-w-[600px] w-full text-right border-separate border-spacing-y-2 table-fixed">
                        <thead>
                            <tr className="text-xs uppercase text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-[#333c4c]">
                                {tableTitles.map((item) => (
                                    <th
                                        key={item.id}
                                        className="px-2 sm:px-4 py-2 dana-regular"
                                        style={{ width: `${100 / tableTitles.length}%` }}
                                    >
                                        {item.title}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                                {tableTitles.map((item, idx) => (
                                    <td
                                        key={idx}
                                        className="px-2 text-black sm:px-4 py-2 dana-medium"
                                        style={{ width: `${100 / tableTitles.length}%` }}
                                    >
                                        تست
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}