
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

   
    Displaying()
    function Displaying(){
        const Testimonial =[
            {
                id: 1,
                Names: 'Success Godwin',
                Description: '"AUO MEDIA exceeded our expectations. Their creativity and dedication are truly commendable."',
                image:'image.jpg'
            },
            {
                id: 2,
                Names: 'Jane Smith',
                Description: '"AUO MEDIA exceeded our expectations. Their creativity and dedication are truly commendable."',
                image:'image.jpg'
            },
            {
                id: 3,
                Names: 'John Doe',
                Description: '"Outstanding service! AUO MEDIA helped our business grow rapidly. I highly recommend them."',
                image:'image.jpg'
            },
            {
                id: 4,
                Names: ' Amanda Joel',
                Description: '"AUO MEDIA exceeded our expectations. Their creativity and dedication are truly commendable."',
                image:'image.jpg'
            },
            {
                id: 5,
                Names: ' Codascope Tech',
                Description: '"AUO MEDIA exceeded our expectations. Their creativity and dedication are truly commendable."',
                image:'image.jpg'
            }
    
        ]
        const testimonial_container= document.getElementById('testimonial_container')
        
      const data =Testimonial.map((item)=>{
        
   return(
    `
    <div class="testimonial">
    <div><img src='${item.image}'></div>
    <div class="stars">
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
</div>

<p>${item.Description}</p>
            <cite>- ${item.Names}</cite>
</div>`
   )
  
      })
   testimonial_container.innerHTML=data
        
    }
