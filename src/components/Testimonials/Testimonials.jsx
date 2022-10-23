import React, {useContext} from "react";
import "./Testimonials.css";
import { themeContext } from "../../Context";
import Slider from "react-slick";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import profile1 from "../../img/testimonial/test1.jpg";
import profile2 from "../../img/testimonial/test2.jpeg";
import profile3 from "../../img/profile3.jpg";
import profile4 from "../../img/profile4.jpg";


const PreviousBtn = (props) => {
 
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};


const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clients = [
    { name: 'Mr. Shashank Thakur',
      img: profile1,
      review:
        `मेरी बेटी जो अभी कक्षा बारहवीं में गणित की छात्रा है, उसे विशेष रूप से रसायन में परेशानी आ रही थी। किसी कोचिंग सेंटर में भेजने पर शर्म के कारण अपने डाउट्स पूछने से हिचकती थी इसलिए पढ़ाई में पिछड़ रही थी और अपना आत्मविश्वास खो रही थी। तभी मैंने नो डाउट एकेडमी का विज्ञापन देखा जिसमें ट्यूटर घर में आकर पढ़ाएंगे । इसे ट्राई किया। One student  One teacher की सुविधा एकेडमी द्वारा दी जा रही है। मेरी बेटी अब खुलकर अपने डाउट्स हर सब्जेक्ट टीचर्स के सामने रखती है और धैर्य से उसके डाउट्स को क्लीयर किया जाता है।
        अब उसके परफार्मेंस में सुधार आ रहा है और वह अपना खोया हुआ आत्मविश्वास फिर से प्राप्त कर रही है।
          Thanks NO DOUBT ACADEMY`
    },

    {
      name: 'Mr. Abhishek Gondi',
      img: profile2,
      review:
        `Nodoubts academy has started a great work because every parent doesn't want their child to go for tuition.  Academy has sent me a maths tutor for  My child who is in class 6. He is a very nice sir, his teaching is very good and he finished 3 maths chapters in 15 days. Me and my child are very satisfied with the work. Thank you  nodoubts academy.`
    },
    { name: 'Mrs. Vanila',
      img: profile3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    { 
      name: 'Mrs. Nameeta', 
      img: profile4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div className="testimonial" id='Testimonials'>    

          <div className="t-heading">
          <span>From the Parents end... </span>
          <span>Testimonials </span>
          </div>


    <div className = 't-slider' >
          
      <div className="t-blur t-blur1" style={{ background: darkMode? "black":'' }}>
      </div>
      <div className="t-blur t-blur2" style={{ background:  darkMode? "black":'' }}>
      </div>
            <Slider
             prevArrow={<PreviousBtn />} 
             nextArrow=  {<NextBtn />} 
             dots
             autoplay = {true}
             autoplaySpeed = {2500}
             >
              {clients.map((client, index) => {
                return (
                <div key={index}>
                <Card img={client.img} name = {client.name} review = {client.review} />
                
                </div>
                );
              })}
            </Slider>  
      </div>
</div>
)
}

const Card = ({ img, review, name }) => {
return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>

      <span>{review}</span>
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span> ,
        Parent
      </p>
    </div>
  );
};

export default Testimonials