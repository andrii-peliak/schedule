import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DARK_THEME, IPartOfDay} from "../../models/left-sidenav.interface";
import {getPartsOfDay} from "../../helpers/left-sidenav.helper";
import {NgxMaterialTimepickerTheme} from "ngx-material-timepicker";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss']
})
export class LeftSidenavComponent implements OnInit {
  @ViewChild('chipInput') chipInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  public partsOfDay: IPartOfDay[] = getPartsOfDay();
  public darkTheme: NgxMaterialTimepickerTheme = DARK_THEME;
  public chips: string[] = ['Once'];
  public allChips: string[] = ['Once', 'Every week', 'Every day', 'Every month'];
  public chipCtrl: FormControl = new FormControl();
  public filteredChips: Observable<string[]>;
  public separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit(): void {
    this.filteredChips = this.chipCtrl.valueChanges.pipe(
      startWith(null),
      map((chip: string | null) => chip ? this._filter(chip) : this.allChips.filter(chip => !this.chips.includes(chip)).slice()));
  }

  public removeChip(chip: string): void {
    const index = this.chips.indexOf(chip);
    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }

  public selectChip(event: MatAutocompleteSelectedEvent): void {
    this.chips.push(event.option.viewValue);
    this.chipInput.nativeElement.value = '';
    this.chipCtrl.setValue(null);
  }

  addChip(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.chips.push(value.trim());
    }
    if (input) {
      input.value = '';
    }

    this.chipCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const chips = this.allChips.filter(chip => !this.chips.includes(chip))

    return chips.filter(chip => chip.toLowerCase().indexOf(filterValue) >= 0);
  }
}
