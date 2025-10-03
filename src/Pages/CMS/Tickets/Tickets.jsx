import DataTable from "../../../Components/CMS/DataTable/DataTable"

export default function Tickets() {
    
    const ticketsTitle = [
        { title: 'شناسه', id: 1 },
        { title: 'کاربر', id: 2 },
        { title: 'دپارتمان', id: 3 },
        { title: 'موضوع', id: 5 },
        { title: 'مشاهده', id: 4 },
        { title: 'پاسخ', id: 6 },
    ]
    return (
        <>
            <div>
                <DataTable tableTitles={ticketsTitle} name={'تیکت ها'} />
            </div>
        </>
    )
}
