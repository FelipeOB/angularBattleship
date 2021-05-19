import { Component, OnInit } from '@angular/core';
import { TemplateVessels } from '../../TemplateVessels';
import { Ship } from '../../Ship';
import { Field } from '../../Field';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  fields: Field[] = [];
  templateVessels: TemplateVessels[] = [];
  ships: Ship[] = [];

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.fields = this.boardService.generateFields(5);
    this.boardService.getShips().subscribe((templateVessels) => this.templateVessels = templateVessels);
  }

  setShipPosition(id: number) {

  }

}
