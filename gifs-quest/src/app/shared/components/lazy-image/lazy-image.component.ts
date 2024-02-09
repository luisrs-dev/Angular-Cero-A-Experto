import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {


  @Input()
  public url: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(){
    if(!this.url) throw new Error('URL requerido')
  }

  onLoad(){
    setTimeout( () =>{
      this.hasLoaded = true;
    })
  }

}
