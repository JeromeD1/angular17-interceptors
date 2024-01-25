import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestTimeService {

  constructor() { }

  requestTime: number = 0;

  setRequestTime(time: number) :void {
    this.requestTime = time;
  }

  getRequestTime() :number {
    return this.requestTime;
  }

  //Autre version pour la récupération et le partage de requestTime
  //Utilisation d'un BehaviourSubject (c'est un type d'Observable) qui maintient une valeur courante de la donnée
  //si pour quelque raison que ce soit la valeur de la donnée change, elle est automatiquement mise à jour et émise à tous les observateurs
  private requestTimeSource = new BehaviorSubject<number>(0); //valeur de type number initialisée à 0
  currentRequestTime = this.requestTimeSource.asObservable();

  setRequestTimeSource(time: number) :void {
    this.requestTimeSource.next(time);
  }
  //pas besoin de méthode get car requestTimeSource est un BehaviourSubject, donc il est mis à jour automatiquement lors de toute modification

}
