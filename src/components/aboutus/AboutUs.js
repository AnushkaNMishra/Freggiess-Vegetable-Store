import './AboutUs.css'


const AboutUs = () => {
  return (
    <div className='aboutus-body'>
      <div className='bg-img'>
      <center>
        <div className='content'>         
        <br/><br/>
          
          <h1 className='aboutus-h1'>About Us</h1>
          <br/>
          
          </div> 
          </center>
        </div>

        <div className='aboutus-para'>
          <h4 className='aboutus-h4'>Representing Members of the Community Since 2000</h4>
          <p className='aboutus-p'>
          Freggies is the #1 Fruit and Vegetable Market in the greater San Francisco area. Since 2000, we’ve provided the community a variety of top quality products at competitive prices. Over the years, we’ve become the go-to source for all the items you need. Our mission has been to create a shopping experience that customers of all ages can enjoy.
<br/>
<br/>
At Freggies, we’re proud to support our local professionals — and invite you to visit during our opening hours. Our market has become a San Francisco trademark, and we would be more than happy for you to experience everything it has to offer.
          </p>
        </div>

        <div className='aboutus-button'>
          <center><button class="button button1"><b>Know More</b></button></center>
        </div>

      </div>
  )
};

export default AboutUs;