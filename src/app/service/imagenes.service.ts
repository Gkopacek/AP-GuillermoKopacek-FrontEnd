import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private storage: Storage) { }

  url: string = "";

public uploadImagen($event:any/*, name: string*/){
  const file = $event.target.files[0];
  console.log(file)
  const imgRef = ref(this.storage, `imagenes/`+ name );
  uploadBytes(imgRef, file)
  .then(response => {this.getImagen()})
  .catch(error => console.log(error))
}

public getImagen(){
  const imagesRef = ref(this.storage, 'imagenes')
  list(imagesRef)
  .then(async response => {
    for(let item of response.items){
      this.url =await getDownloadURL(item);
      console.log("la URL es: " , this.url)
    }
  })
  .catch(error => console.log(error))
}

}
