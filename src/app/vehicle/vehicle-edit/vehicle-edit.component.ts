import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/service/vehicle.service';
import { Vehicle } from 'src/app/service/Vehicle';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {

  editForm: FormGroup;
  error: string;
  saved: boolean;
  add: any;
  constructor(private vehicleService: VehicleService, private route: ActivatedRoute, private fb: FormBuilder) { }
  ngOnInit() {
    this.editForm = this.fb.group({
      id: [],
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(200)
      ]],
      rent: [, [Validators.required, Validators.pattern("^[0-9]*$")]],
      model: ['', [Validators.required, Validators.minLength(2),
      Validators.maxLength(200)]],
      number: [, Validators.required],
      yearOfManufacture: ['', Validators.required],
      insuranceRenewalDate: ['', Validators.required],
      lastServiceDate: ['', Validators.required],
      nextServiceDate: ['', Validators.required],
      seater: [, Validators.required],
      vehicleType: ['', Validators.required],
      imageUrl: ['', Validators.required],
      mileage: [, Validators.required],
    });
    this.route.params.subscribe((params: Params) => {
      const vehicleId = params['id'];
      this.vehicleService.getVehicle(vehicleId).subscribe((vehicle: Vehicle) => {
        if (vehicle) {
          this.editForm.patchValue({
            id: vehicleId,
            name: vehicle.name,
            imageUrl: vehicle.imageUrl,
            rent: vehicle.rent,
            model: vehicle.model,
            number: vehicle.number,
            mileage: vehicle.mileage,
            yearOfManufacture: vehicle.yearOfManufacture,
            insuranceRenewalDate: vehicle.insuranceRenewalDate,
            lastServiceDate: vehicle.lastServiceDate,
            nextServiceDate: vehicle.nextServiceDate,
            seater: vehicle.seater,
            vehicleType: vehicle.vehicleType
          })
        }
      });
    });
  }

  get id() {
    return this.editForm.get('id');
  }
  get name() {
    return this.editForm.get('name');
  }
  get imageUrl() {
    return this.editForm.get('imageUrl');
  }
  get rent() {
    return this.editForm.get('rent');
  }
  get model() {
    return this.editForm.get('model');
  }
  get number() {
    return this.editForm.get('number');
  }
  get mileage() {
    return this.editForm.get('mileage');
  }
  get yearOfManufacture() {
    return this.editForm.get('yearOfManufacture');
  }
  get insuranceRenewalDate() {
    return this.editForm.get('insuranceRenewalDate');
  }
  get lastServiceDate() {
    return this.editForm.get('lastServiceDate');
  }
  get nextServiceDate() {
    return this.editForm.get('nextServiceDate');
  }
  get seater() {
    return this.editForm.get('seater');
  }
  get vehicleType() {
    return this.editForm.get('vehicleType');
  }

  onSaveClick() {
    this.vehicleService.updateVehicle(this.editForm.value).subscribe(
      data => {
        console.log('update successful.');
        this.error = '';
        this.saved = true;
        console.log("Is saved -> " + this.saved)
      }
    );
  }
}
