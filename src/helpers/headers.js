import { token } from "./dataUser";

export const headers = {
    "Authorization": 'Bearer ' + token
};

export const getHeaders = (userData) => {
    let headers = ''
        if (!userData) {
            headers = { Authorization: `Bearer ${token}` };
        } else {
            headers = { Authorization: `Bearer ${userData.token}` };
        }
    return headers;
}

export const cargarImagen = (e, setLoadImage) => {
    const file = e.target.files;
    if (!file) {
      printImg.innerHTML = "";
      return;
    }
    const archivo = file[0];
    const imgUri = URL.createObjectURL(archivo);
    setLoadImage({
      url: imgUri,
      size: archivo.size,
    });
  };
