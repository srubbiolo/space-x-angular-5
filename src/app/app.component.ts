import { Component, OnInit } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaunchesService } from './launches.service';
import { Broadcaster } from './broadcaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allLaunches: any;
  launch = null;
  selectedValue = null;


  constructor(private dataProviderService: DataProviderService,
              private launchesService: LaunchesService,
              private broadcaster: Broadcaster) { }

  ngOnInit() {
    this.dataProviderService.getAllLaunches().subscribe(
        result => {
            if (result.code != 200) {
                console.log(result);
                this.allLaunches = result;
                this.selectedValue = this.allLaunches[0];
                this.launchesService.setLaunches(result);
                this.launchesService.setCurrentLaunch(this.selectedValue);
                this.broadcaster.broadcast('ChangeOnLaunch');
            } else {
                //nothing to do here
            }

        },
        error => {
            console.log(<any>error);
        }
    );
  }

  saveLaunch(selectedLaunch) {
      this.launch = selectedLaunch;
  }

  changedSelection() {
      this.launchesService.setCurrentLaunch(this.selectedValue);
      this.broadcaster.broadcast('ChangeOnLaunch');
  }
}
