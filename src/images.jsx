import React, {useState} from 'react';
import Axios from 'axios'
import {Image} from 'cloudinary-react';

//cloudinary-react helps us grab images from cloudinary

function Images() {

    const [image, setImage] = useState('')

    const uploadImage = ()=>{

        // formdata is normally used when woring with forms and inputs to hold all the data from the forms

        const formData = new FormData()
        formData.append('file', image)
        formData.append('upload_preset', 'z40c1wgd')
        // the upload presets help with making requests to cloudinary
        // console.log(files[0])

        Axios.post('https://api.cloudinary.com/v1_1/djgk2k4sw/image/upload', formData).then((response)=>{
            console.log(response)
        })

        //endpoint where we will be sending our data.
        // djgk2k4sw is the cloud name obtained from cloudinary
        // image is the type of file i am uploading
    }






  return (





        <>
        
        <div className ='files'>

            {/* // onchange helps us grab the events happening on our files. */} 

            <input type = 'file' onChange ={(e)=>{
                setImage(e.target.files[0])

            }}/>

            <button onClick = {uploadImage}>Upload Image</button>


            <Image  cloudName = 'djgk2k4sw' publicId = 'https://res.cloudinary.com/djgk2k4sw/image/upload/v1675221763/eqbplofcxtah2mupnf3t.jpg'/>

        </div>
        
        
        
        </>








     );
}

export default Images;
