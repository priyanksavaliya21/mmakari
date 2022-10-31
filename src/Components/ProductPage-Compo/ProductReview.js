import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { ButtonX } from "../PropertyPage-Compo/PropertyPageSection1";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useFormik } from "formik";
import {ReviewProductSchema} from "../../schemas/Contact_form_data";

export const ProductReview = ({productdata}) => {
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const [checked, setChecked] = React.useState(true);
  const handleChangeSwitch = (event) => {
    setChecked(event.target.checked);
  };
 
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  
  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#021540",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#42A8D4",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const [value, setValue] = React.useState(4);
  const [hover, setHover] = React.useState(-1);

  const initialValues = {
    title: "",
    name: "",
    email: "",
    phone: "",
    w3review: "",
    propertyName : productdata.properttheme ,
    Propertylocality : productdata.productpage.locality ,
    PropertyId :  productdata.productpage.id_x,
  };
 
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: ReviewProductSchema,
    onSubmit: async (values, action) => {

        let userid = new Date().getTime().toString();
        let reviewtext = labels[value];
        let reviewnum = value ;
        const { title, name, email, phone , w3review , propertyName , Propertylocality , PropertyId} = values;
        if (checked === !true) {
          alert("Plese Verify Your Review And Check On Switch")
        }else{
          const Response = await fetch("https://mmkari-5f304-default-rtdb.asia-southeast1.firebasedatabase.app/Product-reviewdata.json", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              name,
              email,
              phone,
              w3review,
              userid,
              reviewnum , 
              reviewtext,
              propertyName,
              Propertylocality ,
              PropertyId ,
            })
        }).then((response) => response)
          .then((data) => {
                if(data.status === 200){
                    action.resetForm();
                    setValue(4);
                    const messege = document.querySelector(".submit-btn_block_review .form-messege"); 
                    messege.classList.add("show"); 
                    
                    setTimeout(function () {
                      messege.classList.remove("show");
                    }, 4000); 
              }else{
                        const messege = document.querySelector(".submit-btn_block_review .form-messege2"); 
                          messege.classList.add("show"); 
                        setTimeout(function () {
                        messege.classList.remove("show");
                        }, 4000);   
              }
            }).catch((erorr) => console.log(erorr));
        }
    },
});

  return (
    <div className="WriteReview_slack">
      <div className="submitReviewblock">
        <form onSubmit={handleSubmit}>
          <div className="stars_block">
            <h4>Your Overall Rating</h4>
            <div className="starts_wrappers">
              <Rating
                name="hover-feedback"
                value={value}
                size="large"
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <p className="rating_labels">
                  {labels[hover !== -1 ? hover : value]}
                </p>
              )}
            </div>
          </div>
          <div className="form_wrapper_for_block">
            <label htmlFor="property_title" className="label_for_inputs">
              <p>Name of This Property</p>
            </label>
            <input
              type="text"
              required
              id="property_Name"
              className="input_styles"
              name="property_Name"
              value={values.propertyName}
              placeholder="This property Name"
              disabled
            />
          </div>
          <div className="form_wrapper_for_block">
            <label htmlFor="Propertylocality" className="label_for_inputs">
              <p>Property locality</p>
            </label>
            <input
              type="text"
              required
              id="Propertylocality"
              className="input_styles"
              name="Propertylocality"
              value={values.Propertylocality}
              placeholder="This property locality"
              disabled
            />
          </div>
          <div className="form_wrapper_for_block">
            <label htmlFor="PropertyId" className="label_for_inputs">
              <p>Property Id</p>
            </label>
            <input
              type="text"
              required
              id="PropertyId"
              className="input_styles"
              name="PropertyId"
              value={values.PropertyId}
              placeholder="This Property Id"
              disabled
            />
          </div>
          <div className="form_wrapper_for_block">
            <label htmlFor="title" className="label_for_inputs">
              <p>Title of your review</p>
            </label>
            <input
              type="text"
              required
              id="title"
              className="input_styles"
              name="title"
              onChange={handleChange}
              value={values.title}
              placeholder="Summarize your review or highlight an interesting detail"
            />
             {errors.title && touched.title ? <p className='form_errors'>{errors.title}</p> : null}
          </div>
          <div className="form_wrapper_for_block">
            <label htmlFor="name" className="label_for_inputs">
              <p>Your Name</p>
            </label>
            <input
              type="text"
              id="name"
              required
              className="input_styles"
              name="name"
              onChange={handleChange}
              value={values.name}
              placeholder="Tell us your name"
            />
             {errors.name && touched.name ? <p className='form_errors'>{errors.name}</p> : null}
          </div>
          <div className="form_wrapper_for_block">
            <label htmlFor="email" className="label_for_inputs">
              <p>Your Email</p>
            </label>
            <input
              type="email"
              id="email"
              required
              className="input_styles"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Tell us your email"
            />
             {errors.email && touched.email ? <p className='form_errors'>{errors.email}</p> : null}
          </div>
          <div className="form_wrapper_for_block">
            <label htmlFor="phone" className="label_for_inputs">
              <p>Your Phone number</p>
            </label>
            <input
              type="number"
              id="phone"
              required
              className="input_styles"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              placeholder="Tell us your Phone Number"
            />
             {errors.phone && touched.phone ? <p className='form_errors'>{errors.phone}</p> : null}
          </div>
          <div className="form_wrapper_for_block">
            <label htmlFor="w3review" className="label_for_inputs">
              <p>Your Review</p>
            </label>
            <textarea
              id="w3review"
              className="input_styles"
              required
              onChange={handleChange}
              value={values.w3review}
              placeholder="Tell people your review"
              name="w3review"
            />
             {errors.w3review && touched.w3review ? <p className='form_errors'>{errors.w3review}</p> : null}
          </div>
          <div className="switch_block form_wrapper_for_block">
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} />}
              checked={checked}
              onChange={handleChangeSwitch}
              label="This Review Is Based On My Own Experience And Is My Genuine Opinion."
            />
          </div>
          <div className="submit-btn_block_review">
           <ButtonX text="Submit" id="btn0099" type="submit" />  
            <span className="form-messege">Your Form has been submitted successfully <><ThumbUpAltIcon className="iconx" /></> </span> 
            <span className="form-messege2">Unable to Submit Form: Please Try Again !!<><ThumbUpAltIcon className="iconx2" /></> </span>   
          </div>
        </form>
      </div>
    </div>
  );
};
