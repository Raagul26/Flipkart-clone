import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(){
    document.getElementById("modal-id")?.classList.remove("hidden")
    document.getElementById("modal-id")?.classList.add("flex");
}

  modalClose()
  {
    document.getElementById("modal-id")?.classList.remove("flex")
    document.getElementById("modal-id")?.classList.add("hidden");
  }

}
