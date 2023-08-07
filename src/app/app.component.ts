import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ampleLogic';

  progressValue =  0;

  progress: boolean = true;
  showStart: boolean = true;
  snackbar: boolean = false;
  slideBox!: boolean;
  
 
  toggleClass(){
    this.slideBox = !this.slideBox;
  }
 
  startService() {
    
    this.showStart = false;
    let i = 0;
  
    const updateProgress = () => {
      if (i <= 100) {
        this.progressValue = i;
        i += 1;
        setTimeout(updateProgress, 100); 

        if(this.progressValue == 100){
          this.snackbar = true;
          setTimeout(()=>{
            if(this.snackbar == true){
              this.snackbar = false;
            }
          }, 5000);
        }
       
        
      }
    };
  
    updateProgress();
  }

}
