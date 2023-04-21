import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private storage: Storage) { }

  url: string = "";

public uploadImagen($event:any, name: string){
  const file = $event.target.files[0];
  const imgRef = ref(this.storage, `imagenes/`+ name );
  uploadBytes(imgRef, file)
  .then(response => {this.getImagen(name)})
  .catch(error => console.log(error))
}

public getImagen(name: string){
  const imagesRef = ref(this.storage, 'imagenes')
  list(imagesRef)
  .then(async response => {
    for(let item of response.items){
      console.log(item.name)
      if(item.name == name){
        this.url =await getDownloadURL(item);
      }
      
    }
  })
  .catch(error => console.log(error))
}

}
