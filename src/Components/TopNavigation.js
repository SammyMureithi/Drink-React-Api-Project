import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function TopNavigation() {
    const [img, setImg] = useState( "./Images/bg1.jpg" );
    const array = ["./Images/bg1.jpg", "./Images/bg2.jpg", "./Images/bg3.jpg", "./Images/bg4.jpg"];

  return (
      <div className='header'>
          <div className='advert'>
          <h1>Stay High</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus purus,
              pharetra vel purus vitae, lobortis molestie ipsum. In in quam at mi viverra
              scelerisque. Maecenas a mauris libero. Mauris non nibh vitae augue vestibulum
              tempus. 
          </p>
          </div>
    </div>
  )
}

export default TopNavigation