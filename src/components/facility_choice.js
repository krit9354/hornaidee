

function Facility_choice () {
    return (
        <div>
            <div className="flex items-center">
                <input className="mr-1" type="checkbox" />
                <p className=" text-lg">เครื่องทำน้ำอุ่น</p>
            </div>
            <div className="flex items-center">
                <input className="mr-1" type="checkbox" />
                <p className=" text-lg">แอร์</p>
            </div>
            <div className="flex items-center">
                <input className="mr-1" type="checkbox" />
                <p className=" text-lg">ตู้เย็น</p>
            </div>
            <div className="flex items-center">
                <input className="mr-1" type="checkbox" />
                <p className=" text-lg">ที่จอดรถมอเตอร์ไซต์</p>
            </div>
            <div className="flex items-center">
                <input className="mr-1" type="checkbox" />
                <p className=" text-lg">wifi</p>
            </div>
        </div>
    )
}

export default Facility_choice;