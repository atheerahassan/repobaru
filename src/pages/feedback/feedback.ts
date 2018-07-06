import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
  upload=[]
  constructor(public navCtrl: NavController) {

 this.upload.push({
      img:"assets/imgs/profpic1.png",
      content:'Lorem ipsum dolor sit amet,', 
      content1:'consectetur adipiscing elit, sed do',
      content2: 'eiusmod tempor incididunt ut',
      content3:'labore et dolore magna aliqua.',
      when: 'Thomas - 20 days ago'
    })

    this.upload.push({
      img:"assets/imgs/profpic4.png",
      content:'Lorem ipsum.',
      when: 'Elyse - 3 months ago'
    })

    this.upload.push({
      img:"assets/imgs/profpic3.png",
      content:'Lorem ipsum dolor sit amet,', 
      content1:'consectetur adipiscing elit, sed do',
      content2: 'eiusmod tempor incididunt ut',
      content3:'labore et dolore magna aliqua. Ut...',
      when: 'John - Last year',
      imgs: "assets/imgs/4.png"
    })

    this.upload.push({
      img:"assets/imgs/profpic1.png",
      content:'Lorem ipsum dolor sit amet,', 
      content1:'consectetur adipiscing elit, sed do',
      content2: 'eiusmod tempor incididunt ut',
      content3:'labore et dolore magna aliqua.',
      when: 'Thomas - Last year'
    })

    

  }

}

