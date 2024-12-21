import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Skeleton } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';
import { CnesListCols } from '../../constants/cnes-list-cols.constant';

@Component({
  selector: 'app-cnes-list-skeleton',
  imports: [Skeleton, TableModule, CommonModule],
  templateUrl: './cnes-list-skeleton.component.html',
  styleUrl: './cnes-list-skeleton.component.scss',
})
export class CnesListSkeletonComponent implements OnInit {
  arraySkeleton: any[] | undefined;

  cols = CnesListCols;

  ngOnInit(): void {
    this.arraySkeleton = Array.from({ length: 5 }).map((_, i) => `Item #${i}`);
  }
}
