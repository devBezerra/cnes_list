import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-cnes-form-skeleton',
  imports: [CardModule, Skeleton],
  templateUrl: './cnes-form-skeleton.component.html',
  styleUrl: './cnes-form-skeleton.component.scss',
})
export class CnesFormSkeletonComponent implements OnInit {

  ngOnInit(): void {}
}
