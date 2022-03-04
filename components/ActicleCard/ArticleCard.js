// import React from 'react';
// import Button from "../UI/Button/Button";
//
// const Article = (props) => {
//     return (
//         <div >
//             <h3>{props.title}</h3>
//             <h3>{props.description}</h3>
//             <Button>{props.button}</Button>
//         </div>
//     );
// };
//



import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "next/link"

export default function ArticleCard({title, description, button, preview, slug}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={"http:" + preview}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/articles/${slug}`}>
                    <Button size="small">{button ? button : "Read"}</Button>
                </Link>
            </CardActions>
        </Card>
    );
}
