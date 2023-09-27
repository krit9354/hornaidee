
import { useState } from "react"
import Bt1 from "../components/bt1"
import Card_previwe from "../components/card_preview"
import Facility_choice from "../components/facility_choice"
import Help from "../components/help"
import Navbar from "../components/nav"
import Safety_choice from "../components/safety_choice"
import "./manage_detail.scoped.css"
import TextField from '@mui/material/TextField';
function Manage_detail() {
    const dorm = {
        dorm_name: "hello world",
        price: [1000,2000],
        distance: "100",
        url: "https://bcdn.renthub.in.th/listing_picture/201601/20160118/s6pB5v3wSHoidv24DAkw.jpg?class=moptimized"
    }

    const [dorm_name, setdorm_name] = useState(dorm.dorm_name)
    const [price, setPrice] = useState(dorm.price)
    const [distance, setDistance] = useState(dorm.distance)

    return (
        <div className="flex items-center flex-col">
            <div className="w-full"><Navbar></Navbar></div>
            <div className="content bg-old_yellow p-8 rounded-2xl my-4">
                <div className="w-full flex justify-center pb-8"><Card_previwe dorm={dorm} /></div>
                <div className="bg-white p-4 rounded-xl border border-solid border-black">
                    {/* donrm name */}
                    <div className="dorm_name mb-6">
                        <div className="topic text-old_green text-2xl mb-4">ชื่อหอพัก</div>
                        <div className="input flex">
                            <input className="input_text" defaultValue={distance} type="text" />
                            <Bt1>แก้ไข</Bt1>
                        </div>          
                    </div>

                    {/* price */}
                    <div className="price_range mb-6">
                        <div className="topic text-old_green text-2xl mb-4">ราคา</div>
                        <div className="input flex">
                            <input className="input_num" defaultValue={price[0]} type="number" />
                            <div className="line"></div>
                            <input className="input_num" defaultValue={price[1]} type="number" />
                            <Bt1>แก้ไข</Bt1>
                        </div>
                    </div>

                    <div className="flex justify-between w-3/4 mb-6" >
                        {/* distance */}
                        <div className="distance mb-4">
                            <div className="topic text-old_green text-2xl mb-4">ระยะทางจากมอ</div>
                            <div className="input flex">
                                <input className="input_num" defaultValue={distance} type="number" />
                                <Bt1>แก้ไข</Bt1>
                            </div>
                        </div>

                        {/* size */}
                        <div className="room_size mb-4">
                            <div className="topic text-old_green text-2xl mb-4">ขนาดห้อง</div>
                            <div className="input flex">
                                <input className="input_num" type="number" />
                                <Bt1>แก้ไข</Bt1>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between w-2/3">
                        {/* Facility */}
                        <div className="Facility mb-4">
                            <div className="topic text-old_green text-2xl mb-2">สิ่งอำนวยความสะดวก</div>
                            <Facility_choice></Facility_choice>
                        </div>

                        {/* safety */}
                        <div className="safety mb-4">
                            <div className="topic text-old_green text-2xl mb-2">ความปลอดภัย</div>
                            <Safety_choice></Safety_choice>
                        </div>
                    </div>

                    {/* address */}
                    <div className="more_detail mb-4">
                        <div className="topic text-old_green text-2xl mb-2">ที่อยู่หอพัก</div>
                        <div className="flex">
                            <textarea className="input_area h-20"></textarea>
                            <Bt1>แก้ไข</Bt1>
                        </div>
                    </div>


                    {/* more detail */}
                    <div className="more_detail mb-4">
                        <div className="topic text-old_green text-2xl mb-2">รายระเอียดเพิ่มเติม</div>
                        <div className="flex">
                            <textarea className="input_area h-20"></textarea>
                            <Bt1>แก้ไข</Bt1>
                        </div>
                    </div>
                </div>
            </div>
            <Help></Help>
        </div>
    )
}

export default Manage_detail