import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http:HttpClient) { }
  //data objects
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  recentlyAddedRequest:any;

  setRecentRequest(request:any){
    this.recentlyAddedRequest = request;
  }
  getRecentRequest(){
    return this.recentlyAddedRequest;
  }

  //add a new food Request from an NGO
  addFoodRequest(foodRequest:any,currentNgo:any){
    foodRequest.ngoEmail = currentNgo.email;
    foodRequest.ngoName = currentNgo.name;
    return this.http.post(environment.apiBaseUrl + '/api/add-food-request',foodRequest,this.noAuthHeader);
  }

  //add a new food Package from a restaurant
  addFoodPackage(foodPackage:any,currentRestaurant:any){
     foodPackage.restaurantEmail = currentRestaurant.email;
     foodPackage.restaurantName = currentRestaurant.name;
     return this.http.post(environment.apiBaseUrl + '/api/add-food-package',foodPackage,this.noAuthHeader);
  }

  getCurrentPackages(currentRestaurant:any){
    return this.http.post(environment.apiBaseUrl + '/api/get-current-packages',currentRestaurant,this.noAuthHeader);
  }

  getCurrentRequests(currentNgo:any){
    return this.http.post(environment.apiBaseUrl + '/api/get-current-requests',currentNgo,this.noAuthHeader);
  }

  getAllPendingRequests(){
    return this.http.get(environment.apiBaseUrl + '/api/get-all-pending-requests',this.noAuthHeader);
  }
  getAllAvailablePackages(){
    return this.http.get(environment.apiBaseUrl + '/api/get-all-available-packages',this.noAuthHeader);
  }
  removeRequest(request:any){
    return this.http.post(environment.apiBaseUrl + '/api/remove-request',request,this.noAuthHeader);
  }
  getAvailablePackages(){
    return this.http.post(environment.apiBaseUrl + '/api/get-available-packages',this.recentlyAddedRequest,this.noAuthHeader);
  }
  sendRequestNotice(ids:any){
    return this.http.post(environment.apiBaseUrl + '/api/send-request-notice',ids,this.noAuthHeader);
  }
  getResNotifications(currentRestaurant:any){
    return this.http.post(environment.apiBaseUrl + '/api/get-restaurant-notifications',currentRestaurant,this.noAuthHeader);
  }
  getNgoNotifications(currentNgo:any){
    return this.http.post(environment.apiBaseUrl + '/api/get-ngo-notifications',currentNgo,this.noAuthHeader);
  }
  removePackage(Package:any){
    return this.http.post(environment.apiBaseUrl + '/api/remove-package',Package,this.noAuthHeader);
  }
  updatePackage(packageToBeUpdated:any){
    return this.http.post(environment.apiBaseUrl + '/api/update-package',packageToBeUpdated,this.noAuthHeader);
  }
  updateRequest(request:any){
    return this.http.post(environment.apiBaseUrl + '/api/update-request',request,this.noAuthHeader);
  }
  confirmRequest(ids:any){
    return this.http.post(environment.apiBaseUrl + '/api/confirm-request',ids,this.noAuthHeader);
  }
  changeRequestStatus(notification:any){
    return this.http.post(environment.apiBaseUrl + '/api/change-request-status',notification,this.noAuthHeader);
  }
}

