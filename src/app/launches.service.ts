import { Injectable } from '@angular/core';

@Injectable()
export class LaunchesService {
allLaunches: Object;
currentLaunch: Object;

  constructor() {}
  setLaunches(launches) {
      this.allLaunches = launches;
  }

  getAllLaunches() {
      return this.allLaunches;
  }

  setCurrentLaunch(launch) {
      this.currentLaunch = launch;
  }

  getCurrentLaunch() {
      return this.currentLaunch;
  }
}
