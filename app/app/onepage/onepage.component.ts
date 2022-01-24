import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import axios from 'axios';

const token = 'df72a7a2e7c45073c2c49700171152d71d21ab5af189b0ed456b5139edcdf2ac8bb1acc35633875b1a265c6f3102e08f0b6b646cec8da85ec1cf4743503b2cbb442abc72c46b316ca96afef5b64c036d2598ec6aa7de98b2320d768119521635fa88d2cac2d8e8aa5b4b90c83d3745dbbe742b9f15524b3fb9d91b5fbaf8edc9';

@Component({
  selector: 'app-onepage',
  templateUrl: './onepage.component.html',
  styleUrls: ['./onepage.component.scss']
})
export class OnepageComponent implements OnInit {
  projects = [];
  error = null;


  @ViewChild('fullpageRef') fp_directive: ElementRef;
  config;
  fullpage_api;

  constructor(private renderer: Renderer2) {
    
  
    
    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      navigation: true,
      sectionsColor: ['#fff', '#fff', '#fff'],

      // events callback
      afterLoad: (origin, destination, direction) => {
        // console.log(destination);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width, height) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section, origin, destination, direction) => {
        // console.log(destination);
      }
    };
  }

  ngOnInit(): void {
      
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  addSection() {
    // change background color
    this.config['sectionsColor'] = Array(6).fill(0).map(x => this.randomColor());

    // creating the section div
    const section = this.renderer.createElement('div');
    this.renderer.addClass(section, 'section');
    this.renderer.setProperty(section, 'innerHTML', '<h3>New Section</h3>');
    // adding section
    this.renderer.appendChild(this.fp_directive.nativeElement, section);

    this.fullpage_api.build();
  }

  removeLast() {
    const lastSection = this.fp_directive.nativeElement.lastChild;

    if (lastSection.isEqualNode(this.fullpage_api.getActiveSection().item)) {
      this.fullpage_api.moveSectionUp();
    }
    lastSection.remove();

    this.fullpage_api.build();
  }

  randomColor() {
    return '#' + Math.random().toString(16).slice(-3);
  }
}
