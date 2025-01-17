import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './service/http.service';
import { NgFor } from '@angular/common';
import Swiper from 'swiper';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Slick } from 'ngx-slickjs';
import { WordlimitPipe } from './pipes/wordlimit.pipe';
import { RatingComponent } from './rating/rating.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,SlickCarouselModule,WordlimitPipe,RatingComponent,
    CountdownTimerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[Swiper,WordlimitPipe]
})
export class AppComponent {
  title = 'Shopping';
  New_Product:any=[];
  FullMrp:any='990'
  discount:any='';
  constructor(private api:HttpService){

this.api.Get_New_Product().subscribe((res:any)=>{
  this.New_Product=res;
  console.log(this.New_Product)

});

  }
 
  
  slideConfig = {
    "slidesToShow": 4,
    "draggable": true,
    "slidesToScroll": 4,
    "dots": false,
    "infinite": false,
    "pauseOnHover": true,
    arrows: false,
  // "autoplay":true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          // centerMode:true,
          pauseOnHover: true,
          draggable: true,

          arrows: false,
          // centerPadding:"4.5%",
          autoplay: false,

        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          arrows: false,
          draggable: true,

          autoplay: false,
          pauseOnHover: true,

          // centerMode:true,
          // centerPadding:"4.5%",

        }
      }
    ]
    // "margin":'30px'



  };
}
