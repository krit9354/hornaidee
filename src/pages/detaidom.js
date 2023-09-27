import "./detaidom.scoped.css";
import Nav from "../components/nav";
import { Typography, Rating } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { AcUnit,Tv,Kitchen,PedalBike,AirportShuttle,Pool,FitnessCenter,LocalLaundryService,Shower } from "@mui/icons-material"
import { Key,CreditCard,Videocam,Security,Fingerprint } from "@mui/icons-material"
import Footer from "../components/footer";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

function detaidom() {
  return (
    <body>
      <header>
        <Nav> </Nav>
      </header>
      <div className="containei">
        <div className="background">
          <div className="card">
            {/*  */}
            <div class="carousel-wrapper flex justify-center">
            <Carousel width={"100%"} infiniteLoop useKeyboardArrows autoPlay className="flex flex-col items-center">
                <div>
                    <img className="h-1/2" src="https://bcdn.renthub.in.th/listing_picture/201906/20190629/6ioa2uET8wASLvhoqhuG.jpg?class=moptimized" />
                </div>
                <div>
                    <img className="h-1/2" src="https://www.hongpak.in.th/media/rooms/photos/15/1225/4_2999.jpg" />
                </div>
                <div>
                    <img className="h-1" src="https://udo.oop.cmu.ac.th/img_dorm/dorm_pic/review/m1m2/bedroom.jpg" />
                </div>
            </Carousel>
        </div>
            {/*  */}
          </div>

          <div className="register_box">
            <h2 className="clo text-2xl font-bold">หอประกายดาว</h2>
            <div className="grid main_detail m-8 p-3 bg-light_gray rounded-xl">
              <div>รายเดือน </div>
              <div className="justify-end">1,000-2,000 บาท</div>
              <div>ระยะทางไปมอ</div>
              <div className="justify-end">500 เมตร</div>
              <div>ขนาดของห้อง</div>
              <div className=" justify-end">29-34 ตารางเมตร</div>
              <div className="flex items-end h-8">อินเทอร์เน็ต</div>
              <div className="flex items-end justify-end h-8">ฟรี</div>
            </div>

            <div className=" text-lg clo font-semibold">ที่อยู่</div>
            <div className="address">อยู่ภายในใจเสมองับ จุ๊บๆ</div>
            <div className="mt-8 text-lg clo font-semibold">สิ่งอำนวยความสะดวก</div>
            <div className="grid facility grid-cols-2 mx-8 mt-2">
              <div className="flex"><Shower></Shower><p className="ml-2">เครื่องทำน้ำอุ่น</p></div>
              <div className="flex"><AcUnit></AcUnit><p className="ml-2">เครื่องปรับอากาศ</p></div>
              <div className="flex"><Tv></Tv><p className="ml-2">TV</p></div>
              <div className="flex"><Kitchen></Kitchen><p className="ml-2">ตู้เย็น</p></div>
              <div className="flex"><PedalBike></PedalBike><p className="ml-2">ที่จอดรถจักรยานยนต์</p></div>
              <div className="flex"><AirportShuttle></AirportShuttle><p className="ml-2">ที่จอดรถยนต์</p></div>
              <div className="flex"><FitnessCenter></FitnessCenter><p className="ml-2">fitness</p></div>
              <div className="flex"><LocalLaundryService></LocalLaundryService><p className="ml-2">เครื่องซักผ้า</p></div>
              <div className="flex"><Pool></Pool><p className="ml-2">สระว่ายน้ำ</p></div>
            </div>

            <div className="mt-8 text-lg clo font-semibold">ระบบความปลอดภัย</div>
            <div className="grid facility grid-cols-2 mx-8 mt-2">
              <div className="flex"><Key></Key><p className="ml-2">กุญแจ</p></div>
              <div className="flex"><CreditCard></CreditCard><p className="ml-2">คีย์การ์ด</p></div>
              <div className="flex"><Videocam></Videocam><p className="ml-2">กล้องวงจรปิด</p></div>
              <div className="flex"><Security></Security><p className="ml-2">รปภ.</p></div>
              <div className="flex"><Fingerprint></Fingerprint><p className="ml-2">ลายนิ้วมือ</p></div>
            </div>
            {/* <p className="text">ราคาค่าเช่าหอต่อเดือนอยู่ระหว่าง : 3000-6000</p>
            <p className="text">ขนาดของห้อง : 29-34 ตารางเมตร</p>
            <p className="text">ระยะทางไปมอ : 500 เมตร</p>
            <p className="text">
              สิ่งอำนวยความสะดวก : แอร์ ตู้เย็น เครื่องทำน้ำอุ่น
            </p>
            <p className="text">ความปลอดภัย : รปภ. คีย์การ์ด</p>
            <p className="text">ที่อยู่ : อยู่ภายในใจ</p>
            <p className="text">เพิ่มเติม : ร้านข้าวใต้หออร่อยมาก</p> */}

            <div className="chat-button">
              <a href="" className="bt">
                <QuestionAnswerIcon />
                <p>chat</p>
              </a>
            </div>
          </div>
          
          <div className="register_box">
            <h2>review</h2>
            <div className="box">
              <Box fullWidth sx={{ flexGrow: 1, overflow: "hidden", p: 2 }}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <AccountCircleIcon sx={{ fontSize: 45 }} />
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography noWrap>dads</Typography>
                    <Rating size="large" name="simple-controlled" />
                  </Grid>
                </Grid>
                <TextField
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  placeholder="review..."
                  variant="outlined"
                  defaultValue="เยียมมาฟๆๆ"
                />
              </Box>
            </div>
            <div className="box">
              <Box sx={{ flexGrow: 1, overflow: "hidden", width: 300, p: 2 }}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <AccountCircleIcon sx={{ fontSize: 45 }} />
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography noWrap>dads</Typography>
                    <Rating
                      size="large"
                      name="simple-controlled"
                      value={3}
                      readOnly
                    />
                  </Grid>
                </Grid>
                <p>very good!?</p>
              </Box>
            </div>
            <div className="box">
              <Box sx={{ flexGrow: 1, overflow: "hidden", width: 300, p: 2 }}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <AccountCircleIcon sx={{ fontSize: 45 }} />
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography noWrap>dads</Typography>
                    <Rating
                      size="large"
                      name="simple-controlled"
                      value={5}
                      readOnly
                    />
                  </Grid>
                </Grid>
                <p>very good!?</p>
              </Box>
            </div>
            <div className="box">
              <Box sx={{ flexGrow: 1, overflow: "hidden", width: 300, p: 2 }}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <AccountCircleIcon sx={{ fontSize: 45 }} />
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography noWrap>dads</Typography>
                    <Rating
                      size="large"
                      name="simple-controlled"
                      value={4}
                      readOnly
                    />
                  </Grid>
                </Grid>
                <p>very good!?</p>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </body>
  );
}

export default detaidom;
