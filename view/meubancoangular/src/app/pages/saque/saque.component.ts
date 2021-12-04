import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)
  })
  constructor(private contaService: ContasService, private router: Router) { }

  ngOnInit(): void {
  }

  sacar() {
    const saque: ISaqueDeposito = this.formGroup.value;
    this.contaService.saque(saque).subscribe(saqueAPI => {
      Swal.fire('Funcionou!', 'Saque com sucesso', 'success');
      console.log(saqueAPI);
      this.router.navigate(['/saque']);
    }, error => {
      console.log(error)
    })
  }
}
