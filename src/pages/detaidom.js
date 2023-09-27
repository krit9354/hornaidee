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
            <p className="text">ราคาค่าเช่าหอต่อเดือนอยู่ระหว่าง : 3000-6000</p>
            <p className="text">ขนาดของห้อง : 29-34 ตารางเมตร</p>
            <p className="text">ระยะทางไปมอ : 500 เมตร</p>
            <p className="text">
              สิ่งอำนวยความสดวก : แอร์ ตู้เย็น เครื่องทำน้ำอุ่น
            </p>
            <p className="text">ความปลอดภัย : รปภ. คีย์การ์ด</p>
            <p className="text">ที่อยู่ : อยู่ภายในใจ</p>
            <p className="text">เพิ่มเติม : ร้านข้าวใต้หออร่อยมาก</p>
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
    </body>
  );
}

export default detaidom;
