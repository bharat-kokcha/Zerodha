import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 col-9 " id="supportWrapper">
        <h4 style={{marginTop:"40px", marginLeft:"40px",marginRight:"51rem"}}>Support Portal</h4>
        <a href="#" style={{ marginTop: "42px",fontSize:"20px" }}>Track Tickets</a>

        
      </div>
      <div className="row p-5  ">
        <div className="col-6 p-3 ">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." /><br/><br/>
          <a href="" style={{fontSize: "1.3rem",fontWeight: "400",padding:"5px"}}>Track account opening</a>
          <a href="" style={{fontSize: "1.3rem",fontWeight: "400",padding:"10px",marginLeft:'14px'}}>Track segment activation</a>
          <a href="" style={{fontSize: "1.3rem",fontWeight: "400",padding:"6px",marginLeft:"26px"}}>Intraday margins</a><br/>
          <a href="" style={{fontSize: "1.3rem",fontWeight: "400",marginLeft:'8px'}}>Kite user manual</a>
        </div>
        <div className="col-6 mt-3" style={{paddingLeft:"150px"}}>
          <h1 className="fs-3">Featured</h1>

          <ol>
            <li>
              <a href="" className="fs-5">Surveillance measure on scrips - March 2025</a>
            </li><br/>
            <li>
              <a href=""className="fs-5">Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
