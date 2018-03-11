import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../launches.service';
import { Broadcaster } from '../broadcaster.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
    launch;

  constructor(private launchesService: LaunchesService,
              private broadcaster: Broadcaster,
              private router: Router) { }

  ngOnInit() {
      this.launch = this.launchesService.getCurrentLaunch();
      //In case te selection is changed, this listens for it and changes the launch value
      this.broadcaster.on('ChangeOnLaunch').subscribe(launch => {
          this.launch = this.launchesService.getCurrentLaunch();
      });
  }

  changeComponent() {
      this.router.navigate(['component-b']);
  }
}
