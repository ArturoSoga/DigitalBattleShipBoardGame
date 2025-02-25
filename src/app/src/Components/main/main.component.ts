import { Component,inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

@Component({
  selector: 'app-main',
  imports: [
    MatButtonModule,MatIconModule,MatDividerModule, MatDialogModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  readonly dialog = inject(MatDialog);

  title = 'BattleshipDigitalBoardGame';
  private ObjDialog:any = null;

  openDialog(BtnAction :string) {

    if(BtnAction == "Local" ){
      this.ObjDialog = {
        Action:BtnAction,
        Subtitle:"Claramente esta es una version No oficial del juego de mesa.",
        Descripction:"Instrucciones: Cada barco tiene un valor de 1 a 3 puntos , en total elejiras 8 puntos y los acomodaras en la zona cuadriculada , ahora elijes cordenadas y disparas . Gana el ultimo en pie.(cuando la zona cuadriculada se pone negro es el turno del siguiente )",
        btnClose:true,
        btnNext:true
      }
    }else if(BtnAction == "Red"){
      this.ObjDialog = {
        Action:BtnAction,
        Subtitle:"Ups! esta funcionalidad aun no esta diponible.",
        Descripction:"El objetivo de esta funcionalidad es poder jugar online con otro jugador en pantallas diferentes . como sea proximamente le dedicare tiempo ",
        btnClose:true,
        btnNext:false
      }
    }

    this.dialog.open(DialogInfoComponent,{
      data:this.ObjDialog
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    //  });
    // alert("Aaaa!")
  }
}
