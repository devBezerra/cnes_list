import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-cnes-location',
  imports: [],
  templateUrl: './cnes-location.component.html',
  styleUrl: './cnes-location.component.scss',
})
export class CnesLocationComponent implements AfterViewInit {
  @Input() latitude!: number;
  @Input() longitude!: number;
  @Input() name!: string;
  private map!: L.Map;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.map = L.map('map').setView([this.latitude, this.longitude], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
        this.map
      );

      L.marker([this.latitude, this.longitude])
        .addTo(this.map)
        .bindPopup(this.name)
        .openPopup();
    }, 0);
  }
}
