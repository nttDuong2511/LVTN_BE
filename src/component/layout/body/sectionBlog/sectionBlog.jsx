import React from 'react';
import './sectionBlog.css';
import Disk from './ASSETS/disk.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import monan from './ASSETS/monga.png';

export default function sectionBlog() {
  return (
    <div className = 'sectionBlog'> 
        <div className='sectionBlog-title'>
            <span>
                <img src= {Disk} alt="disk-logo" />
                    Cẩm nang sức khỏe
                <img src= {Disk} alt="disk-logo" />
            </span>
        </div>
        <div className="sectionBlog-content">
            <div className="sectionBlog-cart">
                <Card sx={{ maxWidth: 345,  backgroundColor: 'black' }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="190"
                        image={monan}
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" color = "#fff">
                                Calo và chất dinh dưỡng để cung cấp năng lượng cho hoạt động thể thao
                            </Typography>
                            <Typography variant="caption" color="#707070" >
                                Việc nạp calo và các chất dinh dưỡng đóng vai trò vô cùng quan trọng đối với các hoạt động thể thao và sức khoẻ tổng thể của bạn. 
                                Điều này cũng giúp bạn tăng cường hiệu suất tập luyện, 
                                đồng thời nâng cao sức đề kháng của mình trước bệnh tật.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button 
                            sx = {{color: "#d69c52"}}size="small">
                            _Xem thêm_
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div className="sectionBlog-cart">
                <Card sx={{ maxWidth: 345,  backgroundColor: 'black' }}>
                    <CardActionArea>
                       
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" color = "#fff">
                                Calo và chất dinh dưỡng để cung cấp năng lượng cho hoạt động thể thao
                            </Typography>
                            <Typography variant="caption" color="#707070" >
                                Việc nạp calo và các chất dinh dưỡng đóng vai trò vô cùng quan trọng đối với các hoạt động thể thao và sức khoẻ tổng thể của bạn. 
                                Điều này cũng giúp bạn tăng cường hiệu suất tập luyện, 
                                đồng thời nâng cao sức đề kháng của mình trước bệnh tật.
                            </Typography>
                            <CardMedia
                            component="img"
                            height="190"
                            image={monan}
                            alt="green iguana"
                            />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button 
                            sx = {{color: "#d69c52"}}size="small">
                            _Xem thêm_
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div className="sectionBlog-cart">
                <Card sx={{ maxWidth: 345,  backgroundColor: 'black' }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="190"
                        image={monan}
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" color = "#fff">
                                Calo và chất dinh dưỡng để cung cấp năng lượng cho hoạt động thể thao
                            </Typography>
                            <Typography variant="caption" color="#707070" >
                                Việc nạp calo và các chất dinh dưỡng đóng vai trò vô cùng quan trọng đối với các hoạt động thể thao và sức khoẻ tổng thể của bạn. 
                                Điều này cũng giúp bạn tăng cường hiệu suất tập luyện, 
                                đồng thời nâng cao sức đề kháng của mình trước bệnh tật.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button sx = {{color: "#d69c52"}}
                                size="small">
                        _Xem thêm_
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>

        

 
    </div>
  )
}
