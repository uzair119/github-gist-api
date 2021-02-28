import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.css']
})
export class GistsComponent implements OnInit {

  public data;
  public username;
  public gists = [];
  public isVisible = false;
  public gistData: any;
  public isFileModalVisible = false;
  public fileContent;

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.getGists();
  }

  getGists(search?: string){
    if (search) {
      this.username = search;
      this.httpService.get(`users/${search}/gists`).then(res => this.gists = res);
    } else {
      this.username = 'Public';
      this.httpService.get(`gists`).then(res => this.gists = res);
      this.gists = [];
    }
  }

  viewGistDetails(gist) {
    this.httpService.get(`gists/${gist.id}`).then(res => {
      this.gistData = res;
      this.gistData.lastThreeForks = this.getLastThreeForksUsernames(this.gistData);
      this.isVisible = true;
    });
  }

  getLastThreeForksUsernames(gist) {
    if (!gist?.forks?.length) {
      return '';
    }
    let forks: any[] = gist.forks;
    forks = forks.sort((fork1, fork2) => {
      const fork1CreationDate = new Date(fork1.created_at).valueOf();
      const fork2CreationDate = new Date(fork2.created_at).valueOf();
      return fork2CreationDate - fork1CreationDate;
    });
    return forks.map(fork => fork.user?.name).slice(0, 3).join(", ");
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleFileModalOk(): void {
    this.isFileModalVisible = false;
  }

  viewFileContent(file) {
    this.isFileModalVisible = true;
    this.fileContent = file.content;
  }
}
