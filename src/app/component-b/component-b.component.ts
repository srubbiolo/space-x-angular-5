import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { LaunchesService } from '../launches.service';
import { Broadcaster } from '../broadcaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
@Pipe({ name: 'safe' })
export class ComponentBComponent implements PipeTransform, OnInit {
  constructor(private sanitizer: DomSanitizer,
              private launchesService: LaunchesService,
              private broadcaster: Broadcaster,
              private router: Router) {}
  launch;

  ngOnInit() {
      this.launch = this.launchesService.getCurrentLaunch();
      //In case te selection is changed, this listens for it and changes the launch value
      this.broadcaster.on('ChangeOnLaunch').subscribe(launch => {
          this.launch = this.launchesService.getCurrentLaunch();
      });
  }

  transform(url) {
    url = url.replace("watch?v=", "embed/");
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  changeComponent() {
      this.router.navigate(['component-a']);
  }

}