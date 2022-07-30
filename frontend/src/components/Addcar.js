import React, { useState, useEffect } from "react";
 import { useParams } from "react-router-dom";
 import axios from "axios";
//  import swal from "sweetalert";
 import { useNavigate } from "react-router-dom";



function Addcar() {
    const url = "http://localhost:8000/api/ads";
    const [data, setData] = useState({
        Make: "",
        Model: "",
        Registrationdate: "",
        Mileage: "",
        Condition: "",
        exteriorcolor: "",
        interiorcolor: "",
        trans: "",
        image: "",
        description: "",
      });
    

      function submit(e) {
        e.preventDefault();
        axios.post(url,{
        make: data.Make,
        user_id: "1",
        model: data.Model,
        registration_date: data.Registrationdate,
        milage: data.Mileage,
        condition: data.Condition,
        exterior_color: data.exteriorcolor,
        interior_color: data.interiorcolor,
        transmission: data.trans,
        image: data.image,
        description: data.description,
        })
        .then(res=>{
            console.log(res.data)
        })
      }
        const handleChange = (event) => {
                const { id, value, name } = event.target
                setData((oldData) => {
                    return {
                        ...oldData,
                        [id]: value,

                    }
                })
            }
            console.log(data)

  return (
    <>
    <div className="page-section-ptb">
      <div className="row">
       <div className="col-lg-8 col-sm-12">
       <div className="gray-form">
         <div id="formmessage" className="form-notice" style={{display:"none"}}>Success/Error Message Goes Here</div>
           <form className="form-horizontal" onSubmit={(e)=> submit(e)} id="contactform">
            <div className="contact-form row">
              <div className="col-lg-4 col-sm-12">
               <div className="mb-3">
               <input type="text" className="form-control" placeholder="Make" value={data.Make} id='Make' onChange={handleChange}/>
               </div>
             </div>
             <div className="col-lg-4 col-sm-12">
               <div className="mb-3">
               <input type="text" className="form-control" placeholder="Model" value={data.Model} id='Model' onChange={handleChange}/>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Registration date" value={data.Registrationdate}  id='Registrationdate' onChange={handleChange}/>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
               <div className="mb-3">
               <input type="text" className="form-control" placeholder="Mileage" value={data.Mileage} id='Mileage' onChange={handleChange}/>
               </div>
             </div>
             <div className="col-lg-4 col-sm-12">
               <div className="mb-3">
               <input type="text" className="form-control" placeholder="Condition" value={data.Condition} id='Condition' onChange={handleChange}/>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="exterior color" value={data.exteriorcolor} id='exteriorcolor' name="exteriorcolor" onChange={handleChange}/>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="interior color" value={data.interiorcolor} id='interiorcolor' onChange={handleChange}/>
                </div>
              </div>
              
              <div className="col-lg-4 col-sm-12">
                <div className="mb-3">
                <select placeholder="trans" id='trans' name="trans" value={data.trans} onChange={handleChange} >
                        <option value={'automatic'} >Automatic</option>
                        <option value={'manual'}>Manual</option>
                </select>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="mb-3">
                  <input type="file" multiple="multiple" accept="image/jpeg, image/png, image/jpg" value={data.image}  placeholder="image" id='image' onChange={handleChange}/>
                </div>
              </div>
              <div className="col-md-12">
                 <div className="mb-3">
                   <textarea className="form-control input-message" placeholder="description" rows="7" value={data.description} id="description" onChange={handleChange}></textarea>
                 </div>
              </div>
              <div className="col-md-12">
                 <button id="submit" onClick={submit} name="submit" type="submit" value="Send" className="button red">Post The Ad <i className="fa fa-spinner fa-spin fa-fw btn-loader" style={{display:"none"}}></i></button>
               </div>
              </div>
          </form>
           </div>
       </div>
       </div>
       </div>
    </>
  )
}

export default Addcar 