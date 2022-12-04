

import Carousel from 'react-material-ui-carousel'
import { makeStyles } from "@material-ui/styles";
 
const useStyle = makeStyles({
    image:{
        minWidth:'800px',
        width:'110vw',
        
        
        
    },
    carousel:{
       
        
      
       
        
       
    }
});

export const Banner=()=>{
    const bannerData = [
        'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50'
    ];

 const classes = useStyle();
    return(
       <Carousel className={classes.carousel}
          autoPlay={true}
          animation='slide'
          indicators={false}
         
          navButtonsAlwaysVisible={true}
          cycleNavigation={true}
          navButtonsProps={{
              style:{
                  background:'#ffffff',
                  color:'#494949',
                  borderRadius:0,
                  margin:'0 5px',
                  padding:'30px 10px'
                 
              }
          }}
       >

          {  bannerData.map(items=>(
               <img  className={classes.image} src={items} />
            ))}
       </Carousel>
    );
}