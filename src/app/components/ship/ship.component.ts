import { Component, OnInit } from '@angular/core';
import { TemplateVessels } from '../../TemplateVessels';
import { Ship } from '../../Ship';
import { Field } from '../../Field';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  templateVessels: TemplateVessels[] = [];
  ships: Ship[] = [];

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.getShips().subscribe((templateVessels) => this.templateVessels = templateVessels);
  }

  createShip(templateVessel: TemplateVessels) {
    var ship: Ship = {id: templateVessel.id, startPosition:[{row:20, column:20}]}
    this.ships.push(ship);
  }
}
