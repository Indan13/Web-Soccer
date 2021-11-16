import { Injectable } from "@angular/core";
import { SEASON_SCHEDULE,Teams } from "./ScheduleData";

@Injectable({
    providedIn:'root',
})

export class SoccerService{
    getScheduleAsync(){
        return Promise.resolve
    }
}