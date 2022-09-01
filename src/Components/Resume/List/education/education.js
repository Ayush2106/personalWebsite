import React from 'react'
import './education.css';
import SchoolIcon from '@mui/icons-material/School';
function education() {
  return (
<div className='education'>
    <div className='header'>
        <div className='icon'>  <SchoolIcon/> </div>
    <div className='text'>
 <h1>Pursuing Bachelor of Technology , CSE</h1>
 <h1>2020-2024</h1>
 <h2>Guru Gobind Singh Indraprastha University , Delhi</h2>
{/* <h2> Dr.Akhilesh Das Gupta Institute of Technology and Managment </h2> */}
{/* <h2>GPA 9.1 </h2> */}
</div>
    </div>
    <div className='header'>
    <div className='icon'>  <SchoolIcon/> </div>
    <div className='text'>

 <h1>Higher Secondary School , 12th Standard</h1>
<h1>2018-2019</h1>
<h2>Tagore Public School , Palwal</h2>
{/* <h2>91.3% PCM</h2> */}
</div>
</div>

<div className='header'>
<div className='icon'>  <SchoolIcon/> </div>
    <div className='text'>

    <h1> Secondary School , 10th Standard</h1>
    <h1>2016-2017</h1>
    <h2>Tagore Public School , Palwal</h2>
{/* <h2>CGPA 8.1</h2> */}
</div>
</div>

</div>
  )
}

export default education