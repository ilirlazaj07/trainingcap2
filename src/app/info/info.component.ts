import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  attivitaUlteriori: string[] = [
    'Aggiunto il modulo HTTP per la chiamata agli utenti',
    'Aggiunto il DeActivate',
    'Aggiunto il loader per il passaggio da una route all\'altra',
    'Aggiunti li stili adeguati affinche\' si possa distinguere lo user corrente che si sta visitando '
  ];

  ngOnInit() {
  }

}
