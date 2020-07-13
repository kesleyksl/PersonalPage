import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-dialog-curso',
  templateUrl: './dialog-curso.component.html',
  styleUrls: ['./dialog-curso.component.css']
})
export class DialogCursoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogCursoComponent>,
    
    @Inject(MAT_DIALOG_DATA) public data: Curso) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
