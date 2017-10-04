import { Component, OnInit } from '@angular/core';
import { GithubFolowersService } from './github-folowers.service';

@Component({
  selector: 'app-github-folowers',
  templateUrl: './github-folowers.component.html',
  styleUrls: ['./github-folowers.component.css']
})
export class GithubFolowersComponent implements OnInit {
  private folowers: any[];

  constructor(private service: GithubFolowersService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(folowers => this.folowers = folowers);
  }

}
