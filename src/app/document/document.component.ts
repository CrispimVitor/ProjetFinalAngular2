import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'app/services/document.service';
import { Document } from 'app/models/document';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  documents:any[];
  document: Document = new Document();
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.locadDocument();
  }
  locadDocument() {
    this.documentService.getAllDocument().subscribe(
      data => {this.documents = data;},
      error => {console.log(error);}
    )
  }
  createDocument() {
    this.documentService.saveDocument(this.document).subscribe(
      () => {this.locadDocument(); this.document = new Document(); }
    )
  }
  eliminateDocument(document) {
    this.documentService.deleteDocument(document.idDocument).subscribe(
      () => {this.locadDocument();},
      error => {console.log(error);}
    )
  }

}
