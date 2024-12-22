import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CnesService } from '../../cnes.service';
import { CnesInterface } from '../../interfaces/cnes.interface';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CnesFormSkeletonComponent } from '../cnes-form-skeleton/cnes-form-skeleton.component';
import { CnesLocationComponent } from '../cnes-location/cnes-location.component';
import { InputNumber } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cnes-form',
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CardModule,
    CnesFormSkeletonComponent,
    CnesLocationComponent,
    InputNumber,
  ],
  templateUrl: './cnes-form.component.html',
  styleUrl: './cnes-form.component.scss',
})
export class CnesFormComponent implements OnInit {
  code: number | null = null;
  establishment?: CnesInterface;
  public loading: boolean = true;
  disabled: boolean = true;

  public form: FormGroup = new FormGroup({
    codigo_cnes: new FormControl(),
    nome_razao_social: new FormControl(),
    nome_fantasia: new FormControl(),
    numero_cnpj: new FormControl(),
    numero_telefone_estabelecimento: new FormControl(),
    endereco_email_estabelecimento: new FormControl(),
    codigo_estabelecimento_saude: new FormControl(),
    descricao_turno_atendimento: new FormControl(),
    codigo_cep_estabelecimento: new FormControl(),
    endereco_estabelecimento: new FormControl(),
    numero_estabelecimento: new FormControl(),
    bairro_estabelecimento: new FormControl(),
  });

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private readonly service: CnesService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.code = params.get('code');
      if (this.code) {
        this.service.findOneByCode(this.code).subscribe((res: any) => {
          this.establishment = res;
          this.form.patchValue(this.establishment!);
          this.form.disable();
          this.loading = false;
        });
      } else {
        this.loading = false;
      }
    });
  }

  onSubmit() {
    this.service.create(this.form.value).subscribe(() => {
    });
  }

  checkLength() {
    if (this.form.get('codigo_cep_estabelecimento')?.value.length === 8) {
      this.searchCep();
    }
  }

  searchCep() {
    const cep = this.form.get('codigo_cep_estabelecimento')?.value;
    if (cep) {
      this.service.findCEP(cep).subscribe((res: any) => {
        this.form.get('bairro_estabelecimento')?.setValue(res.bairro);
        this.form.get('endereco_estabelecimento')?.setValue(res.logradouro);
      });
    }
  }

  back() {
    this.router.navigateByUrl('');
  }
}
