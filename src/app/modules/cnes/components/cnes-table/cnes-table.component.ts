import { Component, OnInit } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CnesService } from '../../cnes.service';
import { CnesInterface } from '../../interfaces/cnes.interface';
import { PaginatorModule } from 'primeng/paginator';
import { CnesListSkeletonComponent } from '../cnes-list-skeleton/cnes-list-skeleton.component';
import { CnesListCols } from '../../constants/cnes-list-cols.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cnes-table',
  imports: [
    TableModule,
    PaginatorModule,
    TagModule,
    IconFieldModule,
    MultiSelectModule,
    SelectModule,
    CommonModule,
    CnesListSkeletonComponent,
  ],
  templateUrl: './cnes-table.component.html',
  styleUrl: './cnes-table.component.scss',
})
export class CnesTableComponent implements OnInit {
  public cnes!: CnesInterface[];
  public loading: boolean = true;

  first: number = 0;

  rows: number = 13;

  currentPage: number = 1;

  total: number = 50000; //Número genérico, apenas para referência de paginação.

  cols = CnesListCols;

  constructor(private readonly service: CnesService, public router: Router) {}

  ngOnInit(): void {
    this.service.findAll(this.first, this.rows).subscribe((res) => {
      this.cnes = res.estabelecimentos;
      this.loading = false;
    });
  }

  onPageChange(event: any) {
    this.loading = true;
    this.first = event.first;
    this.rows = event.rows;
    this.currentPage = event.page + 1;
    const offset = ((this.currentPage || 1) - 1) * this.rows;

    this.service.findAll(offset, this.rows).subscribe((res) => {
      this.cnes = res.estabelecimentos;
      this.loading = false;
    });
  }

  openEstablishmentDetails(code: number) {
    this.router.navigateByUrl(`/estabelecimento/${code}`);
  }
}
