import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  // Representa a rota ativa
  constructor(private route: ActivatedRoute, private router: Router) { }

  id = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = this.route.snapshot.params.id;
    })
  }

  inicio() {
    this.router.navigate([""]);
  }

}
