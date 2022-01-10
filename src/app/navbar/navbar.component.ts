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

  onhover()
  {
    document.getElementById("login-dropdown")?.classList.remove("hidden")
  }

  onleave()
  {
    document.getElementById("login-dropdown")?.classList.add("hidden")
  }

  openmore()
  {
    document.getElementById("more-dropdown")?.classList.add("flex-initial")
    document.getElementById("more-dropdown")?.classList.remove("hidden")
  }

  closemore()
  {
    document.getElementById("more-dropdown")?.classList.add("hidden")
    document.getElementById("more-dropdown")?.classList.remove("flex-initial")

  }
}
