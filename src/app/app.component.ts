import { Component, OnInit } from '@angular/core';
import { MyApiDataService } from './services/my-api-data.service';
import { RequestTimeService } from './services/request-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private myApiData: MyApiDataService, private requestTimeService: RequestTimeService) {}

  title = 'challenge17Interceptor';

  myData: any = {};

  //requestTime pour la méthode sans BehaviourSubject
  requestTime!: number; 

    //requestTime pour la méthode avec BehaviourSubject
  currentRequestTime! : number;


  ngOnInit(): void {
      this.myApiData.getData().subscribe(res => {
        this.myData = res
        console.log("my api data : ", this.myData);

        //je récupère requestTime dans ma fonction subscribe afin dêtre sur que ma requete est terminée au moment de récupérer
        //requestTime (pour que ma valeur ait été bien mise à jour)
        this.requestTime = this.requestTimeService.getRequestTime();
      });

      //pour currentRequestTime, pas besoin de le mettre dans la fonction subscribe de muAPIData.getData() 
      //car la valeur est mise à jour automatiquement
      this.requestTimeService.currentRequestTime.subscribe(time => this.currentRequestTime = time);
      
  }

  
}
