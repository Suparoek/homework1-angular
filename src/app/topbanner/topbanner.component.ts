import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.css']
})
export class TopbannerComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
