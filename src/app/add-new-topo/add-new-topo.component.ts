import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateTopoEnum} from '../enums/createTopo.enum';
import {UploadTopoService} from '../services/uploadTopo.service';
import {Secteur, Topo, Voie} from '../interfaces/uploadTopo.interface';
@Component({
  selector: 'app-add-new-topo',
  templateUrl: './add-new-topo.component.html',
  styleUrls: ['./add-new-topo.component.css']
})
export class AddNewTopoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private uploadTopoService: UploadTopoService) { }
  createTopo: CreateTopoEnum;
  newTopoForm: FormGroup;
  newSecteurForm: FormGroup;
  newVoieForm: FormGroup;
  filledTopo: Topo = {
    nameTopo: this.newTopoForm.value.nameTopo,
    region: this.newTopoForm.value.region,
    pays: this.newTopoForm.value.nameTopo,
    fichierTopo: this.newTopoForm.value.nameTopo,
    statutTopo: this.newTopoForm.value.nameTopo
};
  secteurs[this.filledSecteur]: Secteur[]
  filledSecteur: Secteur = {
    nameSecteur: this.newSecteurForm.value.nameSecteur,
    height : this.newSecteurForm.value.height
  }
  filledVoie = {
    nameVoie: this.newVoieForm.value.nameVoie,
    nameSecteur: this.newVoieForm.value.nameSecteur,
    difficulty: this.newVoieForm.value.difficulty,
    numberOfPoints: this.newVoieForm.value.numberOfPoints
  }

  ngOnInit() {
    this.createTopo = CreateTopoEnum.topo;
    this.initForm();

  }
  initForm() {
    this.newTopoForm = this.formBuilder.group(
      {
        nameTopo: ['', Validators.required],
        region: ['', Validators.required],
        pays: ['', Validators.required],
        fichierTopo: ['', Validators.required],
        statutTopo: ['', Validators.required]
      }
    );
    this.newSecteurForm = this.formBuilder.group({
      nameSecteur: ['', Validators.required],
      height: ['', Validators.required]
    });
    this.newVoieForm = this.formBuilder.group({
      nameVoie: ['', Validators.required],
      nameSecteur: ['', Validators.required],
      difficulty: ['', Validators.required],
      numberOfPoints: ['', Validators.required]
    });
  }
  isOnTopo() {
    return this.createTopo === CreateTopoEnum.topo;
  }
  isOnSecteur() {
    return this.createTopo === CreateTopoEnum.secteur;
  }
  isOnVoie() {
    return this.createTopo === CreateTopoEnum.voie;
  }
  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.newTopoForm.value.fichierTopo = btoa(binaryString);
    console.log(btoa(binaryString));
  }

  next() {
    if (this.isOnTopo()) {
      console.log(this.newTopoForm.value.fichierTopo)
      this.createTopo = CreateTopoEnum.secteur;
    } else if (this.isOnSecteur()) {
      this.createTopo = CreateTopoEnum.voie;
    } else if (this.isOnVoie()) {
      this.uploadTopoService.upload(this.newTopoForm, this.newSecteurForm, this.newVoieForm);
    }
  }
}
