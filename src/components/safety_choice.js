import Checkbox from '@mui/material/Checkbox';

function Safety_choice () {
    return (
        <div>
            <div className="flex items-center">
            <Checkbox  />
                <p className=" text-lg">รปภ.</p>
            </div>
            <div className="flex items-center">
            <Checkbox  />
                <p className=" text-lg">กล้องวงจรปิด</p>
            </div>
            <div className="flex items-center">
            <Checkbox  />
                <p className=" text-lg">คีย์การ์ด</p>
            </div>
            <div className="flex items-center">
            <Checkbox  />
                <p className=" text-lg">กุญแจ</p>
            </div>
        </div>
    )
}

export default Safety_choice;