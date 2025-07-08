import { useState } from 'react';
import Navbar from "../Components/Navbar"

function Hero(){
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
        // You can add additional logic here when the toggle changes
        console.log('Toggle state:', !isToggled);
        if(isToggled){
            
           
        }else{
         
        }
    };
    return(
        
        <>
        <Navbar />
<div className="main">

<div className="main1">
    <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/677084006e4c01b366b9f14a_Product%20of%20the%20day%201%20st%20(1).png" alt="" height={40}  className="main1img"/>
</div>
<div className="main2">
<img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/672238a3a84c9d13107ec9ec_Avatar%20-%20Arina.webp" alt="" height={30} className="main2img" />
<img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/672238883839ebc53163b529_Avatar%20-%20Misha.webp" alt="" height={30} className="main2img" />
<img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/67223899a2a88ffa876b1a85_Avatar%20-%20Igor%20T.webp" alt="" height={30} className="main2img" />
<img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/672238adee35a6c7d5481b87_Avatar%20-%20Igor%20K.webp" alt="" height={30} className="main2img" />
<img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/672238c6ee5c7634abea28ea_Avatar%20-%20Nik.webp" alt="" height={30} className="main2img" />
<img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/672238b80d63f831348b480b_Avatar%20-%20Viktor.webp" alt="" height={30} className="main2img" />
<img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/6722387aab8d5b18c98db41d_Avatar%20-%20Paul.webp" alt="" height={30} className="main2img"  />
<img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/67223864ff212d6d5ec373ac_Avatar%20-%20Andrey.webp" alt="" height={30} className="main2img" />
</div>
<div className="main3">
Over 400,000 users
</div>

<div className="main4">
Visual platform for <br /> planning UX and <br /> pitching web design
</div>

<div className="main5">
    <div className="main5-p1">
    Win more clients
    </div>
    <div className="main5-p2">
<label className="switch">
  <input 
    type="checkbox" 
    checked={isToggled}
    onChange={handleToggle}
    aria-label="Toggle switch"
    style={{ display: 'none' }}
  />
  <span className={`slider ${isToggled ? 'active' : ''}`}>
  </span>
</label>
</div>
<div className="main5-p3">

{isToggled ? (
    // Second set of images (when toggled on)
    <>
    <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/672374bbfcbfded22cea7e26_Webflow%20(1).svg" alt="Arina" height={30}  />
    <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/672374db65aebded45144685_Framer%20(1).svg" alt="Misha" height={30} />
    <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/672374ef1a56ed99d9246c4f_wordpress%20(1).svg" alt="Igor T" height={30}  />
    
  </>

  ) : (
    // Original set of images (when toggled off)
    <>
      <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/6721166a9082a1060de8b9d2_Webflow.svg" alt="User 1" height={30}  />
      <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/67211821606eb51dbbbc54d1_Framer.svg" alt="User 2" height={30}  />
      <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/67211844b47032a021386a7f_wordpress.svg" alt="User 3" height={30}  />
     
    </>
  )}
  </div>
</div>
<div className="main6">
  <button className="btn-23">
    <span className="text">
      Start planning
    </span>
    <span aria-hidden="true" className="marquee">
      Start planning
    </span>
  </button>
</div>
</div>
{/* <div className="main7">
You're in good company
</div>

<div className="main8">
    <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/64a2c4bfcd074ceda263e246_logo_06.svg" alt="" className="main8-img1" />
    <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/64a2c4bf92e236b2edfc8912_logo_05.svg" alt="" className="main8-img1" />
    <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/658a113fad8b6fae5163207e_Frame%201217.svg" alt="" className="main8-img1" />
    <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/64a2c4bfcd074ceda263e246_logo_06.svg" alt="" className="main8-img1" />
    <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/64a2c4bfcd074ceda263e246_logo_06.svg" alt="" className="main8-img1" />
    <img src="https://cdn.prod.website-files.com/649ae86ac1a4be707b656519/64a2c4bfcd074ceda263e246_logo_06.svg" alt="" className="main8-img1" />
    

</div>
         */}
        
        
        
        
        </>
    )
}

export default Hero