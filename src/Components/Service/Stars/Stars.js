import React from 'react';
import './Stars.css';
import fullStar from '../../../assets/icons/stars/star3.png'
import halfStar from '../../../assets/icons/stars/star2.png'
import emptyStar from '../../../assets/icons/stars/star1.png'

const Stars = ({ratings}) => {
    let num = [];
    for(let i=0;i<5;i++){
        if(ratings>=1){
            num[i] = 1;
            ratings = ratings-1;
        }else if(ratings>0){
            num[i] = ratings;
            ratings = 0;
        }else{
            num[i] = ratings;
        }
    }
    console.log(num);
  return (
    <div className='star_body'>{
        num.map((n)=>{
            return (
              <> {n===1&&<img src={fullStar} alt="star"/>}{n>0&&n<1&&<img src={halfStar} alt="star"/>}{n===0&&<img src={emptyStar} alt="star"/>}</>
            );
        })
    }</div>
  )
}

export default Stars