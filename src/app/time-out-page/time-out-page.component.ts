import { Component, OnInit, ViewChild, TemplateRef, HostListener} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

const TIMEOUT = 1800; // 30 minutes
const IDLETIME = 600; // 10 minutes

@Component({
  selector: 'app-time-out-page',
  templateUrl: './time-out-page.component.html',
  styleUrls: ['./time-out-page.component.scss']
})
export class TimeOutPageComponent implements OnInit {

  @ViewChild('idleTimeWarningDialogTemplate', { static: true }) idleTimeWarningDialog: TemplateRef<any>;
  timeLeft;
  secondsLeft;
  minutesLeft;
  timeOutInterval;
  idleTime;
  idleTimeLeft;
  idleSecondsLeft;
  idleMinutesLeft;

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.timeLeft = TIMEOUT;
    this.secondsLeft = 60;
    this.minutesLeft = TIMEOUT / 60;
    this.startTimer();
    this.idleTimeLeft = IDLETIME;
    this.idleSecondsLeft = 60;
    this.idleMinutesLeft = IDLETIME / 60;
    this.startIdleTimer();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  ////////////////////////////// TIMERS /////////////////////////////////
  @HostListener('document:mousemove', ['$event']) onMouseMove(e) {
    clearInterval(this.idleTime);
    this.resetIdleTimer();
    this.startIdleTimer();
  }

  public startIdleTimer() {
    this.idleTime = setInterval(() => {
      if (this.idleTimeLeft > 0) {
        if (this.idleTimeLeft === IDLETIME) {
          this.idleMinutesLeft--;
        }
        if (this.idleTimeLeft === IDLETIME / 2) {
          this.openIdleTimeWarningDialog();
        }
        this.idleTimeLeft--;
        this.idleSecondsLeft--;
        if (this.idleSecondsLeft === 0 && this.idleMinutesLeft > 0) {
          this.idleMinutesLeft--;
          this.idleSecondsLeft = 60;
        }
        // console.log(this.idleTimeLeft);
      } else {
        // logout and return to the login page 
      }

    }, 1000);
  }

  public resetIdleTimer() {
    this.idleTimeLeft = IDLETIME;
    this.idleSecondsLeft = 60;
    this.idleMinutesLeft = IDLETIME / 60;
  }

  startTimer() {
    this.timeOutInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        if (this.timeLeft === TIMEOUT) {
          this.minutesLeft--;
        }
        this.timeLeft--;
        this.secondsLeft--;
        if (this.secondsLeft === 0 && this.minutesLeft > 0) {
          this.minutesLeft--;
          this.secondsLeft = 60;
        }
      } else {
        // logout and return to the login page
      }
    }, 1000);
  }

  resetTimer() {
    this.timeLeft = TIMEOUT;
    this.secondsLeft = 60;
    this.minutesLeft = TIMEOUT / 60;
  }

  openIdleTimeWarningDialog() {
    const dialogRef = this.dialog.open(this.idleTimeWarningDialog);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  /////////////////////////////////////////////////////////////////////////////////////
}
