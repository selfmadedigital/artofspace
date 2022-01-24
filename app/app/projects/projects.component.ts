import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import OwlOptions from 'ngx-owl-carousel-o';


const token = 'df72a7a2e7c45073c2c49700171152d71d21ab5af189b0ed456b5139edcdf2ac8bb1acc35633875b1a265c6f3102e08f0b6b646cec8da85ec1cf4743503b2cbb442abc72c46b316ca96afef5b64c036d2598ec6aa7de98b2320d768119521635fa88d2cac2d8e8aa5b4b90c83d3745dbbe742b9f15524b3fb9d91b5fbaf8edc9';

@Component({
  selector: 'app-projekty',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 2,
        },
        740: {
            items: 3,
        },
        940: {
            items: 4,
        },
    },
    nav: true,
};


  projects = [];


  constructor() { }

  async ngOnInit() {
    axios.get('http://localhost:1343/projekty', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => {
    // Handle success.
    console.log('Data: ', response.data);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
  }

}
